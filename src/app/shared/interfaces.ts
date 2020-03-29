export interface IAdventure {
  id: number;
  title: string;
  summary: string;
}

export const ADVENTURES: IAdventure[] = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    summary: 'Donec eget odio ac ex blandit semper ut vel magna'
  },
  {
    id: 1,
    title: 'Pellentesque elementum nunc nec congue commodo',
    summary: 'Mauris interdum eros quis mauris euismod finibus'
  },
  {
    id: 1,
    title: 'Vestibulum nec lacus sed augue imperdiet pharetra',
    summary: 'Maecenas a velit pulvinar, dictum quam sit amet, blandit purus'
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    summary: 'Donec eget odio ac ex blandit semper ut vel magna'
  },
  {
    id: 1,
    title: 'Pellentesque elementum nunc nec congue commodo',
    summary: 'Mauris interdum eros quis mauris euismod finibus'
  },
  {
    id: 1,
    title: 'Vestibulum nec lacus sed augue imperdiet pharetra',
    summary: 'Maecenas a velit pulvinar, dictum quam sit amet, blandit purus'
  }
];

export interface INonPlayerCharacter {
  id: number;
  name: string;
}

export const NONPLAYERCHARACTERS: INonPlayerCharacter[] = [
  {
    id: 1,
    name: 'Lorem'
  },
  {
    id: 1,
    name: 'Pellentesque'
  },
  {
    id: 1,
    name: 'Vestibulum'
  }
];

export interface IPlotPoint {
  id: number;
  title: string;
  incitingIncident: ITurningPoint;
  endPoint: ITurningPoint;
  turningPoints: ITurningPoint[];
}

export interface ITurningPoint {
  id: number;
  title: string;
}

export const PLOTPOINTS: IPlotPoint[] = [
  {
    id: 1,
    endPoint: {
      id: 1,
      title: 'Lorem'
    },
    incitingIncident: {
      id: 1,
      title: 'Pellentesque'
    },
    title: 'Vestibulum',
    turningPoints: [
      {
        id: 1,
        title: 'turningPoint1'
      },
      {
        id: 1,
        title: 'turningPoint2'
      },
      {
        id: 1,
        title: 'turningPoint3'
      }
    ]
  },
  {
    id: 1,
    endPoint: {
      id: 1,
      title: 'Proin'
    },
    incitingIncident: {
      id: 1,
      title: 'Duis'
    },
    title: 'Nunc',
    turningPoints: [
      {
        id: 1,
        title: 'turningPoint1'
      },
      {
        id: 1,
        title: 'turningPoint2'
      },
      {
        id: 1,
        title: 'turningPoint3'
      }
    ]
  }
];

export interface IMilieuEvent {
  id: number;
  title: string;
}

export const MILIEUEVENTS: IMilieuEvent[] = [
  {
    id: 1,
    title: 'Nulla'
  },
  {
    id: 2,
    title: 'Donec'
  },
  {
    id: 3,
    title: 'Aliquam'
  }
];

export interface IEditAdventureVeiwModel {
  id: number;
  title: string;
  adventureDate: string;
  gameMaster: string;
  campaignDate: string;
  episodeNumber: string;
  originationLocale: string;
  theme: string;
  pastMilieuEvents: IMilieuEvent[];
  presentMilieuEvents: IMilieuEvent[];
  futureMilieuEvents: IMilieuEvent[];
  majorNonPlayerCharacters: INonPlayerCharacter[];
  minorNonPlayerCharacters: INonPlayerCharacter[];
  monsterNonPlayerCharacters: INonPlayerCharacter[];
  plotPoints: IPlotPoint[];
}

export const DEFAULTEDITADVENTUREVIEWMODEL: IEditAdventureVeiwModel = {
  id: 1,
  adventureDate: 'adventure Date',
  campaignDate: 'campaign Date',
  episodeNumber: 'episode Number',
  futureMilieuEvents: MILIEUEVENTS,
  gameMaster: 'game Master',
  majorNonPlayerCharacters: NONPLAYERCHARACTERS,
  minorNonPlayerCharacters: NONPLAYERCHARACTERS,
  monsterNonPlayerCharacters: NONPLAYERCHARACTERS,
  originationLocale: 'origination Locale',
  pastMilieuEvents: MILIEUEVENTS,
  plotPoints: PLOTPOINTS,
  presentMilieuEvents: MILIEUEVENTS,
  theme: 'theme',
  title: 'Lorem ipsum'
};

export interface IEditMilieuEventViewModel {
  id: number;
  title: string;
  description: string;
  type: string;
}

export const DEFAULTEDITMILIEUEVENTVIEWMODEL: IEditMilieuEventViewModel = {
  id: 0,
  title: 'title',
  description: 'description',
  type: 'present'
};
