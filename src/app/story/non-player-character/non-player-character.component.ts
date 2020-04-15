import { Component, OnInit } from '@angular/core';
import { NonPlayerCharacterType, INonPlayerCharacter } from 'src/app/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../shared/story.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-non-player-character',
  templateUrl: './non-player-character.component.html',
  styleUrls: ['./non-player-character.component.css'],
})
export class NonPlayerCharacterComponent implements OnInit {
  storyId = '';

  viewModel: INonPlayerCharacter = {
    id: 'id',
    name: 'name',
    nonPlayerCharacterType: 'major',
  };

  constructor(private route: ActivatedRoute, private service: StoryService, private router: Router) {}

  ngOnInit() {
    combineLatest(this.route.parent.params, this.route.params)
      .pipe(map((results) => ({ ...results[0], ...results[1] })))
      .subscribe((x) => {
        this.storyId = x.id;

        this.service.loadNonPlayerCharacter(x.nid).subscribe((n) => {
          this.viewModel = n;
        });
      });
  }

  get id(): string {
    return this.viewModel.id;
  }

  set id(value: string) {
    this.viewModel.id = value;
  }

  get name(): string {
    return this.viewModel.name;
  }

  set name(value: string) {
    this.viewModel.name = value;
  }

  get nonPlayerCharacterType(): NonPlayerCharacterType {
    return this.viewModel.nonPlayerCharacterType;
  }

  set nonPlayerCharacterType(value: NonPlayerCharacterType) {
    this.viewModel.nonPlayerCharacterType = value;
  }

  get nonPlayerCharacterTypes(): NonPlayerCharacterType[] {
    const results: NonPlayerCharacterType[] = ['major', 'minor', 'monster'];

    return results;
  }

  submit() {
    this.router.navigate(['/story', this.storyId, 'edit']);
  }
}
