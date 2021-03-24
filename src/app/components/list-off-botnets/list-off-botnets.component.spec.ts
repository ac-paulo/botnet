import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOffBotnetsComponent } from './list-off-botnets.component';

describe('ListOffBotnetsComponent', () => {
  let component: ListOffBotnetsComponent;
  let fixture: ComponentFixture<ListOffBotnetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOffBotnetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOffBotnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
