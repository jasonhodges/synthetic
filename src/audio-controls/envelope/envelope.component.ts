import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

export interface Points {
  x: number,
  y: number
}

@Component({
  selector: 'app-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.scss']
})
export class EnvelopeComponent implements OnInit {
  @ViewChild('envelope') envelope: ElementRef;
  @Input() id: string;
  @Input() color: [string, string];
  @Input() size: [number, number];
  @Input() points: Points[];

  constructor() {
  }

  ngOnInit() {
    Nexus.context = Tone.context;

    let newEnvelope = new Nexus.Envelope(this.id, {
      'size': this.size,
      'points': this.points
    });

    this.color ? newEnvelope.colorize(this.color[0], this.color[1]) : newEnvelope.colorize('accent', '#00e6ac');
  }

}
