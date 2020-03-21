import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdventureOutlineRoutingModule } from './adventure-outline-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MilieuEventComponent } from './milieu-event/milieu-event.component';
import { NonPlayerCharacterComponent } from './non-player-character/non-player-character.component';
import { EncounterComponent } from './encounter/encounter.component';
import { PrintComponent } from './print/print.component';

@NgModule({
  declarations: [AdventureOutlineRoutingModule.Components, HeaderComponent, MilieuEventComponent, NonPlayerCharacterComponent, EncounterComponent, PrintComponent],
  imports: [CommonModule, AdventureOutlineRoutingModule, FormsModule]
})
export class AdventureOutlineModule {}
