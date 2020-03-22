import { Component, OnInit } from '@angular/core';
import { IAdventure, ADVENTURES } from '../shared/interfaces';

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css']
})
export class AdventuresComponent implements OnInit {
  adventures: IAdventure[] = ADVENTURES;

  constructor() {}

  ngOnInit() {}
}
