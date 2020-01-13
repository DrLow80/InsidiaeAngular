import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cardModel: ICardModel = {
    header: '',
    text: ''
  };

  constructor() {}

  ngOnInit() {}

  get header(): string {
    return this.cardModel.header;
  }

  get hasHeader(): boolean {
    return this.header && this.header.length > 0;
  }

  get text(): string {
    return this.cardModel.text;
  }

  get hasText(): boolean {
    return this.text && this.text.length > 0;
  }
}

export interface ICardModel {
  header: string;
  text: string;
}
