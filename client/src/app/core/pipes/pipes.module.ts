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
import { EnumToTitlePipe } from './enum-to-title-pipe';
import { TypenameToRoutePipe } from './typename-to-route-pipe';
import { ColorNameForStatusPipe } from './color-name-for-status-pipe';
import { HighlightTypeaheadPipe } from './highlight-typeahead-pipe';
import { SanitizeHtmlPipe } from './sanitize-html-pipe';
import { PluckPipe } from './pluck-pipe';
import { TruncatePipe } from './truncate-pipe';
import { EvidenceLevelDisplayPipe } from './evidence-level-display.pipe';
import { CamelCaseToWordPipe } from './camel-case-to-words-pipe';
import { DrugInteractionEnumDisplayPipe } from './drug-interaction-enum-display.pipe';

@NgModule({
  declarations: [
    AmpFormatPipe,
    EventVerbiagePipe,
    EvidenceEnumDisplayPipe,
    EvidenceLevelDisplayPipe,
    IfEmptyPipe,
    DrugInteractionEnumDisplayPipe,
    SourceTypeDisplayPipe,
    ReferenceBuildDisplayPipe,
    PrepositionForSubjectPipe,
    IconNameForEventActionPipe,
    IconNameForSubscribableEntity,
    EnumToTitlePipe,
    TypenameToRoutePipe,
    ColorNameForStatusPipe,
    HighlightTypeaheadPipe,
    SanitizeHtmlPipe,
    PluckPipe,
    TruncatePipe,
    CamelCaseToWordPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AmpFormatPipe,
    EventVerbiagePipe,
    EvidenceEnumDisplayPipe,
    EvidenceLevelDisplayPipe,
    DrugInteractionEnumDisplayPipe,
    IfEmptyPipe,
    SourceTypeDisplayPipe,
    ReferenceBuildDisplayPipe,
    PrepositionForSubjectPipe,
    IconNameForEventActionPipe,
    IconNameForSubscribableEntity,
    EnumToTitlePipe,
    TypenameToRoutePipe,
    ColorNameForStatusPipe,
    HighlightTypeaheadPipe,
    SanitizeHtmlPipe,
    PluckPipe,
    TruncatePipe,
    CamelCaseToWordPipe
  ],
  providers: [
    SourceTypeDisplayPipe
  ]
})
export class CvcPipesModule { }
