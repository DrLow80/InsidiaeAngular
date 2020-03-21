import { IAdventure } from './interfaces';

export class AdventureViewModel {
  constructor(public model: IAdventure) {}

  get milieuEventTypes(): string[] {
    return ['Political and Civil Strife', 'Disasters', 'Social Upheaval', 'War', 'Cataclysm'];
  }

  get milieuTimePeriods(): string[] {
    return ['Past', 'Present', 'Future'];
  }
}
