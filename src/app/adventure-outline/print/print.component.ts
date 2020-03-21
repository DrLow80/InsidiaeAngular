import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAdventure, IMilieuEvent, INonPlayerCharacter, IPlot } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  @Input() adventure: IAdventure;

  @Output() editOutline = new EventEmitter();
  @Output() newMilieuEvent = new EventEmitter();
  @Output() newNonPlayerCharacter = new EventEmitter();
  @Output() editMilieuEvent = new EventEmitter<IMilieuEvent>();
  @Output() editNonPlayerCharacter = new EventEmitter<INonPlayerCharacter>();

  constructor() {}

  ngOnInit() {}

  get adventureTitle(): string {
    return this.adventure.outline.adventureTitle;
  }

  get realWorldDate(): string {
    return this.adventure.outline.realWorldDate;
  }

  get gameMaster(): string {
    return this.adventure.outline.gameMaster;
  }

  get campaignDate(): string {
    return this.adventure.outline.campaignDate;
  }

  get campaignEpisodeNumber(): string {
    return this.adventure.outline.campaignEpisodeNumber;
  }

  get originationLocale(): string {
    return this.adventure.outline.originationLocale;
  }

  get adventureTheme(): string {
    return this.adventure.outline.adventureTheme;
  }

  get plots(): IPlot[] {
    return this.adventure.plots;
  }

  onEditOutline() {
    this.editOutline.emit('');
  }

  get milieuTimePeriods(): string[] {
    const results = [];

    for (const milieuEvent of this.adventure.milieuEvents) {
      const index = results.indexOf(milieuEvent.milieuTimePeriod);

      if (index < 0) {
        results.push(milieuEvent.milieuTimePeriod);
      }
    }

    return results;
  }

  getMilieuEvents(milieuTimePeriod: string): IMilieuEvent[] {
    const results = this.adventure.milieuEvents.filter(x => x.milieuTimePeriod === milieuTimePeriod);

    return results;
  }

  get characterTypes(): string[] {
    const results = [];

    for (const nonPlayerCharacter of this.adventure.nonPlayerCharacters) {
      const index = results.indexOf(nonPlayerCharacter.characterType);

      if (index < 0) {
        results.push(nonPlayerCharacter.characterType);
      }
    }

    return results;
  }

  getNonPlayerCharacters(characerType: string): INonPlayerCharacter[] {
    const results = this.adventure.nonPlayerCharacters.filter(x => x.characterType === characerType);

    return results;
  }

  addMilieuEvent() {
    this.newMilieuEvent.emit('');
  }

  addNonPlayerCharacter() {
    this.newNonPlayerCharacter.emit('');
  }

  selectMilieuEvent(value: IMilieuEvent) {
    this.editMilieuEvent.emit(value);
  }

  selectNonPlayerCharacter(value: INonPlayerCharacter) {
    this.editNonPlayerCharacter.emit(value);
  }
}
