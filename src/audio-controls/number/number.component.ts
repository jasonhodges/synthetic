import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  @ViewChild('number', {static: false}) number: ElementRef;
  @Input() id: string;
  @Input() color: [string, string];
  @Input() size: [number, number];
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() value: number;

  constructor() {
  }

  ngOnInit() {
    let comp = this;
    Nexus.context = Tone.context;
    Nexus.colors.fill = '#444';

    let newNumber = new Nexus.Number(this.id, {
      'size': this.size || [60, 30],
      'value': this.value || 0,
      'min': this.min || 0,
      'max': this.max || 1000,
      'step': this.step || 1
    });

    this.color ? newNumber.colorize(this.color[0], this.color[1]) : newNumber.colorize('accent', '#00e6ac');

    this.number = newNumber;
  }

}
