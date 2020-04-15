import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../shared/story.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPlotPoint, ITurningPoint } from '../shared/interfaces';

@Component({
  selector: 'app-plot-point',
  templateUrl: './plot-point.component.html',
  styleUrls: ['./plot-point.component.css'],
})
export class PlotPointComponent implements OnInit {
  storyId = '';

  viewModel: IPlotPoint;

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

        this.service.loadPlotPoint(x.pid).subscribe((n) => {
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

  get incitingIncident(): ITurningPoint {
    return this.viewModel.incitingIncident;
  }

  get endPoint(): ITurningPoint {
    return this.viewModel.endPoint;
  }

  get turningPoints(): ITurningPoint[] {
    return this.viewModel.turningPoints;
  }

  submit() {
    this.router.navigate(['/story', this.storyId, 'edit']);
  }

  addIncitingIncident() {
    const result = this.service.addIncitingIncident(this.viewModel);

    this.router.navigate([
      'story',
      this.storyId,
      'plot-point',
      this.viewModel.id,
      'turning-point',
      result.id,
    ]);
  }

  addTurningPoint() {
    const result = this.service.createTurningPoint(this.viewModel);

    this.router.navigate([
      '/story',
      this.storyId,
      'plot-point',
      this.viewModel.id,
      'turning-point',
      result.id,
    ]);
  }

  addEndPoint() {
    const result = this.service.addEndPoint(this.viewModel);

    this.router.navigate([
      '/story',
      this.storyId,
      'plot-point',
      this.viewModel.id,
      'turning-point',
      result.id,
    ]);
  }
}
