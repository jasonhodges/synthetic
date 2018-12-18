import { AfterViewInit, Component, Input, NgZone, OnInit } from '@angular/core';
import * as _ from 'lodash';

declare const Tone: any;
declare var Nexus: any;

export enum oscTypes {
  'sine',
  'square',
  'sawtooth'
}

@Component({
  selector: 'app-membrane',
  templateUrl: './membrane.component.html',
  styleUrls: ['./membrane.component.scss']
})
export class MembraneComponent implements OnInit, AfterViewInit {
  @Input() id: string;
  isPlaying: boolean = false;
  currentPeriod = 2;
  noteLengths = ['64n', '32n', '16n', '8n', '4n'];
  pulse: boolean = false;
  loop;
  synth;
  pitch;
  coords = [
    [0, 0], [1, 0], [2, 0], [3, 0],
    [0, 1], [1, 1], [2, 1], [3, 1],
    [0, 2], [1, 2], [2, 2], [3, 2],
    [0, 3], [1, 3], [2, 3], [3, 3]]
  ;
  activeBox = 0;
  box = _.fill(_.range(16), false);

  constructor(private zone: NgZone) {
    this.synth = new Tone.MembraneSynth().toMaster();
    this.pitch = new Tone.Signal(20);
    this.synth.volume.value = 60;
    this.synth.oscillator.type = oscTypes[1];
    this.configureSequence();
  }

  get boxes() {
    return _.map(this.coords, ([x, y]) => `M ${x * 62} ${y * 62} h 60 v 60 h -60 v -60`);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  configureSequence() {
    let wasPlaying = false;
    if (this.loop) {
      wasPlaying = this.loop.state === 'started';
      this.loop.dispose();
    }
    this.loop = new Tone.Sequence((time, i) => {

      if (this.box[i]) {
        this.synth.triggerAttackRelease(this.pitch.value, this.noteLengths[this.currentPeriod], time);
      }

      Tone.Draw.schedule(() => {
        this.activeBox = i;
        this.zone.run(() => this.pulse = !this.pulse);
      }, time);

    }, _.range(16), this.noteLengths[this.currentPeriod]);

    if (wasPlaying) {
      this.pulse = false;
      this.loop.start('@4n');
    }
  }

  toggleBox(i) {
    this.box[i] = !this.box[i];
  }

  setPeriod(i) {
    this.currentPeriod = i;
    this.configureSequence();
  }

  start() {
    this.loop.start('@4n');
    this.pulse = false;
    this.isPlaying = true;
  }

  stop() {
    this.loop.stop();
    this.pulse = false;
    this.isPlaying = false;
  }

  changePitch(v) {
    this.pitch.value = v;
  }


  modifySynth(v) {
    let synthValues = [
      'frequency',
      'type',
      'spread'
    ]
    console.log(oscTypes[v.value]);
    console.log(`before value: ${this.synth.oscillator[synthValues[v.index]]}`);
    this.synth.oscillator[synthValues[v.index]] = oscTypes[v.value];
    console.log(`after value: ${this.synth.oscillator[synthValues[v.index]]}`);

  }
}
