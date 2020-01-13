import { Pipe, PipeTransform } from '@angular/core';
import { ICardModel } from '../card/card.component';
import { IEncounter } from '../interfaces';

@Pipe({
  name: 'encounterCard'
})
export class EncounterCardPipe implements PipeTransform {
  transform(value: IEncounter): ICardModel {
    return {
      header: value.name,
      text: value.description
    };
  }
}
