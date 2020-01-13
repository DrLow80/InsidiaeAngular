import { Component, OnInit } from '@angular/core';
import { ISession, IStory } from '../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sessions: ISession[] = [
    { brief: 'test', date: new Date(), encounters: [], name: '', number: '' },
    { brief: 'test', date: new Date(), encounters: [], name: '', number: '' },
    { brief: 'test', date: new Date(), encounters: [], name: '', number: '' },
    { brief: 'test', date: new Date(), encounters: [], name: '', number: '' },
    { brief: 'test', date: new Date(), encounters: [], name: '', number: '' }
  ];

  stories: IStory[] = [
    { brief: 'brief', title: 'title' },
    { brief: 'brief', title: 'title' },
    { brief: 'brief', title: 'title' },
    { brief: 'brief', title: 'title' },
    { brief: 'brief', title: 'title' },
    { brief: 'brief', title: 'title' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  onAddSession() {
    console.log('test');

    this.router.navigate(['/session/1']);
  }
}
