import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AudioComponentsModule } from '../audio-components/audio-components.module';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AudioComponentsModule,
    AudioControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
