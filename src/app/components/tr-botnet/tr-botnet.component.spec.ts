import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrBotnetComponent } from './tr-botnet.component';

describe('TrBotnetComponent', () => {
  let component: TrBotnetComponent;
  let fixture: ComponentFixture<TrBotnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrBotnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrBotnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
