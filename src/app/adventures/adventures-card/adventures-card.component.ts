import { Component, OnInit, Input } from '@angular/core';
import { IAdventure } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-adventures-card',
  templateUrl: './adventures-card.component.html',
  styleUrls: ['./adventures-card.component.scss']
})
export class AdventuresCardComponent implements OnInit {
  @Input() adventures: IAdventure[] = [];

  constructor() {}

  ngOnInit() {}
}
