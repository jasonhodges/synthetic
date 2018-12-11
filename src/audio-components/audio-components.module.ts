import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { SequencerComponent } from './sequencer/sequencer.component';
import { SynthComponent } from './synth/synth.component';

@NgModule({
  imports: [
    CommonModule,
    AudioControlsModule
  ],
  declarations: [SynthComponent, SequencerComponent],
  exports: [SynthComponent, SequencerComponent]
})
export class AudioComponentsModule { }
