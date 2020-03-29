import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdventureComponent } from './adventure.component';
import { EditAdventureComponent } from './edit-adventure/edit-adventure.component';
import { EditAdventureHeaderComponent } from './edit-adventure-header/edit-adventure-header.component';
import { EditMilieuEventComponent } from './edit-milieu-event/edit-milieu-event.component';

const routes: Routes = [
  {
    path: '',
    component: AdventureComponent,
    children: [
      { path: 'edit', component: EditAdventureComponent },
      { path: 'header', component: EditAdventureHeaderComponent },
      { path: 'milieuEvent/:id', component: EditMilieuEventComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdventureRoutingModule {
  static Components = [AdventureComponent, EditAdventureComponent, EditAdventureHeaderComponent, EditMilieuEventComponent];
}
