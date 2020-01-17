import { Component, OnInit } from '@angular/core';
import { SessionViewModel, DataService } from '../core/services/data.service';
import { IEncounter } from '../shared/interfaces';

@Component({
  selector: 'app-session-host',
  templateUrl: './session-host.component.html',
  styleUrls: ['./session-host.component.scss']
})
export class SessionHostComponent implements OnInit {
  sessionViewModel: SessionViewModel;
  current: any;
  encounterViewModel: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSessionViewModel('1').subscribe(x => {
      this.sessionViewModel = x;

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

  addNewEncounter() {
    const encounter: IEncounter = {
      description: 'new encounter',
      name: 'name'
    };

    this.sessionViewModel.session.encounters.push(encounter);

    this.selectedEncounter(encounter);
  }

  deleteSession() {
    if (confirm('art thou sure?')) {
      console.log('would have deleted session');
    }
  }

  deleteEncounter() {
    const index = this.sessionViewModel.session.encounters.indexOf(
      this.encounterViewModel
    );

    if (index !== -1) {
      if (confirm('art thou sure?')) {
        this.sessionViewModel.session.encounters.splice(index, 1);

        this.selecedSession();
      }
    }
  }
}
