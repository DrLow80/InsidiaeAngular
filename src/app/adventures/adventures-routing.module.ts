import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdventuresComponent } from './adventures.component';

const routes: Routes = [{ path: '', component: AdventuresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdventuresRoutingModule {
  static Components = [AdventuresComponent];
}
