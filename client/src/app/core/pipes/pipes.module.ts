import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AmpFormatPipe } from './amp-format-pipe'
import { CamelCaseToWordPipe } from './camel-case-to-words-pipe'
import { ColorNameForStatusPipe } from './color-name-for-status-pipe'
import { EnumToTitlePipe } from './enum-to-title-pipe'
import { EventVerbiagePipe } from './event-verbiage-pipe'
import { EvidenceEnumDisplayPipe } from './evidence-enum-display-type'
import { EvidenceEnumTooltipPipe } from './evidence-enum-tooltip.pipe'
import { EvidenceLevelDisplayPipe } from './evidence-level-display.pipe'
import { HighlightTypeaheadPipe } from './highlight-typeahead-pipe'
import { IconNameForEventActionPipe } from './icon-name-for-event-action-pipe'
import { IconNameForSubscribableEntity } from './icon-name-for-subscribable-entity'
import { IfEmptyPipe } from './if-empty-pipe'
import { PluckPipe } from './pluck-pipe'
import { PrepositionForSubjectPipe } from './preposition-for-subject-pipe'
import { ReferenceBuildDisplayPipe } from './reference-build-display.pipe'
import { SanitizeHtmlPipe } from './sanitize-html-pipe'
import { SourceSuggestionStatusEnumDisplay } from './source-suggestion-status-enum-display.pipe'
import { SourceTypeDisplayPipe } from './source-type-display.pipe'
import { TruncatePipe } from './truncate-pipe'
import { TypenameToRoutePipe } from './typename-to-route-pipe'
import { EntityColorPipe } from './entity-color.pipe'
import { DevRandomBoolPipe } from './dev-rnd-bool.pipe'
import { TherapyInteractionEnumDisplayPipe } from './therapy-interaction-enum-display.pipe'
import { CivicTimeagoFormatter } from './timeago-formatter'

@NgModule({
  declarations: [
    AmpFormatPipe,
    CamelCaseToWordPipe,
    ColorNameForStatusPipe,
    TherapyInteractionEnumDisplayPipe,
    EnumToTitlePipe,
    EventVerbiagePipe,
    EvidenceEnumDisplayPipe,
    EvidenceEnumTooltipPipe,
    EvidenceLevelDisplayPipe,
    HighlightTypeaheadPipe,
    IconNameForEventActionPipe,
    IconNameForSubscribableEntity,
    IfEmptyPipe,
    PluckPipe,
    PrepositionForSubjectPipe,
    ReferenceBuildDisplayPipe,
    SanitizeHtmlPipe,
    SourceSuggestionStatusEnumDisplay,
    SourceTypeDisplayPipe,
    TruncatePipe,
    TypenameToRoutePipe,
    EntityColorPipe,
    DevRandomBoolPipe,
    CivicTimeagoFormatter
  ],
  imports: [CommonModule],
  exports: [
    AmpFormatPipe,
    CamelCaseToWordPipe,
    ColorNameForStatusPipe,
    TherapyInteractionEnumDisplayPipe,
    EnumToTitlePipe,
    EventVerbiagePipe,
    EvidenceEnumDisplayPipe,
    EvidenceEnumTooltipPipe,
    EvidenceLevelDisplayPipe,
    HighlightTypeaheadPipe,
    IconNameForEventActionPipe,
    IconNameForSubscribableEntity,
    IfEmptyPipe,
    PluckPipe,
    PrepositionForSubjectPipe,
    ReferenceBuildDisplayPipe,
    SanitizeHtmlPipe,
    SourceSuggestionStatusEnumDisplay,
    SourceTypeDisplayPipe,
    TruncatePipe,
    TruncatePipe,
    TypenameToRoutePipe,
    EntityColorPipe,
    DevRandomBoolPipe,
    CivicTimeagoFormatter
  ],
  providers: [SourceTypeDisplayPipe],
})
export class CvcPipesModule {}
