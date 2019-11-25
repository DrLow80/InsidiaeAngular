import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdventureRoutingModule } from './adventure-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdventureRoutingModule.components],
  imports: [CommonModule, AdventureRoutingModule, SharedModule]
})
export class AdventureModule {}
