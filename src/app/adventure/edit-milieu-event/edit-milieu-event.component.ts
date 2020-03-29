import { Component, OnInit } from '@angular/core';
import { IEditMilieuEventViewModel, DEFAULTEDITMILIEUEVENTVIEWMODEL } from 'src/app/shared/interfaces';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EditAdventureService } from '../edit-adventure.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-milieu-event',
  templateUrl: './edit-milieu-event.component.html',
  styleUrls: ['./edit-milieu-event.component.css']
})
export class EditMilieuEventComponent implements OnInit {
  viewModel: IEditMilieuEventViewModel = DEFAULTEDITMILIEUEVENTVIEWMODEL;

  constructor(private route: ActivatedRoute, private service: EditAdventureService, private router: Router) {}

  ngOnInit() {
    combineLatest(this.route.params, this.route.queryParams)
      .pipe(map(results => ({ ...results[0], ...results[1] })))
      .subscribe(x => {
        console.log(JSON.stringify(x));
        this.service.loadMilieuEvent(+x.id).subscribe(n => {
          this.viewModel = n;
        });
      });
  }

  get title(): string {
    return this.viewModel.title;
  }

  set title(value: string) {
    this.viewModel.title = value;
  }

  get description(): string {
    return this.viewModel.description;
  }

  set description(value: string) {
    this.viewModel.description = value;
  }

  get type(): string {
    return this.viewModel.type;
  }

  set type(value: string) {
    this.viewModel.type = value;
  }

  get milieuEventTypes(): string[] {
    return ['past', 'present', 'future'];
  }

  submit() {
    console.log(JSON.stringify(this.viewModel));
  }
}
