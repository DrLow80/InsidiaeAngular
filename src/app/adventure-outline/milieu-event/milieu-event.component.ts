import { Component, OnInit, Input } from '@angular/core';
import { IMilieuEvent } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-milieu-event',
  templateUrl: './milieu-event.component.html',
  styleUrls: ['./milieu-event.component.css']
})
export class MilieuEventComponent implements OnInit {
  @Input() milieuEvent: IMilieuEvent;
  @Input() milieuTimePeriods: string[];
  @Input() milieuEventTypes: string[];

  constructor() {}

  ngOnInit() {}

  get name(): string {
    return this.milieuEvent.name;
  }

  set name(value: string) {
    this.milieuEvent.name = value;
  }

  get milieuTimePeriod(): string {
    return this.milieuEvent.milieuTimePeriod;
  }

  set milieuTimePeriod(value: string) {
    this.milieuEvent.milieuTimePeriod = value;
  }

  get milieuEventType(): string {
    return this.milieuEvent.milieuEventType;
  }

  set milieuEventType(value: string) {
    this.milieuEvent.milieuEventType = value;
  }

  get description(): string {
    return this.milieuEvent.description;
  }

  set description(value: string) {
    this.milieuEvent.description = value;
  }
}
