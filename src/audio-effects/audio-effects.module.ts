import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { AutoFilterComponent } from './auto-filter/auto-filter.component';

@NgModule({
    imports: [
        CommonModule,
        AudioControlsModule
    ],
    exports: [AutoFilterComponent],
    declarations: [AutoFilterComponent],
    providers: [],
})
export class AudioEffectsModule { }
