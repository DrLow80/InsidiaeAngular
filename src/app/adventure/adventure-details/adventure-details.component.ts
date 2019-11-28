import { Component, OnInit } from '@angular/core';
import { IAdventure, Empties } from 'src/app/shared/interfaces';
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
      const id = +x['id'];
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

  addMilieuEvent(test:string){
    console.log('and '+ test);
  }
}
