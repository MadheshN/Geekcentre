/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShonenComponent } from './shonen.component';

describe('ShonenComponent', () => {
  let component: ShonenComponent;
  let fixture: ComponentFixture<ShonenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShonenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShonenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
