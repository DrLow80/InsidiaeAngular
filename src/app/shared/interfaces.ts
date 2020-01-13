export class Interfaces {}

export interface IAdventure {
  id: number;
  overview: IAdventureOverview;
  pastMilieuEvents: IMilieuEvent[];
  presentMilieuEvents: IMilieuEvent[];
  futureMilieuEvents: IMilieuEvent[];
  majorNonPlayerCharacters: INonPlayerCharacter[];
  minorNonPlayerCharacters: INonPlayerCharacter[];
  monsterNonPlayerCharacters: INonPlayerCharacter[];
}

export interface IAdventureOverview {
  title: string;
  description: string;
  date: string;
  gameMaster: string;
  campaignDate: string;
  episodeNumber: string;
  originationLocale: string;
  adventureTheme: string;
}

export interface IMilieuEvent {
  id: number;
  displayName: string;
}

export interface INonPlayerCharacter {
  id: string;
  displayName: string;
}

export class Empties {
  static get Adventure(): IAdventure {
    return {
      id: 0,
      overview: {
        description: '',
        title: '',
        date: '',
        gameMaster: '',
        campaignDate: '',
        episodeNumber: '',
        originationLocale: '',
        adventureTheme: ''
      },
      pastMilieuEvents: [],
      presentMilieuEvents: [],
      futureMilieuEvents: [],
      majorNonPlayerCharacters: [],
      minorNonPlayerCharacters: [],
      monsterNonPlayerCharacters: []
    };
  }

  static get Session(): ISession {
    return {
      brief: '',
      date: new Date(),
      encounters: [],
      name: '',
      number: ''
    };
  }

  static get Encounter(): IEncounter {
    return {
      description: '',
      name: ''
    };
  }
}

export interface ISession {
  date: Date;
  brief: string;
  name: string;
  number: string;
  encounters: IEncounter[];
}

export interface IStory {
  title: string;
  brief: string;
}

export interface IEncounter {
  name: string;
  description: string;
}
