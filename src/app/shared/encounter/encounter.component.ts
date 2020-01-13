import { Component, OnInit, Input } from '@angular/core';
import { Empties, IEncounter } from '../interfaces';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {
  @Input() encounter: IEncounter = Empties.Encounter;

  constructor() {}

  ngOnInit() {}

  submit() {
    console.log('would have saved encounter: ' + JSON.stringify(this.encounter));
  }
}
