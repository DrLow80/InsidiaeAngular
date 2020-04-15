import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryComponent } from './story.component';
import { StoryPrintComponent } from './story-print/story-print.component';
import { StoryEditComponent } from './story-edit/story-edit.component';
import { StoryHeaderComponent } from './story-header/story-header.component';
import { NonPlayerCharacterComponent } from './non-player-character/non-player-character.component';
import { MilieuEventComponent } from './milieu-event/milieu-event.component';
import { PlotPointComponent } from './plot-point/plot-point.component';
import { TurningPointComponent } from './turning-point/turning-point.component';

const routes: Routes = [
  { path: '', component: StoryListComponent },
  {
    path: ':id',
    component: StoryComponent,
    children: [
      { path: 'edit', component: StoryEditComponent },
      { path: 'header', component: StoryHeaderComponent },
      { path: 'print', component: StoryPrintComponent },
      { path: 'milieu-event/:mid', component: MilieuEventComponent },
      {
        path: 'non-player-character/:nid',
        component: NonPlayerCharacterComponent,
      },
      {
        path: 'plot-point/:pid',
        component: PlotPointComponent,
      },
      {
        path: 'plot-point/:pid/turning-point/:tid',
        component: TurningPointComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoryRoutingModule {
  static Components = [
    StoryComponent,
    StoryListComponent,
    StoryPrintComponent,
    StoryEditComponent,
    StoryHeaderComponent,
    MilieuEventComponent,
    NonPlayerCharacterComponent,
    PlotPointComponent,
    TurningPointComponent,
  ];
}
