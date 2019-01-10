import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AudioComponentsModule } from '../audio-components/audio-components.module';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { ModuleModule } from '../module/module.module';
import { SharedModule } from '../shared/shared.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AudioComponentsModule,
    AudioControlsModule,
    ModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
