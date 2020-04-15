import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StoryService } from '../shared/story.service';
import { EditStoryViewModel } from '../shared/interfaces';
import {
  IMilieuEvent,
  INonPlayerCharacter,
  IPlotPoint,
} from 'src/app/shared/interfaces';

@Component({
  selector: 'app-story-edit',
  templateUrl: './story-edit.component.html',
  styleUrls: ['./story-edit.component.css'],
})
export class StoryEditComponent implements OnInit {
  viewModel: EditStoryViewModel;

  constructor(
    private route: ActivatedRoute,
    private service: StoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = params.id;

      this.service.load(id).subscribe((x) => {
        this.viewModel = x;
      });
    });
  }

  get id(): string {
    return this.viewModel.id;
  }

  get title(): string {
    return this.viewModel.title;
  }

  get adventureDate(): string {
    return this.viewModel.adventureDate;
  }

  get gameMaster(): string {
    return this.viewModel.gameMaster;
  }

  get campaignDate(): string {
    return this.viewModel.campaignDate;
  }

  get episodeNumber(): string {
    return this.viewModel.episodeNumber;
  }

  get originationLocale(): string {
    return this.viewModel.originationLocale;
  }

  get theme(): string {
    return this.viewModel.theme;
  }

  addMilieuEvent() {
    const result = this.service.createMilieuEvent(this.viewModel);

    this.router.navigate(['/story', this.id, 'milieu-event', result.id]);
  }

  get pastMilieuEvents(): IMilieuEvent[] {
    return this.viewModel.pastMilieuEvents;
  }

  get presentMilieuEvents(): IMilieuEvent[] {
    return this.viewModel.presentMilieuEvents;
  }

  get futureMilieuEvents(): IMilieuEvent[] {
    return this.viewModel.futureMilieuEvents;
  }

  get majorNonPlayerCharacters(): INonPlayerCharacter[] {
    return this.viewModel.majorNonPlayerCharacters;
  }

  get minorNonPlayerCharacters(): INonPlayerCharacter[] {
    return this.viewModel.minorNonPlayerCharacters;
  }

  get monsterNonPlayerCharacters(): INonPlayerCharacter[] {
    return this.viewModel.monsterNonPlayerCharacters;
  }

  addNonPlayerCharacter() {
    const result = this.service.createNonPlayerCharacter(this.viewModel);

    this.router.navigate([
      '/story',
      this.id,
      'non-player-character',
      result.id,
    ]);
  }

  get plotPoints(): IPlotPoint[] {
    return this.viewModel.plotPoints;
  }

  addPlotPoint() {
    const result = this.service.createPlotPoint(this.viewModel);

    this.router.navigate(['/story', this.id, 'plot-point', result.id]);
  }
}
