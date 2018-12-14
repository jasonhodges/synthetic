import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-mixer',
  templateUrl: './mixer.component.html',
  styleUrls: ['./mixer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MixerComponent implements OnInit {
  @Input() numChannels: number;
  @Input() incomingSignals = [];
  channels: any[] = [];
  arr = Array;

  constructor() {
  }

  ngOnInit() {
    Nexus.context = Tone.context;
    let loc_channels = [];
    for (let n = 0; n < this.numChannels; n++) {
      loc_channels.push({ id: `mixer_slider${n}` });
    }
    if (loc_channels.length === this.numChannels) {
      this.channels = loc_channels;
    }
  }

}
