import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { MembraneComponent } from './membrane/membrane.component';
import { MixerComponent } from './mixer/mixer.component';
import { SequencerComponent } from './sequencer/sequencer.component';
import { SynthComponent } from './synth/synth.component';

@NgModule({
  imports: [
    CommonModule,
    AudioControlsModule
  ],
  declarations: [
    SynthComponent,
    SequencerComponent,
    MixerComponent,
    MembraneComponent
  ],
  exports: [
    SynthComponent,
    SequencerComponent,
    MixerComponent,
    MembraneComponent
  ]
})
export class AudioComponentsModule { }
