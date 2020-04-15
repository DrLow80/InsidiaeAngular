import { TestBed } from '@angular/core/testing';

import { PlotPointRepositoryService } from './plot-point-repository.service';

describe('PlotPointRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlotPointRepositoryService = TestBed.get(PlotPointRepositoryService);
    expect(service).toBeTruthy();
  });
});
