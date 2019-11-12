import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioControlsModule } from '../../audio-controls/audio-controls.module';
import { SharedModule } from '../../shared/shared.module';

import { SequencerComponent } from './sequencer.component';

describe('SequencerComponent', () => {
  let component: SequencerComponent;
  let fixture: ComponentFixture<SequencerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequencerComponent ],
      imports: [AudioControlsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
