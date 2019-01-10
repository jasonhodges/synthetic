import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { SharedModule } from '../shared/shared.module';
import { MembraneComponent } from './membrane/membrane.component';
import { MixerComponent } from './mixer/mixer.component';
import { SequencerComponent } from './sequencer/sequencer.component';
import { SynthComponent } from './synth/synth.component';
import { SoundGeneratorComponent } from './sound-generator/sound-generator.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AudioControlsModule
  ],
  declarations: [
    SynthComponent,
    SequencerComponent,
    MixerComponent,
    MembraneComponent,
    SoundGeneratorComponent
  ],
  exports: [
    SynthComponent,
    SequencerComponent,
    MixerComponent,
    MembraneComponent,
    SoundGeneratorComponent
  ]
})
export class AudioComponentsModule { }
