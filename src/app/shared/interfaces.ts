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
  name: string;
}

export const NONPLAYERCHARACTERS: INonPlayerCharacter[] = [{ name: 'Lorem' }, { name: 'Pellentesque' }, { name: 'Vestibulum' }];

export interface IPlotPoint {
  title: string;
  incitingIncident: ITurningPoint;
  endPoint: ITurningPoint;
  turningPoints: ITurningPoint[];
}

export interface ITurningPoint {
  title: string;
}

export const PLOTPOINTS: IPlotPoint[] = [
  {
    endPoint: {
      title: 'Lorem'
    },
    incitingIncident: {
      title: 'Pellentesque'
    },
    title: 'Vestibulum',
    turningPoints: [
      {
        title: 'turningPoint1'
      },
      {
        title: 'turningPoint2'
      },
      {
        title: 'turningPoint3'
      }
    ]
  },
  {
    endPoint: {
      title: 'Proin'
    },
    incitingIncident: {
      title: 'Duis'
    },
    title: 'Nunc',
    turningPoints: [
      {
        title: 'turningPoint1'
      },
      {
        title: 'turningPoint2'
      },
      {
        title: 'turningPoint3'
      }
    ]
  }
];
