import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventuresRoutingModule } from './adventures-routing.module';

@NgModule({
  declarations: [AdventuresRoutingModule.Components],
  imports: [CommonModule, AdventuresRoutingModule]
})
export class AdventuresModule {}
