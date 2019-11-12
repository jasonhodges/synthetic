import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Mode } from '../../shared/mode.enum';

import * as Nexus from 'nexusui';
import * as Tone from 'tone';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  @ViewChild('position', {static: false}) position: ElementRef;
  @Output() change = new EventEmitter;
  @Input() id: string;
  @Input() color: [string, string];
  @Input() size: [number, number];
  @Input() mode: Mode;
  @Input() x: number;
  @Input() minX: number;
  @Input() maxX: number;
  @Input() stepX: number;
  @Input() y: number;
  @Input() minY: number;
  @Input() maxY: number;
  @Input() stepY: number;

  ngOnInit() {
    let comp = this;

    Nexus.context = Tone.context;
    Nexus.colors.fill = '#444';

    let newPosition = new Nexus.Position(this.id, {
      'size': this.size || [200, 200],
      'mode': this.mode || 'absolute',  // "absolute" or "relative"
      'x': this.x || 0.5,  // initial x value
      'minX': this.minX || 0,
      'maxX': this.maxX || 1,
      'stepX': this.stepX || 0,
      'y': this.y || 0.5,  // initial y value
      'minY': this.minY || 0,
      'maxY': this.maxY || 1,
      'stepY': this.stepY || 0
    });

    this.color ? newPosition.colorize(this.color[0], this.color[1]) : newPosition.colorize('accent', '#00e6ac');

    this.position = newPosition;

    newPosition.on('change', function (value?: any) {
      comp.change.emit(value);
    });
  }










}
