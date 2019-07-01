import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromWherePage } from './from-where.page';

describe('FromWherePage', () => {
  let component: FromWherePage;
  let fixture: ComponentFixture<FromWherePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromWherePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromWherePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
