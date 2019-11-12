import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioControlsModule } from '../../audio-controls/audio-controls.module';
import { SharedModule } from '../../shared/shared.module';

import { MixerComponent } from './mixer.component';

describe('MixerComponent', () => {
  let component: MixerComponent;
  let fixture: ComponentFixture<MixerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MixerComponent],
      imports: [SharedModule, AudioControlsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
