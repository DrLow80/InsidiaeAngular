import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(x => x.HomeModule) },
  { path: 'session/:id', loadChildren: () => import('./session-host/session-host.module').then(x => x.SessionHostModule) },
  // { path: 'adventures', loadChildren: () => import('./adventures/adventures.module').then(x => x.AdventuresModule) },
  // { path: 'adventure/:id', loadChildren: () => import('./adventure/adventure.module').then(x => x.AdventureModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
