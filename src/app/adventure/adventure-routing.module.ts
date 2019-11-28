import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdventureComponent } from './adventure.component';
import { AdventureDetailsComponent } from './adventure-details/adventure-details.component';
import { AdventureOverviewComponent } from './adventure-overview/adventure-overview.component';
import { MilieuEventComponent } from './milieu-event/milieu-event.component';

const routes: Routes = [
  {
    path: '',
    component: AdventureComponent,
    children: [
      { path: 'details', component: AdventureDetailsComponent },
      {
        path: 'overview',
        component: AdventureOverviewComponent
      },
      { path: 'milieuEvent/:id', component: MilieuEventComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdventureRoutingModule {
  static components = [AdventureComponent, AdventureDetailsComponent, AdventureOverviewComponent, MilieuEventComponent];
}
