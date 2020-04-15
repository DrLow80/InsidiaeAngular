import { Component, OnInit } from '@angular/core';
import { StoryService } from '../shared/story.service';
import { IStory } from '../shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css'],
})
export class StoryListComponent implements OnInit {
  stories: IStory[];

  constructor(private service: StoryService, private router: Router) {}

  ngOnInit() {
    this.service.list().subscribe((x) => {
      this.stories = x;
    });
  }

  create() {
    const story = this.service.createStory();

    this.router.navigate(['/story', story.id, 'edit']);
  }
}
