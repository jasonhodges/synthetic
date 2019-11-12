import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as Nexus from 'nexusui';
import * as Tone from 'tone';
// declare var Nexus: any;
// declare var Tone: any;

@Component({
  selector: 'app-mixer',
  templateUrl: './mixer.component.html',
  styleUrls: ['./mixer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MixerComponent implements OnInit {
  @Input() numChannels: number;
  channels: any[] = [];
  arr = Array;

  constructor() {
  }

  ngOnInit() {
    Nexus.context = Tone.context;
    let loc_channels = [];
    for (let n = 0; n < this.numChannels; n++) {
      let ch_gain = new Tone.Gain(0).toMaster();
      loc_channels.push(ch_gain);
    }
    if (loc_channels.length === this.numChannels) {
      this.channels = loc_channels;
    }
  }

}
