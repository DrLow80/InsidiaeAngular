import { TestBed } from '@angular/core/testing';

import { MilieuEventRepositoryService } from './milieu-event-repository.service';

describe('MilieuEventRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MilieuEventRepositoryService = TestBed.get(MilieuEventRepositoryService);
    expect(service).toBeTruthy();
  });
});
