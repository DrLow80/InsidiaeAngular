import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  IEditAdventureVeiwModel,
  DEFAULTEDITADVENTUREVIEWMODEL,
  IMilieuEvent,
  INonPlayerCharacter,
  IPlotPoint
} from 'src/app/shared/interfaces';
import { EditAdventureService } from '../edit-adventure.service';

@Component({
  selector: 'app-edit-adventure',
  templateUrl: './edit-adventure.component.html',
  styleUrls: ['./edit-adventure.component.css']
})
export class EditAdventureComponent implements OnInit {
  viewModel: IEditAdventureVeiwModel = DEFAULTEDITADVENTUREVIEWMODEL;
  constructor(private route: ActivatedRoute, private service: EditAdventureService) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params.id;

      this.service.load(id).subscribe(x => {
        this.viewModel = x;
      });
    });
  }

  get id(): number {
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

  get plotPoints(): IPlotPoint[] {
    return this.viewModel.plotPoints;
  }
}
