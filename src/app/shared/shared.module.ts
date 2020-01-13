import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';
import { SimpleListModule } from './simple-list/simple-list.module';
import { CardModule } from './card/card.module';
import { SessionCardPipe } from './pipes/session-card.pipe';
import { StoryCardPipe } from './pipes/story-card.pipe';
import { EncounterCardPipe } from './pipes/encounter-card.pipe';
import { EncounterModule } from './encounter/encounter.module';
import { SessionModule } from './session/session.module';

@NgModule({
  declarations: [SessionCardPipe, StoryCardPipe, EncounterCardPipe],
  imports: [CommonModule, AutosizeModule, SimpleListModule, CardModule, EncounterModule, SessionModule],
  exports: [
    CommonModule,
    FormsModule,
    AutosizeModule,
    SimpleListModule,
    CardModule,
    SessionCardPipe,
    StoryCardPipe,
    EncounterCardPipe,
    EncounterModule,
    SessionModule
  ]
})
export class SharedModule {}
