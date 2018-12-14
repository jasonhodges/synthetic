import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})
export class DialComponent implements OnInit {
  @ViewChild('dial') dial: ElementRef;
  @Input() id: string;
  @Input() size: [number, number];
  @Input() interaction: string;
  @Input() mode: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() value: number;
  @Input() color: [string, string];
  @Output() change = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    let comp = this;

    Nexus.context = Tone.context;
    Nexus.colors.fill = '#444';

    let newDial = new Nexus.Dial(this.id, {
      'size': this.size || [40, 40],
      'interaction': this.interaction || 'radial',
      'mode': this.mode || 'relative',
      'min': this.min || 0,
      'max': this.max || 1,
      'step': this.step || 0,
      'value': this.value || 0
    });

    this.color ? newDial.colorize(this.color[0], this.color[1]) : newDial.colorize('accent', '#00e6ac');

    this.dial = newDial;

    newDial.on('change', function (value?: any) {
      comp.change.emit(value);
    })
  }


}
