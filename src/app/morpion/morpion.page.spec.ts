import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorpionPage } from './morpion.page';

describe('MorpionPage', () => {
  let component: MorpionPage;
  let fixture: ComponentFixture<MorpionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorpionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorpionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
