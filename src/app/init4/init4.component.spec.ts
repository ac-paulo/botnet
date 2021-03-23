import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Init4Component } from './init4.component';

describe('Init4Component', () => {
  let component: Init4Component;
  let fixture: ComponentFixture<Init4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Init4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Init4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
