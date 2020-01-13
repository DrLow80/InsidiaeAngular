import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from '../session/session.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SessionComponent],
  imports: [CommonModule, FormsModule],
  exports: [SessionComponent]
})
export class SessionModule {}
