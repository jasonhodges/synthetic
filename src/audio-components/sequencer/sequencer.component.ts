import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import * as Nexus from 'nexusui';
import { Observable, of } from 'rxjs';
import * as Tone from 'tone';

@Component({
  selector: 'app-sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.scss']
})
export class SequencerComponent implements AfterViewInit {
  @Input() id: string;
  @Output() loopStart = new EventEmitter();
  started$;
  loop;
  keys;
  constructor() { }

  ngAfterViewInit() {
    let comp = this;

    let btnStart = new Nexus.Button('#btn-start', {
      'size': [40, 40],
      'mode': 'toggle',
      'state': false
    });
    let btnStop = new Nexus.Button('#btn-stop', {
      'size': [40, 40],
      'mode': 'toggle',
      'state': false
    });

    btnStart.on('change', function () {
      console.log(`start button clicked`);
      comp.started$ = true;
    });

    btnStop.on('change', function () {
      comp.started$ = false;
    });
  }

  changeVolume(event) {
    console.log(event)
    // this.keys.volume.setValueAtTime(event, 0.01);
    this.keys.volume.value = event;
  }

  changeFrequency(event) {
    console.log(event)
    this.keys.rolloff = -24;
    this.keys.filter.frequency.value = event;
    // this.keys.frequency.value = event;
  }

}
