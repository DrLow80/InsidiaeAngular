import { Component, OnInit } from '@angular/core';
import { IAdventure, Empties, IMilieuEvent } from 'src/app/shared/interfaces';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-adventure-details',
  templateUrl: './adventure-details.component.html',
  styleUrls: ['./adventure-details.component.scss']
})
export class AdventureDetailsComponent implements OnInit {
  adventure: IAdventure = Empties.Adventure;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {}

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(x => {
      const id = +x.id;
      if (id !== 0) {
        this.getAdventure(id);
      }
    });
  }

  getAdventure(id: number) {
    this.dataService.getAdventure(id).subscribe(x => {
      this.adventure = x;
    });
  }

  addMilieuEvent(type: string) {
    const milieuEvent: IMilieuEvent = {
      id: 0,
      displayName: 'New Event'
    };

    let events = this.adventure.pastMilieuEvents;

    if (type === 'present') {
      events = this.adventure.presentMilieuEvents;
    }

    if (type === 'future') {
      events = this.adventure.futureMilieuEvents;
    }

    events.push(milieuEvent);
  }

  editMiliueEvent(target) {
    console.log(JSON.stringify(target));
  }
}
