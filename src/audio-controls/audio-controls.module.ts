import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialComponent } from './dial/dial.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DialComponent, SliderComponent],
  exports: [DialComponent, SliderComponent]
})
export class AudioControlsModule { }
