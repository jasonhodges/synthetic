import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

declare var Nexus: any;
declare var Tone: any;

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @ViewChild('button') button: ElementRef;
  @Input() id: string;
  @Input() size: [number, number];
  @Input() mode: string;
  @Input() state: boolean;
  @Input() color: [string, string];
  @Output() change = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
    let comp = this;
    Nexus.context = Tone.context;
    Nexus.colors.fill = '#444';

    let newButton = new Nexus.Button(this.id, {
      'size': this.size || [40, 40],
      'mode': this.mode || 'toggle',
      'state': this.state || false
    });

    this.color ? newButton.colorize(this.color[0], this.color[1]) : newButton.colorize('accent', '#00e6ac');

    this.button = newButton;

    newButton.on('change', function (value?: any) {
      comp.change.emit(value);
    });
  }

}
