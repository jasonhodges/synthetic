import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioControlsModule } from '../audio-controls/audio-controls.module';
import { AutoFilterComponent } from './auto-filter/auto-filter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        AudioControlsModule,
        SharedModule
    ],
    exports: [AutoFilterComponent],
    declarations: [AutoFilterComponent],
    providers: [],
})
export class AudioEffectsModule { }
