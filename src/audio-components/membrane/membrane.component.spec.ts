import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembraneComponent } from './membrane.component';

describe('MembraneComponent', () => {
  let component: MembraneComponent;
  let fixture: ComponentFixture<MembraneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MembraneComponent]
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
