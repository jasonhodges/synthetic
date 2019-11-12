import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Theme } from '../../shared/theme';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-multislider',
  templateUrl: './multislider.component.html',
  styleUrls: ['./multislider.component.scss']
})
export class MultisliderComponent implements OnInit {
  @ViewChild('multislider', {static: false}) multislider: ElementRef;
  @Input() id: string;
  @Input() color: [string, string];
  @Input() size: string;
  @Input() numberOfSliders: number;
  @Input() min: number;
  @Input() max: number;
  @Input() step: number;
  @Input() values: Number[];
  @Output() change = new EventEmitter();
  theme = new Theme();

  constructor() {
  }

  ngOnInit() {
    let comp = this;

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

    this.color ? newMultislider.colorize(this.color[0], this.color[1]) : newMultislider.colorize('accent', comp.theme.strokes.orange);

    this.multislider = newMultislider;

    newMultislider.on('change', function (value?: any) {
      console.log(`multislider: ${JSON.stringify(value)}`)
      comp.change.emit(value)
    })
  }

}
