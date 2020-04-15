import { NonPlayerCharacterComponent } from '../story/non-player-character/non-player-character.component';

export interface IAdventure {
  id: number;
  title: string;
  summary: string;
}

export const ADVENTURES: IAdventure[] = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    summary: 'Donec eget odio ac ex blandit semper ut vel magna',
  },
  {
    id: 1,
    title: 'Pellentesque elementum nunc nec congue commodo',
    summary: 'Mauris interdum eros quis mauris euismod finibus',
  },
  {
    id: 1,
    title: 'Vestibulum nec lacus sed augue imperdiet pharetra',
    summary: 'Maecenas a velit pulvinar, dictum quam sit amet, blandit purus',
  },
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    summary: 'Donec eget odio ac ex blandit semper ut vel magna',
  },
  {
    id: 1,
    title: 'Pellentesque elementum nunc nec congue commodo',
    summary: 'Mauris interdum eros quis mauris euismod finibus',
  },
  {
    id: 1,
    title: 'Vestibulum nec lacus sed augue imperdiet pharetra',
    summary: 'Maecenas a velit pulvinar, dictum quam sit amet, blandit purus',
  },
];

export type NonPlayerCharacterType = 'major' | 'minor' | 'monster';

export interface INonPlayerCharacter {
  id: string;
  name: string;
  nonPlayerCharacterType: NonPlayerCharacterType;
}

export const NONPLAYERCHARACTERS: INonPlayerCharacter[] = [
  {
    id: '1',
    name: 'Lorem',
    nonPlayerCharacterType: 'major',
  },
  {
    id: '2',
    name: 'Pellentesque',
    nonPlayerCharacterType: 'major',
  },
  {
    id: '3',
    name: 'Vestibulum',
    nonPlayerCharacterType: 'major',
  },
];

export interface IPlotPoint {
  id: string;
  title: string;
  description: string;
  incitingIncident: ITurningPoint;
  endPoint: ITurningPoint;
  turningPoints: ITurningPoint[];
}

export interface ITurningPoint {
  id: string;
  title: string;
  description: string;
}

export const PLOTPOINTS: IPlotPoint[] = [
  {
    id: '1',
    description: 'description',

    endPoint: {
      id: '1',
      title: 'Lorem',
      description: 'description',
    },
    incitingIncident: {
      id: '2',
      title: 'Pellentesque',
      description: 'description',
    },
    title: 'Vestibulum',
    turningPoints: [
      {
        id: '2',
        title: 'turningPoint1',
        description: 'description',
      },
      {
        id: '3',
        title: 'turningPoint2',
        description: 'description',
      },
      {
        id: '4',
        title: 'turningPoint3',
        description: 'description',
      },
    ],
  },
  {
    id: '5',
    description: 'description',

    endPoint: {
      id: '6',
      title: 'Proin',
      description: 'description',
    },
    incitingIncident: {
      id: '7',
      title: 'Duis',
      description: 'description',
    },
    title: 'Nunc',
    turningPoints: [
      {
        id: '8',
        title: 'turningPoint1',
        description: 'description',
      },
      {
        id: '9',
        title: 'turningPoint2',
        description: 'description',
      },
      {
        id: '10',
        title: 'turningPoint3',
        description: 'description',
      },
    ],
  },
];

export type MilieuEventType = 'past' | 'present' | 'future';

export interface IMilieuEvent {
  id: string;
  title: string;
  eventType: MilieuEventType;
  description: string;
}

export const MILIEUEVENTS: IMilieuEvent[] = [
  {
    id: '1',
    title: 'Nulla',
    eventType: 'past',
    description: 'description',
  },
  {
    id: '2',
    title: 'Donec',
    eventType: 'past',
    description: 'description',
  },
  {
    id: '3',
    title: 'Aliquam',
    eventType: 'past',
    description: 'description',
  },
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
  title: 'Lorem ipsum',
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
  type: 'present',
};
