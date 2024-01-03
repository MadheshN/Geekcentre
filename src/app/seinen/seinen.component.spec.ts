/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeinenComponent } from './seinen.component';

describe('SeinenComponent', () => {
  let component: SeinenComponent;
  let fixture: ComponentFixture<SeinenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeinenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeinenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
