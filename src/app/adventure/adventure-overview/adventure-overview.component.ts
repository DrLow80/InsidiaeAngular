import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IAdventure, Empties, IAdventureOverview } from 'src/app/shared/interfaces';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/core/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adventure-overview',
  templateUrl: './adventure-overview.component.html',
  styleUrls: ['./adventure-overview.component.scss']
})
export class AdventureOverviewComponent implements OnInit {
  adventure: IAdventure = Empties.Adventure;

  get adventureOverview(): IAdventureOverview {
    return this.adventure.overview;
  }

  @ViewChild('adventureForm', { static: true }) adventureForm: NgForm;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.parent.params.subscribe(x => {
      const id = +x.id;

      if (id) {
        this.dataService.getAdventure(id).subscribe(n => {
          this.adventure = n;
        });
      }
    });
  }

  submit() {
    console.log(JSON.stringify(this.adventure));
  }
}
