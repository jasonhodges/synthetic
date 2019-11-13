import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as Nexus from 'nexusui';
import * as Tone from 'tone';


@Component({
  selector: 'app-synth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.scss']
})
export class SynthComponent implements OnInit {
  @Input() id;
  @ViewChild('envelope_test', {static: false}) envelope: ElementRef;
  synth;
  osc;
  cvIn;
  frequency;
  options = {
    oscillator : {
      type : 'square'
    } ,
    envelope : {
      attack : 0.000 ,
      decay : 0.1 ,
      sustain : 0.3 ,
      release : 3
    }
  };

  constructor() {
    this.synth = new Tone.Synth();
    this.osc = this.synth.oscillator;
    this.cvIn = new Tone.Scale(
      Tone.Frequency('C2').toFrequency(),
      Tone.Frequency('C6').toFrequency());
    this.cvIn.connect(this.osc.frequency);
  }

  ngOnInit() {
    Nexus.context = Tone.context;
  }

  testSynth() {
    this.synth.triggerAttackRelease(this.frequency, "8n");
  }

  envelopChange($event: Event) {
    console.log($event)
  }

  frequencyChange($event: number) {
    console.log($event)
    this.frequency = $event;
    // this.osc.frequency.value = $event;
    this.synth.frequency.value = this.frequency;
  }
}
