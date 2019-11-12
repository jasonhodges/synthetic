import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module-shell',
  templateUrl: './module-shell.component.html',
  styleUrls: ['./module-shell.component.scss']
})
export class ModuleShellComponent implements OnInit {
  @Input() uSize: number;

  constructor() { }

  ngOnInit() {
  }

}
