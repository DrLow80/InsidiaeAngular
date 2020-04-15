import { TestBed } from '@angular/core/testing';

import { TurningPointRepositoryService } from './turning-point-repository.service';

describe('TurningPointRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TurningPointRepositoryService = TestBed.get(TurningPointRepositoryService);
    expect(service).toBeTruthy();
  });
});
