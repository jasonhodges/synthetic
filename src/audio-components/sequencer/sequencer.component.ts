import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.scss']
})
export class SequencerComponent implements OnInit {
  @ViewChild('sequencer') sequencer: ElementRef;
  @Input() id: string;
  loop;
  keys;
  constructor() { }

  ngOnInit() {
    Nexus.context = Tone.context;
    let comp = this;
    let newSequencer = new Nexus.Sequencer(this.id, {
      'size': [600, 400],
      'mode': 'toggle',
      'rows': 6,
      'columns': 16
    });

    this.sequencer = newSequencer;

    let noteNames = ["C1", "D1", "E1", "F1", "G1", "A2"];

    comp.keys = new Tone.MonoSynth({
      'oscillator': {
        'type': 'square'
      },
      "envelope": {
        "attack": 0,
        "release": 0.5
      }
    }).toMaster();
    // comp.keys.volume.value = -25;
    this.loop = new Tone.Sequence(function (time, col) {
      for (let i = 0; i < 6; i++) {
        if (newSequencer.matrix.pattern[i][col] === true) {
          console.log(noteNames[i]);
          comp.keys.triggerAttackRelease(noteNames[i], "16n")
        }
      }
    }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], '8n');

    Tone.Transport.bpm.value = 165;
    Tone.Transport.start();
    Tone.context.latencyHint = "fastest";
    Tone.context.lookAhead = 0.01;

    let btnStart = new Nexus.Button('#btn-start', {
      'size': [80, 80],
      'mode': 'toggle',
      'state': false
    });
    let btnStop = new Nexus.Button('#btn-stop', {
      'size': [80, 80],
      'mode': 'toggle',
      'state': false
    });

    btnStart.on('change', function () {
      comp.loop.start();
    });

    btnStop.on('change', function () {
      comp.loop.stop();
    });
  }

  changeVolume(event) {
    console.log(event)
    this.keys.volume.value = event;
    this.keys.frequency.value = event;
  }
}
