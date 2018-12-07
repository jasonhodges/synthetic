import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { SynthComponent } from './synth/synth.component';

@NgModule({
  imports: [
    CommonModule,
    AudioControlsModule
  ],
  declarations: [SynthComponent],
  exports: [SynthComponent]
})
export class AudioComponentsModule { }
