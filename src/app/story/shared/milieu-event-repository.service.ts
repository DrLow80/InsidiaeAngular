import { Injectable } from '@angular/core';
import { IGenericRepository, IMilieuEvent } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class MilieuEventRepositoryService
  implements IGenericRepository<IMilieuEvent> {
  data: IMilieuEvent[] = [];

  constructor() {}

  getAll(): IMilieuEvent[] {
    return this.data;
  }

  getById(id: any): IMilieuEvent {
    const result = this.getAll().filter((x) => x.id === id);

    if (!result.length) {
      return null;
    }

    return result[0];
  }

  insert(obj: IMilieuEvent): void {
    this.data.push(obj);
  }

  update(obj: IMilieuEvent): void {}

  delete(id: any): void {}

  save(): void {}
}
