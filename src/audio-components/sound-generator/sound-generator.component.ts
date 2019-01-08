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
  testChain; ;
  constructor() {}

  ngOnInit() {
    Nexus.context = Tone.context;
    let comp = this;

    comp.lfo = new Tone.LFO("8t", 40, 400).start();
    // comp.lfo = new Tone.LFO("2t").start();
    // comp.lfo.connect(comp.generator);
    comp.panner = new Tone.Panner(0).toMaster();

    comp.generator = new Tone.MonoSynth({
      'oscillator': {
        'type': 'square'
      },
      "envelope": {
        "attack": 0.3,
        "release": 0.3
      }
    }).toMaster();
    // comp.signal = new Tone.Signal(1);
    // comp.lfo.chain(comp.generator.frequency, comp.panner);
    comp.lfo.chain(comp.generator.frequency);
    // comp.generator.connect(comp.panner);
    // comp.signal.connect(comp.generator.frequency);
    // this.testChain = [this.generator.frequency, this.panner ];
    // console.log('generator: ', comp.generator);
  }

  changeSignal(v) {
    console.log('v: ', v);
    // this.signal.value = v;
    this.panner.pan.value = v;
    // this.panner = new Tone.Panner(v).toMaster();
    // this.lfo.min = v;
    // this.signal = new Tone.Signal(v);
    // this.signal.connect(this.generator.frequency);

  }

  playSound() {
    // this.lfo.min.rampTo(0, 0.05);
    // this.lfo.mute = false;
    this.generator.volume.rampTo(0, 0);
    // this.lfo.chain(this.generator.frequency, this.panner);
    this.generator.connect(this.panner);
    this.generator.triggerAttack("C1");
  }
  stopSound() {
    // this.lfo.mute = true;
    this.generator.triggerRelease();
    this.generator.volume.rampTo(-Infinity, 0.5);
    // this.lfo.disconnect();

  }
}
