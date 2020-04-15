import { Injectable } from '@angular/core';
import { IGenericRepository } from './interfaces';
import { IPlotPoint } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PlotPointRepositoryService implements IGenericRepository<IPlotPoint> {
  data: IPlotPoint[] = [];

  constructor() {}
  getAll(): IPlotPoint[] {
    return this.data;
  }
  getById(id: any): IPlotPoint {
    const results = this.getAll().filter((x) => x.id === id);

    return results[0];
  }
  insert(obj: IPlotPoint): void {
    this.data.push(obj);
  }
  update(obj: IPlotPoint): void {}
  delete(id: any): void {}
  save(): void {}
}
