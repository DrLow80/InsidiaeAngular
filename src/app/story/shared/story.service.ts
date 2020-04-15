import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IStory, EditStoryViewModel } from './interfaces';
import { StoryRepositoryService } from './story-repository.service';
import { Guid } from 'guid-typescript';
import {
  IMilieuEvent,
  INonPlayerCharacter,
  IPlotPoint,
  ITurningPoint,
} from 'src/app/shared/interfaces';
import { RepositoryService } from './repository.service';

@Injectable({
  providedIn: 'root',
})
export class StoryService {
  constructor(private repositoryService: RepositoryService) {}

  list(): Observable<IStory[]> {
    const results = this.repositoryService.story.getAll();

    return of(results);
  }

  load(id: string): Observable<EditStoryViewModel> {
    const story = this.repositoryService.story.getById(id);

    const result = new EditStoryViewModel(story);

    return of(result);
  }

  createStory(): IStory {
    const result: IStory = {
      adventureDate: 'adventureDate',
      campaignDate: 'campaignDate',
      episodeNumber: 'episodeNumber',
      gameMaster: 'gameMaster',
      id: Guid.create().toString(),
      originationLocale: 'originationLocale',
      theme: 'theme',
      title: 'title',
      milieuEvents: [],
      nonPlayerCharacters: [],
      plotPoints: [],
    };

    this.repositoryService.story.insert(result);

    return result;
  }

  createMilieuEvent(viewModel: EditStoryViewModel): IMilieuEvent {
    const result: IMilieuEvent = {
      id: Guid.create().toString(),
      title: 'title',
      eventType: 'past',
      description: 'description',
    };

    this.repositoryService.milieuEvent.insert(result);

    viewModel.addMilieuEvent(result);

    return result;
  }

  loadMilieuEvent(id: string): Observable<IMilieuEvent> {
    const result = this.repositoryService.milieuEvent.getById(id);

    return of(result);
  }

  createNonPlayerCharacter(viewModel: EditStoryViewModel): INonPlayerCharacter {
    const result: INonPlayerCharacter = {
      id: Guid.create().toString(),
      name: 'name',
      nonPlayerCharacterType: 'major',
    };

    this.repositoryService.nonPlayerCharacter.insert(result);

    viewModel.addNonPlayerCharacter(result);

    return result;
  }

  loadNonPlayerCharacter(id: string): Observable<INonPlayerCharacter> {
    const result = this.repositoryService.nonPlayerCharacter.getById(id);

    return of(result);
  }

  createPlotPoint(viewModel: EditStoryViewModel): IPlotPoint {
    const result: IPlotPoint = {
      endPoint: null,
      id: Guid.create().toString(),
      incitingIncident: null,
      title: 'title',
      turningPoints: [],
      description: 'description',
    };

    this.repositoryService.plotPoint.insert(result);

    viewModel.addPlotPoint(result);

    return result;
  }

  loadPlotPoint(id: string): Observable<IPlotPoint> {
    const result = this.repositoryService.plotPoint.getById(id);

    return of(result);
  }

  createTurningPoint(plotPoint: IPlotPoint): ITurningPoint {
    const result: ITurningPoint = {
      description: 'description',
      id: Guid.create().toString(),
      title: 'title',
    };

    this.repositoryService.turningPoint.insert(result);

    plotPoint.turningPoints.push(result);

    return result;
  }
}
