import { Component, OnInit, Input } from '@angular/core';
import { INonPlayerCharacter } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-non-player-character',
  templateUrl: './non-player-character.component.html',
  styleUrls: ['./non-player-character.component.css']
})
export class NonPlayerCharacterComponent implements OnInit {
  @Input() nonPlayerCharacter: INonPlayerCharacter;

  constructor() {}

  ngOnInit() {}

  get name(): string {
    return this.nonPlayerCharacter.name;
  }

  set name(value: string) {
    this.nonPlayerCharacter.name = value;
  }

  get storyRole(): string {
    return this.nonPlayerCharacter.storyRole;
  }

  set storyRole(value: string) {
    this.nonPlayerCharacter.storyRole = value;
  }

  get description(): string {
    return this.nonPlayerCharacter.description;
  }

  set description(value: string) {
    this.nonPlayerCharacter.description = value;
  }

  get characterType(): string {
    return this.nonPlayerCharacter.characterType;
  }

  set characterType(value: string) {
    this.nonPlayerCharacter.characterType = value;
  }
}
