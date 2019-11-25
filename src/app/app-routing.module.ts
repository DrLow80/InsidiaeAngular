import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/adventures' },
  { path: 'adventures', loadChildren: () => import('./adventures/adventures.module').then(x => x.AdventuresModule) },
  {
    path: 'adventure/:id',
    data: { preload: true },
    loadChildren: () => import('./adventure/adventure.module').then(x => x.AdventureModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '/adventures' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
