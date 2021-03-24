import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotnetsComponent } from './botnets.component';

describe('BotnetsComponent', () => {
  let component: BotnetsComponent;
  let fixture: ComponentFixture<BotnetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotnetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
