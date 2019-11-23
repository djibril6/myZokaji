import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguePage } from './langue.page';

describe('LanguePage', () => {
  let component: LanguePage;
  let fixture: ComponentFixture<LanguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
