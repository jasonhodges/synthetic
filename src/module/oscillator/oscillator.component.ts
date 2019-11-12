import { Component, OnInit } from '@angular/core';
import * as Tone from 'tone';

// declare const Tone: any;

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.scss']
})
export class OscillatorComponent implements OnInit {
  osc;
  cvIn;
  currentType = 0;
  types = ["sine4", "sawtooth4", "square4", "triangle4"];
  currentClass = 0;
  classes = ['simple', 'fat', 'pwm', 'fm', 'am', 'pulse'];

  constructor() {
    this.osc = new Tone.OmniOscillator().start();
    this.cvIn = new Tone.Scale(
      Tone.Frequency('C2').toFrequency(),
      Tone.Frequency('C6').toFrequency());
    this.cvIn.connect(this.osc.frequency);
  }

  ngOnInit() {
  }

  updateType() {
    switch (this.currentClass) {
      case 1:
        this.osc.type = 'fat'+this.types[this.currentType];
        break;
      case 2:
        this.osc.type = 'pwm';
        break;
      case 3:
        this.osc.type = 'fm'+this.types[this.currentType];
        break;
      case 4:
        this.osc.type = 'am'+this.types[this.currentType];
        break;
      case 5:
        this.osc.type = 'pulse';
        break;
      default:
      case 0:
        this.osc.type = this.types[this.currentType];
        break;
    }
  }

  setType(i) {
    this.currentType = i;
    this.updateType();
  }

  setClass(i) {
    this.currentClass = i;
    this.updateType();
  }

}
