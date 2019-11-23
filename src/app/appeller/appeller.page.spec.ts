import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppellerPage } from './appeller.page';

describe('AppellerPage', () => {
  let component: AppellerPage;
  let fixture: ComponentFixture<AppellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppellerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
