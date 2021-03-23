import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBotnetsComponent } from './list-botnets.component';

describe('ListBotnetsComponent', () => {
  let component: ListBotnetsComponent;
  let fixture: ComponentFixture<ListBotnetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBotnetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBotnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
