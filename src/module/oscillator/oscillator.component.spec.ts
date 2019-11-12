import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioControlsModule } from '@audio-controls/audio-controls.module';
import { SharedModule } from '@shared/shared.module';

import { OscillatorComponent } from './oscillator.component';

describe('OscillatorComponent', () => {
  let component: OscillatorComponent;
  let fixture: ComponentFixture<OscillatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscillatorComponent ],
      imports: [SharedModule, AudioControlsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscillatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
