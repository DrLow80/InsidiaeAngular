import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import { IAdventure } from '../shared/interfaces';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.scss']
})
export class AdventuresComponent implements OnInit {
  adventures: IAdventure[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAdventures().subscribe(x => {
      this.adventures = x;
    });
  }
}
