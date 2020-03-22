import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEditAdventureVeiwModel, DEFAULTEDITADVENTUREVIEWMODEL } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EditAdventureService {
  constructor() {}

  load(id: number): Observable<IEditAdventureVeiwModel> {
    return of(DEFAULTEDITADVENTUREVIEWMODEL);
  }
}
