import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultisliderComponent } from './multislider.component';

describe('MultisliderComponent', () => {
  let component: MultisliderComponent;
  let fixture: ComponentFixture<MultisliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MultisliderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultisliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
