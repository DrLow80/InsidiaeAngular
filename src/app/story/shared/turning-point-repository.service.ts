import { Injectable } from '@angular/core';
import { IGenericRepository, ITurningPoint } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class TurningPointRepositoryService
  implements IGenericRepository<ITurningPoint> {
  data: ITurningPoint[] = [];

  constructor() {}

  getAll(): ITurningPoint[] {
    return this.data;
  }

  getById(id: any): ITurningPoint {
    return this.getAll().filter((x) => x.id === id)[0];
  }

  insert(obj: ITurningPoint): void {
    this.data.push(obj);
  }

  update(obj: ITurningPoint): void {}

  delete(id: any): void {}

  save(): void {}
}
