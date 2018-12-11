import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @ViewChild('button') button: ElementRef;
  @Input() id: string;
  @Input() size: [number, number];
  @Input() mode: string;
  @Input() state: boolean;
  @Input() color: [string, string];

  constructor() {
  }

  ngOnInit() {
    Nexus.context = Tone.context;
    Nexus.colors.fill = '#444';

    let newButton = new Nexus.Button(this.id, {
      'size': this.size,
      'mode': this.mode,
      'state': this.state
    });

    this.color ? newButton.colorize(this.color[0], this.color[1]) : newButton.colorize('accent', '#00e6ac');

    this.button = newButton;
  }

}
