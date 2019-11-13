import { isDefined } from '@angular/compiler/src/util';
import { Component, ElementRef, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { logger } from 'codelyzer/util/logger';
import * as Nexus from 'nexusui';
import * as Tone from 'tone';

declare const Tone: any;
declare var Nexus: any;

@Component({
  selector: 'app-sequencer-blocks',
  templateUrl: 'sequencer-blocks.component.html',
  styleUrls: ['sequencer.component.scss'],
  styles: [`:host {
    width: 640px;
    height: 300px;
  }`, `:host /deep/ :nth-child(2) {
    width: 90% !important;
  }`]
})

export class SequencerBlocksComponent implements OnInit {
  @ViewChild('sequencer', { static: true }) sequencer: ElementRef;
  @Input() id: string;
  loop;
  synth;
  pitch;
  osc;
  noteNames = ["C3", "D3", "E3", "F3", "G3", "A3", "B3"];
  newSequencer;

  @Input()
  set started(value: boolean) {
    console.log(`started: ${value}`);
    this._started = value;
    if (isDefined(this.loop)) {
      value ? this.start() : this.loop.stop()
    }
  }

  private _started: boolean;


  constructor(private zone: NgZone) {
    this.synth = new Tone.Synth;
    this.pitch = new Tone.Signal(20);
    this.osc = this.synth.oscillator;
  }

  ngOnInit() {
    this.configureSequencer();

    Tone.Transport.bpm.value = 165;
    Tone.context.latencyHint = "fastest";
    Tone.context.lookAhead = 0.01;
  }

  configureSequencer() {
    Nexus.context = Tone.context;

    let newSequencer = new Nexus.Sequencer(this.id, {
      'size': [600, 300],
      'mode': 'toggle',
      'rows': 6,
      'columns': 16
    });

    this.sequencer = newSequencer;

    let noteNames = ["C3", "D3", "E3", "F3", "G3", "A3", "B3"];

    let wasPlaying = false;
    if (this.loop) {
      wasPlaying = this.loop.state === 'started';
      this.loop.dispose();
    }

    this.loop = new Tone.Sequence((time, col) => {
      for (let i = 0; i < 6; i++) {
        console.log(i);
        if (newSequencer.matrix.pattern[i][col] === true) {
          console.log(noteNames[i]);
          this.synth.triggerAttackRelease(noteNames[i], "16n")
        }
      }
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], '8n');

    if (wasPlaying) {
      this.loop.start('@4n');
    }

    // this.loop.start(0);
  }

  start() {
    this.loop.start('@4n')
  }
}
