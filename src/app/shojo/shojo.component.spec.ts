/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShojoComponent } from './shojo.component';

describe('ShojoComponent', () => {
  let component: ShojoComponent;
  let fixture: ComponentFixture<ShojoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShojoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
