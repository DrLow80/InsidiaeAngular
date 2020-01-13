import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionHostRoutingModule } from './session-host-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SessionHostRoutingModule.components],
  imports: [CommonModule, SessionHostRoutingModule, NgbModule, SharedModule]
})
export class SessionHostModule {}
