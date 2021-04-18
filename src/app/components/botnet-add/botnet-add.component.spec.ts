import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotnetAddComponent } from './botnet-add.component';

describe('BotnetAddComponent', () => {
  let component: BotnetAddComponent;
  let fixture: ComponentFixture<BotnetAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotnetAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotnetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
