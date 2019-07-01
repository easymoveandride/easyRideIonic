import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverChoicePage } from './driver-choice.page';

describe('DriverChoicePage', () => {
  let component: DriverChoicePage;
  let fixture: ComponentFixture<DriverChoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverChoicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverChoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
