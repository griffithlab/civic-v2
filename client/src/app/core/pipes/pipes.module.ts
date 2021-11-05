import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmpFormatPipe } from './amp-format-pipe';
import { EventVerbiagePipe } from './event-verbiage-pipe';
import { EvidenceEnumDisplayPipe } from './evidence-enum-display-type';
import { IfEmptyPipe } from './if-empty-pipe';
import { SourceTypeDisplayPipe } from './source-type-display.pipe';
import { ReferenceBuildDisplayPipe } from './reference-build-display.pipe';
import { PrepositionForSubjectPipe } from './preposition-for-subject-pipe';
import { IconNameForEventActionPipe } from './icon-name-for-event-action-pipe';
import { IconNameForSubscribableEntity } from './icon-name-for-subscribable-entity';

@NgModule({
  declarations: [
    AmpFormatPipe,
    EventVerbiagePipe,
    EvidenceEnumDisplayPipe,
    IfEmptyPipe,
    SourceTypeDisplayPipe,
    ReferenceBuildDisplayPipe,
    PrepositionForSubjectPipe,
    IconNameForEventActionPipe,
    IconNameForSubscribableEntity
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AmpFormatPipe,
    EventVerbiagePipe,
    EvidenceEnumDisplayPipe,
    IfEmptyPipe,
    SourceTypeDisplayPipe,
    ReferenceBuildDisplayPipe,
    PrepositionForSubjectPipe,
    IconNameForEventActionPipe,
    IconNameForSubscribableEntity
  ]
})
export class CvcPipesModule { }
