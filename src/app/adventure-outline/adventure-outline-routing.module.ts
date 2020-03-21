import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdventureOutlineComponent } from './adventure-outline.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [{ path: '', component: AdventureOutlineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdventureOutlineRoutingModule {
  static Components = [AdventureOutlineComponent, HeaderComponent];
}
