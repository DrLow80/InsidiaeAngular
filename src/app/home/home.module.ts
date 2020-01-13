import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeRoutingModule.components],
  imports: [CommonModule, HomeRoutingModule, NgbModule, SharedModule]
})
export class HomeModule {}
