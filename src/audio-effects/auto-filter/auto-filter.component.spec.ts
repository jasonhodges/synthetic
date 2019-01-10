import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFilterComponent } from './auto-filter.component';

describe('AutoFilterComponent', () => {
  let component: AutoFilterComponent;
  let fixture: ComponentFixture<AutoFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
