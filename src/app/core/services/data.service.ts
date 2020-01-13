import { Injectable } from '@angular/core';
import {
  IAdventure,
  IAdventureOverview,
  IMilieuEvent,
  INonPlayerCharacter,
  ISession,
  IEncounter
} from 'src/app/shared/interfaces';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getSessionViewModel(id: string): Observable<SessionViewModel> {
    return of(new SessionViewModel(this.getRandomSession()));
  }

  adventures: IAdventure[] = [];

  constructor() {
    this.adventures = [
      this.getRandomAdventure(),
      this.getRandomAdventure(),
      this.getRandomAdventure(),
      this.getRandomAdventure()
    ];
  }

  getAdventures(): Observable<IAdventure[]> {
    return of<IAdventure[]>(this.adventures);
  }

  getRandomAdventure(): IAdventure {
    return {
      id: 1,
      overview: this.getRandomAdventureOverview(),
      pastMilieuEvents: [this.getMilieuEvent(), this.getMilieuEvent(), this.getMilieuEvent()],
      presentMilieuEvents: [this.getMilieuEvent(), this.getMilieuEvent(), this.getMilieuEvent()],
      futureMilieuEvents: [this.getMilieuEvent(), this.getMilieuEvent(), this.getMilieuEvent()],
      majorNonPlayerCharacters: [this.getNonPlayerCharacter(), this.getNonPlayerCharacter(), this.getNonPlayerCharacter()],
      minorNonPlayerCharacters: [this.getNonPlayerCharacter(), this.getNonPlayerCharacter(), this.getNonPlayerCharacter()],
      monsterNonPlayerCharacters: [this.getNonPlayerCharacter(), this.getNonPlayerCharacter(), this.getNonPlayerCharacter()]
    };
  }

  getMilieuEvent(): IMilieuEvent {
    return {
      displayName: this.getRandomTitle(),
      id: 1
    };
  }

  getNonPlayerCharacter(): INonPlayerCharacter {
    return {
      displayName: this.getRandomTitle(),
      id: '1'
    };
  }

  getRandomAdventureOverview(): IAdventureOverview {
    return {
      title: this.getRandomTitle(),
      description: this.getRandomDescription(),
      date: '1/1/0001',
      gameMaster: this.getRandomTitle(),
      campaignDate: '1/1/0001',
      episodeNumber: '1',
      originationLocale: this.getRandomTitle(),
      adventureTheme: this.getRandomTitle()
    };
  }

  getRandomDescription(): string {
    var results = [];

    for (var i = 1; i <= 30; i++) {
      results.push(this.getRandomLipsum());
    }

    return results.join(' ');
  }

  getRandomLipsum(): string {
    var index = this.getRandomNumber(this.lipsum.length);

    var item = this.lipsum[index];

    return item;
  }

  getRandomTitle(): string {
    var first = this.getTitleCap(this.getRandomLipsum());
    var second = this.getTitleCap(this.getRandomLipsum());
    var third = this.getTitleCap(this.getRandomLipsum());

    return [first, second, third].join(' ');
  }

  getTitleCap(value: string): string {
    return value.charAt(0).toUpperCase() + value.substr(1);
  }

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getRandomSession(): ISession {
    return {
      brief: this.getRandomLipsum(),
      date: new Date(),
      encounters: this.getRandomList(1, 5, this.getRandomEncounter),
      name: this.getRandomLipsum(),
      number: '1'
    };
  }

  getRandomEncounter = (): IEncounter => {
    return {
      name: this.getRandomLipsum(),
      description: this.getRandomLipsum()
    };
  };

  get lipsum(): string[] {
    return [
      'nam',
      'accumsan',
      'vulputate',
      'ante',
      'id',
      'suscipit',
      'nam',
      'mollis',
      'scelerisque',
      'risus',
      'at',
      'euismod',
      'aliquam',
      'iaculis',
      'suscipit',
      'elit',
      'vitae',
      'convallis',
      'curabitur',
      'mollis',
      'mollis',
      'nibh',
      'in',
      'vestibulum',
      'nulla',
      'ut',
      'felis',
      'quis',
      'nisl',
      'laoreet',
      'auctor',
      'ut',
      'sit',
      'amet',
      'libero',
      'etiam',
      'vitae',
      'augue',
      'nunc',
      'in',
      'euismod',
      'lacus',
      'vivamus',
      'vel',
      'nunc',
      'nec',
      'massa',
      'lobortis',
      'adipiscing',
      'in',
      'vehicula',
      'justo',
      'non',
      'tincidunt',
      'aliquet',
      'eros',
      'lacus',
      'scelerisque',
      'odio',
      'eget',
      'luctus',
      'urna',
      'enim',
      'nec',
      'erat',
      'nullam',
      'condimentum',
      'metus',
      'nec',
      'justo',
      'mattis',
      'nec',
      'convallis',
      'dolor',
      'vulputate',
      'in',
      'hac',
      'habitasse',
      'platea',
      'dictumst',
      'fusce',
      'lobortis',
      'orci',
      'vel',
      'suscipit',
      'viverra',
      'lectus',
      'justo',
      'pretium',
      'diam',
      'sed',
      'lobortis',
      'nunc',
      'leo',
      'nec',
      'mauris',
      'integer',
      'euismod',
      'dui',
      'non',
      'imperdiet',
      'viverra',
      'lectus',
      'ipsum',
      'ullamcorper',
      'mi',
      'in',
      'lacinia',
      'urna',
      'nulla',
      'id',
      'nibh',
      'praesent',
      'eleifend',
      'vehicula',
      'lectus',
      'a',
      'ullamcorper',
      'nisi',
      'pellentesque',
      'eget',
      'fusce',
      'posuere',
      'feugiat',
      'urna',
      'vestibulum',
      'eu',
      'purus',
      'metus',
      'phasellus',
      'mi',
      'arcu',
      'pretium',
      'sed',
      'tristique',
      'pellentesque',
      'laoreet',
      'sit',
      'amet',
      'justo',
      'fusce',
      'rutrum',
      'consectetur',
      'mi',
      'et',
      'egestas',
      'in',
      'eleifend',
      'lectus',
      'eget',
      'nisl',
      'facilisis',
      'feugiat',
      'curabitur',
      'ac',
      'tortor',
      'sit',
      'amet',
      'massa',
      'egestas',
      'condimentum',
      'nam',
      'tellus',
      'purus',
      'condimentum',
      'a',
      'adipiscing',
      'at',
      'commodo',
      'vel',
      'tellus',
      'nullam',
      'massa',
      'lectus',
      'mattis',
      'ut',
      'tincidunt',
      'vel',
      'rhoncus',
      'sed',
      'tortor',
      'integer',
      'at',
      'turpis',
      'sapien',
      'proin',
      'vehicula',
      'bibendum',
      'dui',
      'id',
      'malesuada',
      'lacus',
      'posuere',
      'sit',
      'amet',
      'nullam',
      'ornare',
      'augue',
      'laoreet',
      'sodales',
      'pellentesque',
      'arcu',
      'mi',
      'hendrerit',
      'orci',
      'vitae',
      'tincidunt',
      'mauris',
      'massa',
      'at',
      'nunc',
      'lorem',
      'ipsum',
      'dolor',
      'sit',
      'amet',
      'consectetur',
      'adipiscing',
      'elit',
      'vestibulum',
      'fringilla',
      'vehicula',
      'nulla',
      'eget',
      'tincidunt',
      'integer',
      'aliquet',
      'eros',
      'nec',
      'est',
      'tempor',
      'sollicitudin',
      'class',
      'aptent',
      'taciti',
      'sociosqu',
      'ad',
      'litora',
      'torquent',
      'per',
      'conubia',
      'nostra',
      'per',
      'inceptos',
      'himenaeos'
    ];
  }

  getAdventure(id: number): Observable<IAdventure> {
    return of<IAdventure>(this.getRandomAdventure());
  }

  getRandomList(min: number, max: number, delegate: any) {
    const amount = this.getRandomNumber(max);

    const results = [];

    for (let i = 0; i < max; i++) {
      results.push(delegate());
    }

    return results;
  }
}

export class SessionViewModel {
  constructor(public session: ISession) {}
}
