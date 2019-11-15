import { Component, OnInit } from '@angular/core';

declare const Tone: any;

@Component({
  selector: 'app-oscillator',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.scss']
})
export class OscillatorComponent implements OnInit {
  osc;
  cvIn;
  currentType = 0;
  currentClass = 0;
  // types = ['sine4', 'sawtooth4', 'square4', 'triangle4'];
  // classes = ['simple', 'fat', 'pwm', 'fm', 'am', 'pulse'];
  public oscType = [
    '',
    'am',
    'fm',
    'fat',
    'pulse',
    'pwm'
  ];
  public waveTypes = [
    'sine',
    'square',
    'sawtooth',
    'triangle',
  ];
  private oscTypeString = '';
  private waveTypeString = 'sine';
  private count = 0;

  constructor() {
    this.osc = new Tone.OmniOscillator().start();
    this.cvIn = new Tone.Scale(
      Tone.Frequency('C2').toFrequency(),
      Tone.Frequency('C6').toFrequency());
    this.cvIn.connect(this.osc.frequency);
  }

  ngOnInit() {
    this.constructOscType(this.oscTypeString, this.waveTypeString);
  }

  // updateType() {
  //   switch (this.currentClass) {
  //     case 1:
  //       this.osc.type = 'fat' + this.types[this.currentType];
  //       break;
  //     case 2:
  //       this.osc.type = 'pwm';
  //       break;
  //     case 3:
  //       this.osc.type = 'fm' + this.types[this.currentType];
  //       break;
  //     case 4:
  //       this.osc.type = 'am' + this.types[this.currentType];
  //       break;
  //     case 5:
  //       this.osc.type = 'pulse';
  //       break;
  //     default:
  //     case 0:
  //       this.osc.type = this.types[this.currentType];
  //       break;
  //   }
  // }

  private constructOscType(oscType: string, waveType: string) {
    // if oscType is not selected, it creates a basic synth
    if (!oscType) {
      this.osc.type = waveType;
      console.log('osc.type: ', this.osc.type);
    } else if (oscType === 'pwd') {
      this.osc.type = oscType;
      console.log('osc.type: ', this.osc.type);
    } else {
      this.osc.type = oscType + waveType;
      console.log('osc.type: ', this.osc.type);
    }

  }

  setOscType(i) {
    // if (this.count === 0) {
    //   this.oscTypeString = i;
    //   this.constructOscType(this.oscTypeString, this.waveTypeString);
    // }
    // this.count++;
    this.checkValidOscType(i);
    console.log('oscType: ', i);
    // this.currentType = i;
    // this.osc.type = i;
    // this.updateType();
  }

  setWaveType(i) {
    this.waveTypeString = this.waveTypes[i];
    this.constructOscType(this.oscTypeString, this.waveTypeString);
    // this.currentClass = i;
    // this.updateType();
  }

  private checkValidOscType(value) {
    for (var i = 0; i < this.oscType.length; i++) {
      if (value.indexOf(this.oscType[i]) > -1) {
        console.log('hit TRUE')
        return true;
      }
    }
    return false;
  }

}
