import { Component, OnInit, Input } from '@angular/core';
import { IOutline } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() outline: IOutline;

  constructor() {}

  ngOnInit() {}

  get adventureTitle(): string {
    return this.outline.adventureTitle;
  }

  set adventureTitle(value: string) {
    this.outline.adventureTitle = value;
  }

  get realWorldDate(): string {
    return this.outline.realWorldDate;
  }

  set realWorldDate(value: string) {
    this.outline.realWorldDate = value;
  }

  get gameMaster(): string {
    return this.outline.gameMaster;
  }

  set gameMaster(value: string) {
    this.outline.gameMaster = value;
  }

  get campaignDate(): string {
    return this.outline.campaignDate;
  }

  set campaignDate(value: string) {
    this.outline.campaignDate = value;
  }

  get campaignEpisodeNumber(): string {
    return this.outline.campaignEpisodeNumber;
  }

  set campaignEpisodeNumber(value: string) {
    this.outline.campaignEpisodeNumber = value;
  }

  get originationLocale(): string {
    return this.outline.originationLocale;
  }

  set originationLocale(value: string) {
    this.outline.originationLocale = value;
  }

  get adventureTheme(): string {
    return this.outline.adventureTheme;
  }

  set adventureTheme(value: string) {
    this.outline.adventureTheme = value;
  }
}
