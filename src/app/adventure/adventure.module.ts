import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventureRoutingModule } from './adventure-routing.module';
import { FormsModule } from '@angular/forms';
import { EditMilieuEventComponent } from './edit-milieu-event/edit-milieu-event.component';

@NgModule({
  declarations: [AdventureRoutingModule.Components],
  imports: [CommonModule, AdventureRoutingModule, FormsModule]
})
export class AdventureModule {}
