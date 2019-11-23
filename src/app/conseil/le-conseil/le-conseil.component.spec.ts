import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeConseilComponent } from './le-conseil.component';

describe('LeConseilComponent', () => {
  let component: LeConseilComponent;
  let fixture: ComponentFixture<LeConseilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeConseilComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeConseilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
