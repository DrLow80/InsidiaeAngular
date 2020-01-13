import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterComponent } from '../encounter/encounter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EncounterComponent],
  imports: [CommonModule, FormsModule],
  exports: [EncounterComponent]
})
export class EncounterModule {}
