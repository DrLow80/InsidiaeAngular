import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StoryService } from '../shared/story.service';
import { EditStoryViewModel } from '../shared/interfaces';

@Component({
  selector: 'app-story-header',
  templateUrl: './story-header.component.html',
  styleUrls: ['./story-header.component.css'],
})
export class StoryHeaderComponent implements OnInit {
  viewModel: EditStoryViewModel;

  constructor(private route: ActivatedRoute, private service: StoryService, private router: Router) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = params.id;

      this.service.load(id).subscribe((x) => {
        this.viewModel = x;
      });
    });
  }

  get id(): string {
    return this.viewModel.id;
  }

  set id(value: string) {
    this.viewModel.id = value;
  }

  get title(): string {
    return this.viewModel.title;
  }

  set title(value: string) {
    this.viewModel.title = value;
  }

  get adventureDate(): string {
    return this.viewModel.adventureDate;
  }

  set adventureDate(value: string) {
    this.viewModel.adventureDate = value;
  }

  get gameMaster(): string {
    return this.viewModel.gameMaster;
  }

  set gameMaster(value: string) {
    this.viewModel.gameMaster = value;
  }

  get campaignDate(): string {
    return this.viewModel.campaignDate;
  }

  set campaignDate(value: string) {
    this.viewModel.campaignDate = value;
  }

  get episodeNumber(): string {
    return this.viewModel.episodeNumber;
  }

  set episodeNumber(value: string) {
    this.viewModel.episodeNumber = value;
  }

  get originationLocale(): string {
    return this.viewModel.originationLocale;
  }

  set originationLocale(value: string) {
    this.viewModel.originationLocale = value;
  }

  get theme(): string {
    return this.viewModel.theme;
  }

  set theme(value: string) {
    this.viewModel.theme = value;
  }

  submit() {
    this.router.navigate(['/story', this.id, 'edit']);
  }
}
