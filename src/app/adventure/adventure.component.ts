import { Component, OnInit } from '@angular/core';
import { IAdventure } from '../shared/interfaces';
import { DataService } from '../core/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.scss']
})
export class AdventureComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
