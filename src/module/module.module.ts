import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { SharedModule } from '../shared/shared.module';
import { OscillatorComponent } from './oscillator/oscillator.component';
import { ModuleShellComponent } from './module-shell/module-shell.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AudioControlsModule
  ],
  declarations: [OscillatorComponent, ModuleShellComponent],
  exports: [OscillatorComponent, ModuleShellComponent]
})
export class ModuleModule { }
