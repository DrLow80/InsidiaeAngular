import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventureRoutingModule } from './adventure-routing.module';

@NgModule({
  declarations: [AdventureRoutingModule.Components],
  imports: [CommonModule, AdventureRoutingModule]
})
export class AdventureModule {}
