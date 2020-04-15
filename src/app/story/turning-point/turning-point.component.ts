import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../shared/story.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITurningPoint } from '../shared/interfaces';

@Component({
  selector: 'app-turning-point',
  templateUrl: './turning-point.component.html',
  styleUrls: ['./turning-point.component.css'],
})
export class TurningPointComponent implements OnInit {
  storyId = '';
  plotPointId = '';
  viewModel: ITurningPoint;

  constructor(
    private route: ActivatedRoute,
    private service: StoryService,
    private router: Router
  ) {}

  ngOnInit() {
    combineLatest(this.route.parent.params, this.route.params)
      .pipe(map((results) => ({ ...results[0], ...results[1] })))
      .subscribe((x) => {
        this.storyId = x.id;

        this.plotPointId = x.pid;

        this.service.loadTurningPoint(x.tid).subscribe((n) => {
          this.viewModel = n;
        });
      });
  }

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
