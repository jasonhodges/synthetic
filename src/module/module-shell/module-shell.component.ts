import { Component, Input, OnInit } from '@angular/core';
import { Theme } from '../../shared/theme';

@Component({
  selector: 'app-module-shell',
  templateUrl: './module-shell.component.html',
  styleUrls: ['./module-shell.component.scss']
})
export class ModuleShellComponent implements OnInit {
  @Input() unitSize: number;
  @Input() id: string;
  uSize: string;
  theme = new Theme();

  constructor() {

  }

  ngOnInit() {
    this.uSize = this.theme.unitSizes[this.unitSize];
  }

}
