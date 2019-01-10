import { Component, OnInit } from "@angular/core";

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: "app-synth",
  templateUrl: "./synth.component.html",
  styleUrls: ["./synth.component.scss"]
})
export class SynthComponent implements OnInit {
  synth;

  constructor() {}

  ngOnInit() {
    Nexus.context = Tone.context;

    this.synth = new Tone.Synth({
      oscillator: {
        type: 'triangle'
      },
      envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.3,
        release: 1
      }
    }).toMaster();
  }

  playSound() {
    this.synth.triggerAttackRelease("C4", "2n");
  }
}
