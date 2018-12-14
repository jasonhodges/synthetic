import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: "app-sound-generator",
  templateUrl: "./sound-generator.component.html",
  styleUrls: ["./sound-generator.component.scss"]
})
export class SoundGeneratorComponent implements OnInit {
  @ViewChild("button_on") btnOn: ElementRef;
  generator;
  lfo;
  panner;
  signal;
  osc;
  cvIn;
  constructor() {}

  ngOnInit() {
    Nexus.context = Tone.context;
    let comp = this;

    comp.lfo = new Tone.LFO("2n", 40, 400).start();
    // comp.lfo.connect(comp.generator);
    comp.panner = new Tone.Panner(-1);

    comp.generator = new Tone.MonoSynth({
      'oscillator': {
        'type': 'square'
      },
      "envelope": {
        "attack": 0,
        "release": 0.5
      }
    }).toMaster();
    comp.signal = new Tone.Signal(1);
    comp.osc = new Tone.OmniOscillator().start();
    comp.cvIn = new Tone.Scale(
        Tone.Frequency('C3').toFrequency(),
        Tone.Frequency('C7').toFrequency());
    comp.signal.connect(comp.generator.frequency);


    // let btnOn = new Nexus.Button("#button_on", {
    //   size: [80, 80],
    //   mode: "toggle",
    //   state: false
    // });

    // let btnOff = new Nexus.Button("#btn-off", {
    //   size: [80, 80],
    //   mode: "toggle",
    //   state: false
    // });

    // this.btnOn.on("change", function() {
    //   comp.generator.triggerAttackRelease("C4", "4n");
    // });
  }

  changeSignal(v) {
    console.log('v: ', v);
    this.signal.value = v;
    // this.signal = new Tone.Signal(v);
    // this.signal.connect(this.generator.frequency);

  }

  playSound() {
    // this.signal.connect(this.lfo).connect(this.generator);
    // this.generator.frequency.connect(this.lfo);
    this.generator.triggerAttackRelease("C3", "1n");
    // this.signal.toMaster();
  }
}
