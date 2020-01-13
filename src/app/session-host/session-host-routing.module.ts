import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionHostComponent } from './session-host.component';

const routes: Routes = [{ path: '', component: SessionHostComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionHostRoutingModule {
  static components = [SessionHostComponent];
}
