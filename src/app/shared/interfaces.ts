export interface IOutline {
  adventureTitle: string;
  realWorldDate: string;
  gameMaster: string;
  campaignDate: string;
  campaignEpisodeNumber: string;
  originationLocale: string;
  adventureTheme: string;
}

export interface IMilieuEvent {
  description: string;
  milieuEventType: string;
  name: string;
  milieuTimePeriod: string;
}

export interface INonPlayerCharacter {
  description: string;
  storyRole: string;
  name: string;
  characterType: string;
}

export interface IEncounter {
  unboundTriggers: string;
  boundTriggers: string;
  description: string;
  location: string;
  plotElement: string;
  storyFunction: string;
  encounterType: string;
  name: string;
}

export interface IPlot {
  index: number;
  name: string;
  plotPoints: IPlotPoint[];
}

export interface IPlotPoint {
  index: number;
  name: string;
  encounter: IEncounter;
}

export interface IAdventure {
  outline: IOutline;
  milieuEvents: IMilieuEvent[];
  nonPlayerCharacters: INonPlayerCharacter[];
  plots: IPlot[];
}
