import { Component, OnInit } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-auto-filter',
  templateUrl: './auto-filter.component.html',
  styleUrls: ['./auto-filter.component.scss']
})
export class AutoFilterComponent implements OnInit {

  autoFilter;
  frequency;
  type;
  depth;
  baseFrequency;
  octaves;
  filter;

  constructor() { }

  ngOnInit() {
    Nexus.context = Tone.context;
    // let comp = this;

    // this.autoFilter = new Tone.AutoFilter('4n').toMaster().start();
    this.autoFilter = new Tone.AutoFilter('4n').start();
  }

  changeFrequency(value) {
    console.log('frequencyValue: ', value);
    this.autoFilter.frequency.value = value;
  }

  changeDepth(value) {
    console.log('depthValue: ', value);
    this.autoFilter.depth.value = value;
  }

}
