import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdventureComponent } from './adventure.component';
import { EditAdventureComponent } from './edit-adventure/edit-adventure.component';

const routes: Routes = [
  {
    path: '',
    component: AdventureComponent,
    children: [{ path: 'edit', component: EditAdventureComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdventureRoutingModule {
  static Components = [AdventureComponent, EditAdventureComponent];
}
