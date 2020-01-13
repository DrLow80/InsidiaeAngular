import { Pipe, PipeTransform } from '@angular/core';
import { IStory } from '../interfaces';
import { ICardModel } from '../card/card.component';

@Pipe({
  name: 'storyCard'
})
export class StoryCardPipe implements PipeTransform {
  transform(value: IStory): ICardModel {
    return {
      header: value.title,
      text: value.brief
    };
  }
}
