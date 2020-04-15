import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./home/home.module').then((x) => x.HomeModule) },
  { path: 'adventures', loadChildren: () => import('./adventures/adventures.module').then((x) => x.AdventuresModule) },
  { path: 'adventures/:id', loadChildren: () => import('./adventure/adventure.module').then((x) => x.AdventureModule) },
  { path: 'story', loadChildren: () => import('./story/story.module').then((x) => x.StoryModule) },
  { path: 'story/:id', loadChildren: () => import('./story/story.module').then((x) => x.StoryModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
