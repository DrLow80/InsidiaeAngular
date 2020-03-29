import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IEditAdventureVeiwModel, DEFAULTEDITADVENTUREVIEWMODEL, IEditMilieuEventViewModel, DEFAULTEDITMILIEUEVENTVIEWMODEL } from 'src/app/shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EditAdventureService {
  constructor() {}

  load(id: number): Observable<IEditAdventureVeiwModel> {
    return of(DEFAULTEDITADVENTUREVIEWMODEL);
  }

  save(viewModel: IEditAdventureVeiwModel): Observable<string> {
    return of('');
  }

  loadMilieuEvent(id: number): Observable<IEditMilieuEventViewModel> {
    return of(DEFAULTEDITMILIEUEVENTVIEWMODEL);
  }
}
