import { Component, OnInit } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-synth',
  templateUrl: './synth.component.html',
  styleUrls: ['./synth.component.scss']
})
export class SynthComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    Nexus.context = Tone.context;
  }

}
