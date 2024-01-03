/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KodomomukeComponent } from './kodomomuke.component';

describe('KodomomukeComponent', () => {
  let component: KodomomukeComponent;
  let fixture: ComponentFixture<KodomomukeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KodomomukeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KodomomukeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
