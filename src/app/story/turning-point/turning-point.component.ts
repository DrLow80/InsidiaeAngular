import { Component, OnInit } from '@angular/core';
import { ITurningPoint } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-turning-point',
  templateUrl: './turning-point.component.html',
  styleUrls: ['./turning-point.component.css'],
})
export class TurningPointComponent implements OnInit {
  storyId = '';
  plotPointId = '';
  viewModel: ITurningPoint = {
    description: 'description',
    id: 'id',
    title: 'title',
  };

  constructor() {}

  ngOnInit() {}

  get description(): string {
    return this.viewModel.description;
  }

  set description(value: string) {
    this.viewModel.description = value;
  }

  get title(): string {
    return this.viewModel.title;
  }

  set title(value: string) {
    this.viewModel.title = value;
  }

  submit() {}
}
