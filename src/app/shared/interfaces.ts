export class Interfaces {}

export interface IAdventure {
  id: number;
  overview: IAdventureOverview;
  pastMilieuEvents: IMilieuEvent[];
  presentMilieuEvents: IMilieuEvent[];
  futureMilieuEvents: IMilieuEvent[];
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
  displayName: string;
}

export class Empties {
  static get Adventure(): IAdventure {
    return {
      id: 0,
      overview: {
        description: "",
        title: "",
        date: "",
        gameMaster: "",
        campaignDate: "",
        episodeNumber: "",
        originationLocale: "",
        adventureTheme: ""
      },
      pastMilieuEvents: [],
      presentMilieuEvents: [],
      futureMilieuEvents: []
    };
  }
}
