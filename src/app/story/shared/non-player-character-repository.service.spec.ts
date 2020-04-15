import { TestBed } from '@angular/core/testing';

import { NonPlayerCharacterRepositoryService } from './non-player-character-repository.service';

describe('NonPlayerCharacterRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NonPlayerCharacterRepositoryService = TestBed.get(NonPlayerCharacterRepositoryService);
    expect(service).toBeTruthy();
  });
});
