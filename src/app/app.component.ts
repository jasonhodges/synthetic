import { Component } from '@angular/core';

declare const Tone: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {
    Tone.Transport.start();
  }
}
