import { Component, OnInit } from '@angular/core';
import { EditStoryViewModel } from './shared/interfaces';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { StoryService } from './shared/story.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  viewModel: EditStoryViewModel;

  constructor(
    private route: ActivatedRoute,
    private service: StoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;

      console.log(id);

      this.service.load(id).subscribe((x) => {
        this.viewModel = x;
      });
    });
  }
}
