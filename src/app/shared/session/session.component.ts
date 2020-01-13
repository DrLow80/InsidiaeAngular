import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ISession, Empties } from '../interfaces';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  @Input() session: ISession = Empties.Session;

  @ViewChild('sessionForm', { static: true }) sessionForm: NgForm;

  constructor() {}

  ngOnInit() {}
}
