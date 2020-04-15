import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoryRoutingModule } from './story-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StoryRoutingModule.Components],
  imports: [CommonModule, StoryRoutingModule, FormsModule],
})
export class StoryModule {}
