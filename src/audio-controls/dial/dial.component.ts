import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Theme } from '../../shared/theme';

declare var Nexus: any;
declare var Tone: any;
@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})
export class DialComponent implements OnInit, AfterViewInit {
  @ViewChild('dial') dial: TemplateRef<any>;
  @Input() id: string;
  @Input() signal: AudioParam;
  @Input() size: [number, number];
  @Input() interaction: string;
  @Input() mode: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() value: number;
  @Input() color: [string, string];
  @Output() change = new EventEmitter();
  theme = new Theme();

  constructor() {
  }

  ngOnInit() {
    if (!this.signal) {
      this.signal = new Tone.Signal((!!this.value)
        ? this.value
        : (this.max - this.min) / 2);
    }
  }

  ngAfterViewInit() {

    let comp = this;

    Nexus.context = Tone.context;
    Nexus.colors.fill = comp.theme.fills.main;
    Nexus.colors.accent = comp.theme.strokes.blue;

    let newDial = new Nexus.Dial(this.id, {
      'size': this.size || [40, 40],
      'interaction': this.interaction || 'radial',
      'mode': this.mode || 'relative',
      'min': this.min || 0,
      'max': this.max || 1,
      'step': this.step || 0,
      'value': this.value || 0
    });

    this.color ? newDial.colorize(this.color[0], this.color[1]) : newDial.colorize('accent', comp.theme.strokes.orange);

    this.dial = newDial;

    newDial.on('change', function (value?: any) {
      comp.signal.setValueAtTime(value, 0.1);
      comp.change.emit(value);
    })
  }

}
