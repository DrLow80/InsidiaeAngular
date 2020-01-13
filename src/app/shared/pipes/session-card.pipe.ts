import { Pipe, PipeTransform } from '@angular/core';
import { ICardModel } from '../card/card.component';
import { ISession } from '../interfaces';

@Pipe({
  name: 'sessionCard'
})
export class SessionCardPipe implements PipeTransform {
  transform(session: ISession): ICardModel {
    return { text: session.brief, header: session.date.toDateString() };
  }
}
