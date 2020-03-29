import { Component, OnInit } from '@angular/core';
import { IEditAdventureVeiwModel, DEFAULTEDITADVENTUREVIEWMODEL } from 'src/app/shared/interfaces';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EditAdventureService } from '../edit-adventure.service';

@Component({
  selector: 'app-edit-adventure-header',
  templateUrl: './edit-adventure-header.component.html',
  styleUrls: ['./edit-adventure-header.component.css']
})
export class EditAdventureHeaderComponent implements OnInit {
  viewModel: IEditAdventureVeiwModel = DEFAULTEDITADVENTUREVIEWMODEL;

  constructor(private route: ActivatedRoute, private service: EditAdventureService, private router: Router) {}

  ngOnInit() {
    this.route.parent.params.subscribe((params: Params) => {
      const id = +params.id;

      this.service.load(id).subscribe(x => {
        this.viewModel = x;
      });
    });
  }

  get id(): number {
    return this.viewModel.id;
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

  set adventureDate(value) {
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
    this.service.save(this.viewModel).subscribe(x => {
      this.router.navigate(['/adventures', this.id, 'edit']);
    });
  }
}
