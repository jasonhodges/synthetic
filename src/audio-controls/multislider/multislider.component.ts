import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-multislider',
  templateUrl: './multislider.component.html',
  styleUrls: ['./multislider.component.scss']
})
export class MultisliderComponent implements OnInit {
  @ViewChild('multislider') multislider: ElementRef;
  @Input() id: string;
  @Input() color: [string, string];
  @Input() size: string;
  @Input() numberOfSliders: number;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() values: Number[];

  constructor() {
  }

  ngOnInit() {
    Nexus.context = Tone.context;
    Nexus.colors.fill = '#444';

    let newMultislider = new Nexus.Multislider(this.id, {
      'size': this.size,
      'numberOfSliders': this.numberOfSliders,
      'min': this.min,
      'max': this.max,
      'step': this.step,
      'values': this.values
    });

    this.color ? newMultislider.colorize(this.color[0], this.color[1]) : newMultislider.colorize('accent', '#00e6ac');

    this.multislider = newMultislider;
  }

}
