import {
  CvcCollectionTagComponent,
  CvcTagComponent,
  CvcTagListComponent,
} from '@app/tags'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAttributeTagModule } from '@app/forms/components/attribute-tag/attribute-tag.module'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { CvcTableCounts2Module } from '@app/forms/components/tables/table-counts/table-counts.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzDropdownModule } from 'ng-zorro-antd/dropdown'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzInputNumberModule } from 'ng-zorro-antd/input-number'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSpaceCompactComponent } from 'ng-zorro-antd/space'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { EnumFilterMenuComponent } from './enum-filter-menu/enum-filter-menu.component'
import { CvcEvidenceManagerComponent } from './evidence-manager.component'
import { TableFilterInputComponent } from './table-filter-input/table-filter-input.component'
import { TableScrollerDirective } from './table-scroller.directive'

/**
 * The evidence manager and its private table pieces, kept as an NgModule and
 * imported by the now-standalone evidence-select field.
 *
 * This is deliberately not a standalone conversion. The manager is a large
 * table that still renders the old cvc-entity-tag-list and
 * cvc-entity-collection-tag, which have no equivalent in app/tags yet, so
 * converting it buys nothing until those are replaced. What matters here is
 * that the field's formly registration has moved to the shared select
 * registry; this module now only declares components.
 */
@NgModule({
  declarations: [
    CvcEvidenceManagerComponent,
    TableScrollerDirective,
    TableFilterInputComponent,
    EnumFilterMenuComponent,
  ],
  imports: [
    CommonModule,
    CvcAttributeTagModule,
    CvcEmptyValueModule,
    CvcTagComponent,
    CvcTagListComponent,
    CvcCollectionTagComponent,
    CvcNoMoreRowsModule,
    CvcPipesModule,
    CvcTableCounts2Module,
    FormsModule,
    LetDirective,
    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzDropdownModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzPopoverModule,
    NzSpaceCompactComponent,
    NzTableModule,
    NzTagModule,
    NzTooltipModule,
    NzTypographyModule,
    PushPipe,
  ],
  exports: [CvcEvidenceManagerComponent],
})
export class CvcEvidenceManagerModule {}
