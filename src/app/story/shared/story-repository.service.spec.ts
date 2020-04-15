import { TestBed } from '@angular/core/testing';

import { StoryRepositoryService } from './story-repository.service';

describe('StoryRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryRepositoryService = TestBed.get(StoryRepositoryService);
    expect(service).toBeTruthy();
  });
});
