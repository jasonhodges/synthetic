import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceComponent } from './source/source.component';
import { CableComponent } from './cable/cable.component';
import { SinkComponent } from './sink/sink.component';
import { PatchOverlayComponent } from './patch-overlay/patch-overlay.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SourceComponent,
    CableComponent,
    SinkComponent,
    PatchOverlayComponent
  ],
  exports: [
    SourceComponent,
    CableComponent,
    SinkComponent,
    PatchOverlayComponent
  ]
})
export class SharedModule { }
