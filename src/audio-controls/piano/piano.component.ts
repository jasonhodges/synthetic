import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.scss']
})
export class PianoComponent implements OnInit {
  @ViewChild('piano', {static: false}) piano: ElementRef;
  @Output() change = new EventEmitter;
  @Input() id: string;
  @Input() color: [string, string];
  @Input() size: [number, number];
  @Input() mode: string;
  @Input() lowNote: number;
  @Input() highNote: number;

  constructor() {
  }

  ngOnInit() {
    let comp = this;

    Nexus.context = Tone.context;
    Nexus.colors.fill = '#444';

    let newPiano = new Nexus.Piano(this.id, {
      'size': this.size || [500, 125],
      'mode': this.mode || 'button',  // 'button', 'toggle', or 'impulse'
      'lowNote': this.lowNote || 24,
      'highNote': this.highNote || 60
    });

    this.color ? newPiano.colorize(this.color[0], this.color[1]) : newPiano.colorize('accent', '#00e6ac');

    this.piano = newPiano;

    newPiano.on('change', function (value?: any) {
      comp.change.emit(value);
    });
  }

}
