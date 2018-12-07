import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @ViewChild('slider') slider: ElementRef;
  @Input() id: string;
  @Input() size: [number, number];
  @Input() mode: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() value: number;
  @Input() color: [string, string];

  constructor() {
  }

  ngOnInit() {
    Nexus.context = Tone.context;
    Nexus.colors.fill = '#444';

    let newSlider = new Nexus.Slider(this.id, {
      'size': this.size,
      'mode': this.mode,
      'min': this.min,
      'max': this.max,
      'step': this.step,
      'value': this.value
    })
    this.color ? newSlider.colorize(this.color[0], this.color[1]) : newSlider.colorize('accent', '#00e6ac');

    this.slider = newSlider;
  }

}
