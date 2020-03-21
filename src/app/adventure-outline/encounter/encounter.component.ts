import { Component, OnInit, Input } from '@angular/core';
import { IEncounter } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {
  @Input() encounter: IEncounter;

  constructor() {}

  ngOnInit() {}

  get name(): string {
    return this.encounter.name;
  }

  set name(value: string) {
    this.encounter.name = value;
  }

  get encounterType(): string {
    return this.encounter.encounterType;
  }

  set encounterType(value: string) {
    this.encounter.encounterType = value;
  }

  get storyFunction(): string {
    return this.encounter.storyFunction;
  }

  set storyFunction(value: string) {
    this.encounter.storyFunction = value;
  }

  get plotElement(): string {
    return this.encounter.plotElement;
  }

  set plotElement(value: string) {
    this.encounter.plotElement = value;
  }

  get location(): string {
    return this.encounter.location;
  }

  set location(value: string) {
    this.encounter.location = value;
  }

  get description(): string {
    return this.encounter.description;
  }

  set description(value: string) {
    this.encounter.description = value;
  }

  get boundTriggers(): string {
    return this.encounter.boundTriggers;
  }

  set boundTriggers(value: string) {
    this.encounter.boundTriggers = value;
  }

  get unboundTriggers(): string {
    return this.encounter.unboundTriggers;
  }

  set unboundTriggers(value: string) {
    console.log(value);
  }
}
