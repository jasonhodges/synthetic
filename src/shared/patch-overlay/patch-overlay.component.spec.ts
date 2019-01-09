import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchOverlayComponent } from './patch-overlay.component';

describe('PatchOverlayComponent', () => {
  let component: PatchOverlayComponent;
  let fixture: ComponentFixture<PatchOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
