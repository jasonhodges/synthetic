import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-rack',
  templateUrl: './rack.component.html',
  styleUrls: ['./rack.component.scss']
})
export class RackComponent implements OnInit, AfterViewInit {
  @ViewChild('vc', { read: ViewContainerRef, static: false}) vc: ViewContainerRef;
  @ViewChild('rack', {static: false}) rack: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
