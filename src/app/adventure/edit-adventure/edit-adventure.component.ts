import { Component, OnInit } from '@angular/core';
import { IAdventure, NONPLAYERCHARACTERS, INonPlayerCharacter, PLOTPOINTS, IPlotPoint } from 'src/app/shared/interfaces';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-adventure',
  templateUrl: './edit-adventure.component.html',
  styleUrls: ['./edit-adventure.component.css']
})
export class EditAdventureComponent implements OnInit {
  adventure: IAdventure = {
    id: 0,
    summary: '',
    title: ''
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params.id;

      if (id !== 0) {
        this.getAdventure(id);
      }
    });
  }

  getAdventure(id: number) {
    this.adventure = {
      id,
      summary: 'summary',
      title: 'title'
    };
  }

  get title(): string {
    return 'title';
  }

  get adventureDate(): string {
    return 'adventureDate';
  }

  get gameMaster(): string {
    return 'game master';
  }

  get campaignDate(): string {
    return 'campaignDate';
  }

  get episodeNumber(): string {
    return 'episodeNumber';
  }

  get originationLocale(): string {
    return 'originationLocale';
  }

  get theme(): string {
    return 'theme';
  }

  get pastMilieuEvents(): string {
    return 'pastMilieuEvents';
  }

  get presentMilieuEvents(): string {
    return 'presentMilieuEvents';
  }

  get futureMilieuEvents(): string {
    return 'futureMilieuEvents';
  }

  get majorNonPlayerCharacters(): INonPlayerCharacter[] {
    return NONPLAYERCHARACTERS;
  }

  get minorNonPlayerCharacters(): INonPlayerCharacter[] {
    return NONPLAYERCHARACTERS;
  }

  get monsterNonPlayerCharacters(): INonPlayerCharacter[] {
    return NONPLAYERCHARACTERS;
  }

  get plotPoints(): IPlotPoint[] {
    return PLOTPOINTS;
  }
}
