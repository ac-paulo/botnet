import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotnetsPanelComponent } from './botnets-panel.component';

describe('BotnetsPanelComponent', () => {
  let component: BotnetsPanelComponent;
  let fixture: ComponentFixture<BotnetsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotnetsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotnetsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
