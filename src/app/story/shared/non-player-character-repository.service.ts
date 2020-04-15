import { Injectable } from '@angular/core';
import { IGenericRepository, INonPlayerCharacter } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class NonPlayerCharacterRepositoryService
  implements IGenericRepository<INonPlayerCharacter> {
  data: INonPlayerCharacter[] = [];

  constructor() {}

  getAll(): INonPlayerCharacter[] {
    return this.data;
  }

  getById(id: any): INonPlayerCharacter {
    const results = this.getAll().filter((x) => x.id === id);

    return results[0];
  }

  insert(obj: INonPlayerCharacter): void {
    this.data.push(obj);
  }

  update(obj: INonPlayerCharacter): void {}

  delete(id: any): void {}

  save(): void {}
}
