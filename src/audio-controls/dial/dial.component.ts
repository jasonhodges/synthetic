import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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
  @Input() size: [number,number];
  @Input() interaction: string;
  @Input() mode: string;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() value: number;
  @Input() color: [string, string];
  private Nexus: any;

  constructor() {  }

  ngOnInit() {
    Nexus.context = Tone.context;
    Nexus.colors.fill = '#444';
    let newDial = new Nexus.Dial(this.id, {
      'size': this.size,
      'interaction': this.interaction,
      'mode': this.mode,
      'min': this.min,
      'max': this.max,
      'step': this.step,
      'value': this.value
    });
    this.color ? newDial.colorize(this.color[0], this.color[1]) : newDial.colorize('accent', '#00e6ac');

    this.dial = newDial;

    newDial.on('change', this.onChange)
  }

  onChange(value: any) {
    console.log(`${this.settings.target} changed: ${value}`);
  }

}
