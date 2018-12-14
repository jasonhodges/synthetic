import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundGeneratorComponent } from './sound-generator.component';

describe('SoundGeneratorComponent', () => {
  let component: SoundGeneratorComponent;
  let fixture: ComponentFixture<SoundGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
