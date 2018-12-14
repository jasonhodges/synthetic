import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { DialComponent } from './dial/dial.component';
import { EnvelopeComponent } from './envelope/envelope.component';
import { MultisliderComponent } from './multislider/multislider.component';
import { NumberComponent } from './number/number.component';
import { PianoComponent } from './piano/piano.component';
import { PositionComponent } from './position/position.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { TextButtonComponent } from './text-button/text-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DialComponent,
    SliderComponent,
    ButtonComponent,
    EnvelopeComponent,
    MultisliderComponent,
    PianoComponent,
    RadioButtonComponent,
    SelectComponent,
    TextButtonComponent,
    NumberComponent,
    PositionComponent
  ],
  exports: [
    DialComponent,
    SliderComponent,
    ButtonComponent,
    EnvelopeComponent,
    MultisliderComponent,
    PianoComponent,
    RadioButtonComponent,
    SelectComponent,
    TextButtonComponent,
    NumberComponent,
    PositionComponent
  ]
})
export class AudioControlsModule {
}
