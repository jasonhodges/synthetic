import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AudioComponentsModule } from '../audio-components/audio-components.module';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { AudioEffectsModule } from '../audio-effects/audio-effects.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AudioComponentsModule,
    AudioControlsModule,
    AudioEffectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
