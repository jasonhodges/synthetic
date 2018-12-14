import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { SequencerComponent } from './sequencer/sequencer.component';
import { SynthComponent } from './synth/synth.component';
import { SoundGeneratorComponent } from './sound-generator/sound-generator.component';

@NgModule({
  imports: [
    CommonModule,
    AudioControlsModule
  ],
  declarations: [SynthComponent, SequencerComponent, SoundGeneratorComponent],
  exports: [SynthComponent, SequencerComponent, SoundGeneratorComponent]
})
export class AudioComponentsModule { }
