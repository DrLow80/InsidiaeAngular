import {
  IMilieuEvent,
  MilieuEventType,
  INonPlayerCharacter,
  NonPlayerCharacterType,
  IPlotPoint,
} from 'src/app/shared/interfaces';

export interface IStory {
  id: string;
  title: string;
  adventureDate: string;
  gameMaster: string;
  campaignDate: string;
  episodeNumber: string;
  originationLocale: string;
  theme: string;
  milieuEvents: IMilieuEvent[];
  nonPlayerCharacters: INonPlayerCharacter[];
  plotPoints: IPlotPoint[];
}

export class EditStoryViewModel {
  constructor(public story: IStory) {}

  get id(): string {
    return this.story.id;
  }

  set id(value: string) {
    this.story.id = value;
  }

  get title(): string {
    return this.story.title;
  }

  set title(value: string) {
    this.story.title = value;
  }

  get adventureDate(): string {
    return this.story.adventureDate;
  }

  set adventureDate(value: string) {
    this.story.adventureDate = value;
  }

  get gameMaster(): string {
    return this.story.gameMaster;
  }

  set gameMaster(value: string) {
    this.story.gameMaster = value;
  }

  get campaignDate(): string {
    return this.story.campaignDate;
  }

  set campaignDate(value: string) {
    this.story.campaignDate = value;
  }

  get episodeNumber(): string {
    return this.story.episodeNumber;
  }

  set episodeNumber(value: string) {
    this.story.episodeNumber = value;
  }

  get originationLocale(): string {
    return this.story.originationLocale;
  }

  set originationLocale(value: string) {
    this.story.originationLocale = value;
  }

  get theme(): string {
    return this.story.theme;
  }

  set theme(value: string) {
    this.story.theme = value;
  }

  addMilieuEvent(value: IMilieuEvent) {
    this.story.milieuEvents.push(value);
  }

  get pastMilieuEvents(): IMilieuEvent[] {
    const results = this.getMilieuEventsByType('past');

    return results;
  }

  get presentMilieuEvents(): IMilieuEvent[] {
    const results = this.getMilieuEventsByType('present');

    return results;
  }

  get futureMilieuEvents(): IMilieuEvent[] {
    const results = this.getMilieuEventsByType('future');

    return results;
  }

  getMilieuEventsByType(eventType: MilieuEventType): IMilieuEvent[] {
    const results = this.story.milieuEvents.filter(
      (x) => x.eventType === eventType
    );

    return results;
  }

  get majorNonPlayerCharacters(): INonPlayerCharacter[] {
    const results = this.getNonPlayerCharactersByType('major');

    return results;
  }

  get minorNonPlayerCharacters(): INonPlayerCharacter[] {
    const results = this.getNonPlayerCharactersByType('minor');

    return results;
  }

  get monsterNonPlayerCharacters(): INonPlayerCharacter[] {
    const results = this.getNonPlayerCharactersByType('monster');

    return results;
  }

  getNonPlayerCharactersByType(
    value: NonPlayerCharacterType
  ): INonPlayerCharacter[] {
    const results = this.story.nonPlayerCharacters.filter(
      (x) => x.nonPlayerCharacterType === value
    );

    return results;
  }

  addNonPlayerCharacter(value: INonPlayerCharacter) {
    this.story.nonPlayerCharacters.push(value);
  }

  get plotPoints(): IPlotPoint[] {
    return this.story.plotPoints;
  }

  addPlotPoint(value: IPlotPoint) {
    this.story.plotPoints.push(value);
  }
}

export interface IGenericRepository<T> {
  getAll(): T[];
  getById(id: any): T;
  insert(obj: T): void;
  update(obj: T): void;
  delete(id: any): void;
  save(): void;
}
