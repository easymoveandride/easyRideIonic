import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosquePage } from './mosque.page';

describe('MosquePage', () => {
  let component: MosquePage;
  let fixture: ComponentFixture<MosquePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosquePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
