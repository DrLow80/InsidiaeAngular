import { Injectable } from '@angular/core';
import {
  IGenericRepository,
  IStory,
  IMilieuEvent,
  INonPlayerCharacter,
  IPlotPoint,
  ITurningPoint,
} from './interfaces';
import { StoryRepositoryService } from './story-repository.service';
import { MilieuEventRepositoryService } from './milieu-event-repository.service';
import { NonPlayerCharacterRepositoryService } from './non-player-character-repository.service';
import { PlotPointRepositoryService } from './plot-point-repository.service';
import { TurningPointRepositoryService } from './turning-point-repository.service';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(
    private storyRepositoryService: StoryRepositoryService,
    private milieuEventRepositoryService: MilieuEventRepositoryService,
    private nonPlayerCharacterRepositoryService: NonPlayerCharacterRepositoryService,
    private plotPointRepositoryService: PlotPointRepositoryService,
    private turningPointRepositoryService: TurningPointRepositoryService
  ) {}

  get story(): IGenericRepository<IStory> {
    return this.storyRepositoryService;
  }

  get milieuEvent(): IGenericRepository<IMilieuEvent> {
    return this.milieuEventRepositoryService;
  }

  get nonPlayerCharacter(): IGenericRepository<INonPlayerCharacter> {
    return this.nonPlayerCharacterRepositoryService;
  }

  get plotPoint(): IGenericRepository<IPlotPoint> {
    return this.plotPointRepositoryService;
  }

  get turningPoint(): IGenericRepository<ITurningPoint> {
    return this.turningPointRepositoryService;
  }
}
