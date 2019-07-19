/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IconHelloComponent } from './icon-hello.component';

describe('IconHelloComponent', () => {
  let component: IconHelloComponent;
  let fixture: ComponentFixture<IconHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
