import { TestBed } from '@angular/core/testing';

import { EditAdventureService } from './edit-adventure.service';

describe('EditAdventureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditAdventureService = TestBed.get(EditAdventureService);
    expect(service).toBeTruthy();
  });
});
