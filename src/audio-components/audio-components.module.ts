import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SequencerBlocksComponent } from '@audio-components/sequencer/sequencer-blocks.component';
import { AudioControlsModule } from '@audio-controls/audio-controls.module';
import { SharedModule } from '@shared/shared.module';
import { MembraneComponent } from './membrane/membrane.component';
import { MixerComponent } from './mixer/mixer.component';
import { SequencerComponent } from './sequencer/sequencer.component';
import { SynthComponent } from './synth/synth.component';

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
    SequencerBlocksComponent
  ],
  exports: [
    SynthComponent,
    SequencerComponent,
    MixerComponent,
    MembraneComponent,
    SequencerBlocksComponent
  ]
})
export class AudioComponentsModule { }
