import { Component, OnInit } from '@angular/core';
import { IMilieuEvent, MilieuEventType } from 'src/app/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../shared/story.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-milieu-event',
  templateUrl: './milieu-event.component.html',
  styleUrls: ['./milieu-event.component.css'],
})
export class MilieuEventComponent implements OnInit {
  storyId = '';

  viewModel: IMilieuEvent = {
    description: 'description',
    eventType: 'future',
    id: 'id',
    title: 'title',
  };

  constructor(private route: ActivatedRoute, private service: StoryService, private router: Router) {}

  ngOnInit() {
    combineLatest(this.route.parent.params, this.route.params)
      .pipe(map((results) => ({ ...results[0], ...results[1] })))
      .subscribe((x) => {
        this.storyId = x.id;

        this.service.loadMilieuEvent(x.mid).subscribe((n) => {
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

  get type(): MilieuEventType {
    return this.viewModel.eventType;
  }

  set type(value: MilieuEventType) {
    this.viewModel.eventType = value;
  }

  get milieuEventTypes(): MilieuEventType[] {
    return ['past', 'present', 'future'];
  }

  submit() {
    this.router.navigate(['/story', this.storyId, 'edit']);
  }
}
