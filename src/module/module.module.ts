import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { SharedModule } from '../shared/shared.module';
import { OscillatorComponent } from './oscillator/oscillator.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AudioControlsModule
  ],
  declarations: [OscillatorComponent],
  exports: [OscillatorComponent]
})
export class ModuleModule { }
