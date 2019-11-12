import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioControlsModule } from '@audio-controls/audio-controls.module';

import { SynthComponent } from './synth.component';

describe('SynthComponent', () => {
  let component: SynthComponent;
  let fixture: ComponentFixture<SynthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynthComponent ],
      imports: [AudioControlsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
