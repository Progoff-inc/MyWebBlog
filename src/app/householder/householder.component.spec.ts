import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholderComponent } from './householder.component';

describe('HouseholderComponent', () => {
  let component: HouseholderComponent;
  let fixture: ComponentFixture<HouseholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
