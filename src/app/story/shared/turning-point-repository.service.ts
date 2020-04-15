import { Injectable } from '@angular/core';
import { IGenericRepository } from './interfaces';
import { ITurningPoint } from 'src/app/shared/interfaces';

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
    return this.getAll().find((x) => x.id === id)[0];
  }
  insert(obj: ITurningPoint): void {
    this.data.push(obj);
  }
  update(obj: ITurningPoint): void {}
  delete(id: any): void {}
  save(): void {}
}
