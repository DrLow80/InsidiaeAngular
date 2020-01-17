import { Component, OnInit, Input } from '@angular/core';
import { Empties, IEncounter } from '../interfaces';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent {
  @Input() encounter: IEncounter = Empties.Encounter;

  constructor() {}
}
