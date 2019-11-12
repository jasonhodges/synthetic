import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioControlsModule } from '@audio-controls/audio-controls.module';
import { SharedModule } from '@shared/shared.module';

import { MembraneComponent } from './membrane.component';

describe('MembraneComponent', () => {
  let component: MembraneComponent;
  let fixture: ComponentFixture<MembraneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MembraneComponent],
      imports: [SharedModule, AudioControlsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembraneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
