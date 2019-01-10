import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvelopeComponent } from './envelope.component';

describe('EnvelopeComponent', () => {
  let component: EnvelopeComponent;
  let fixture: ComponentFixture<EnvelopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EnvelopeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvelopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
