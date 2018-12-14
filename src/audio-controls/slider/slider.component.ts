import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild('slider') slider: ElementRef;
  @Input() id: string;
  @Input() signal: AudioParam;
  @Input() size: [number, number];
  @Input() mode: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() value: number;
  @Input() color: [string, string];
  @Output() change = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    let comp = this;

    Nexus.context = Tone.context;
    Nexus.colors.fill = '#444';

    let newSlider = new Nexus.Slider(comp.id, {
      'size': this.size || [20, 120],
      'mode': this.mode || 'relative',
      'direction': 'vertical',
      'min': this.min || 0,
      'max': this.max || 1,
      'step': this.step || 0,
      'value': this.value || 0
    });

    this.color ? newSlider.colorize(this.color[0], this.color[1]) : newSlider.colorize('accent', '#00e6ac');

    this.slider = newSlider;

    newSlider.on('change', function (value?: any) {
      // comp.signal.setValueAtTime(value, 0.1);
      // comp
      comp.change.emit(value);
    })
  }
}
