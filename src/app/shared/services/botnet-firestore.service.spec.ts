import { TestBed } from '@angular/core/testing';

import { BotnetFirestoreService } from './botnet-firestore.service';

describe('BotnetFirestoreService', () => {
  let service: BotnetFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotnetFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
