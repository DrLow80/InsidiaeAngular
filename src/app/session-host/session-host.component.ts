import { Component, OnInit } from '@angular/core';
import { SessionViewModel, DataService } from '../core/services/data.service';
import { Empties, IEncounter } from '../shared/interfaces';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-session-host',
  templateUrl: './session-host.component.html',
  styleUrls: ['./session-host.component.scss']
})
export class SessionHostComponent implements OnInit {
  // sessionViewModel = new SessionViewModel(Empties.Session);
  sessionViewModel: SessionViewModel;
  current: any;
  encounterViewModel: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSessionViewModel('1').subscribe(x => {
      this.sessionViewModel = x;

      console.log(JSON.stringify(this.sessionViewModel));

      this.selecedSession();
    });
  }

  get showSession(): boolean {
    return this.current === this.sessionViewModel;
  }

  get showEncounter(): boolean {
    return this.current === this.encounterViewModel;
  }

  selecedSession() {
    this.current = this.sessionViewModel;
  }

  selectedEncounter(encounter: IEncounter) {
    this.encounterViewModel = encounter;

    this.current = this.encounterViewModel;
  }
}
