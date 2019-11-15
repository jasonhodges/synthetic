import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { debug } from 'util';
import { Theme } from '../../shared/theme';

declare var Nexus: any;
declare var Tone: any;
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit, AfterViewInit {
  @ViewChild('select', {static: false}) select: TemplateRef<any>;
  @Input() id: string;
  @Input() size: [number, number];
  @Input() options: any[];
  @Output() change = new EventEmitter();
  theme = new Theme();
  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const comp = this;
    Nexus.colors.dark = comp.theme.strokes.blue;
    // debugger;

    const newSelect = new Nexus.Select(this.id, {
      'size': this.size || [40, 20],
      'options': this.options
    });

    this.select = newSelect;
    // this.select['colors']['fill'] = 'white';
    // this.renderer.setStyle(this.select.elementRef.nativeElement, 'color', 'white');

    newSelect.on('change', (value?) => {
      comp.change.emit(value.value);
    });
  }

}
