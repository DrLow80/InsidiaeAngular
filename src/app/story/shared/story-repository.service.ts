import { Injectable } from '@angular/core';
import { IStory, IGenericRepository } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class StoryRepositoryService implements IGenericRepository<IStory> {
  constructor() {}

  stories: IStory[] = [];

  getAll(): IStory[] {
    return this.stories;
  }

  getById(id: any): IStory {
    if (!this.stories.length) {
      return null;
    }

    const result = this.getAll().filter((x) => x.id === id);

    if (!result.length) {
      return null;
    }

    return result[0];
  }

  insert(obj: IStory): void {
    this.stories.push(obj);
  }

  update(obj: IStory): void {}

  delete(id: any): void {
    const index = this.stories.findIndex((x) => x.id === id);

    this.stories.slice(index, 1);
  }

  save(): void {}
}
