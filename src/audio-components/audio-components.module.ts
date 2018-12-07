import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { SynthComponent } from './synth/synth.component';
import { SequencerComponent } from './sequencer/sequencer.component';

@NgModule({
  imports: [
    CommonModule,
    AudioControlsModule
  ],
  declarations: [SynthComponent, SequencerComponent],
  exports: [SynthComponent, SequencerComponent]
})
export class AudioComponentsModule { }
