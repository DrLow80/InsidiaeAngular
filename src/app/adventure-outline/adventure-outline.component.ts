import { Component, OnInit } from '@angular/core';
import { IAdventure, IOutline, IMilieuEvent, INonPlayerCharacter } from '../shared/interfaces';
import { AdventureViewModel } from '../shared/adventure-view-model';

@Component({
  selector: 'app-adventure-outline',
  templateUrl: './adventure-outline.component.html',
  styleUrls: ['./adventure-outline.component.css']
})
export class AdventureOutlineComponent implements OnInit {
  adventure: IAdventure = {
    outline: {
      adventureTitle: 'adventureTitle',
      adventureTheme: 'adventureTheme',
      campaignDate: 'campaignDate',
      campaignEpisodeNumber: 'campaignEpisodeNumber',
      gameMaster: 'gameMaster',
      originationLocale: 'originationLocale',
      realWorldDate: 'realWorldDate'
    },
    milieuEvents: [
      {
        description: 'description',
        milieuEventType: 'War',
        name: 'one',
        milieuTimePeriod: 'Past'
      },
      {
        description: 'description',
        milieuEventType: 'War',
        name: 'two',
        milieuTimePeriod: 'Present'
      },
      {
        description: 'description',
        milieuEventType: 'War',
        name: 'three',
        milieuTimePeriod: 'Present'
      },
      {
        description: 'description',
        milieuEventType: 'War',
        name: 'four',
        milieuTimePeriod: 'Future'
      }
    ],
    nonPlayerCharacters: [
      {
        description: 'description',
        name: 'five',
        storyRole: 'storyRole',
        characterType: 'Major'
      },
      {
        description: 'description',
        name: 'six',
        storyRole: 'storyRole',
        characterType: 'Minor'
      },
      {
        description: 'description',
        name: 'seven',
        storyRole: 'storyRole',
        characterType: 'Monster'
      }
    ],
    plots: [
      {
        index: 0,
        name: 'name',
        plotPoints: [
          {
            name: 'name',
            index: 0,
            encounter: {
              boundTriggers: 'boundTriggers',
              description: 'description',
              encounterType: 'encountertype',
              storyFunction: 'storyFunction',
              location: 'location',
              name: 'name',
              plotElement: 'plotElement',
              unboundTriggers: 'unboundTriggers'
            }
          }
        ]
      }
    ]
  };

  currentView = 'default';
  milieuEvent: IMilieuEvent;
  nonPlayerCharacter: INonPlayerCharacter;
  adventureViewModel: AdventureViewModel;

  constructor() { }

  ngOnInit() {
    this.adventureViewModel = new AdventureViewModel(this.adventure);
  }

  editOutline() {
    this.currentView = 'outline';
  }

  get outline(): IOutline {
    return this.adventure.outline;
  }

  get milieuEventTypes(): string[] {
    return this.adventureViewModel.milieuEventTypes;
  }

  get milieuTimePeriods(): string[] {
    return this.adventureViewModel.milieuTimePeriods;
  }

  back() {
    this.currentView = 'default';
  }

  newMilieuEvent() {
    this.milieuEvent = {
      description: 'description',
      milieuEventType: 'War',
      milieuTimePeriod: 'Past',
      name: 'name'
    };

    this.adventure.milieuEvents.push(this.milieuEvent);

    this.currentView = 'milieuEvent';
  }

  newNonPlayerCharacter() {
    this.nonPlayerCharacter = {
      characterType: 'characterType',
      description: 'description',
      name: 'name',
      storyRole: 'storyRole'
    };

    this.adventure.nonPlayerCharacters.push(this.nonPlayerCharacter);

    this.currentView = 'nonPlayerCharacter';
  }

  editMilieuEvent(value: IMilieuEvent) {
    this.milieuEvent = value;

    this.currentView = 'milieuEvent';
  }

  editNonPlayerCharacter(value: INonPlayerCharacter) {
    this.nonPlayerCharacter = value;

    this.currentView = 'nonPlayerCharacter';
  }
}
