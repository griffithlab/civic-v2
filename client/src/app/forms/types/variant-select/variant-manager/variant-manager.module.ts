import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAttributeTagModule } from '@app/forms/components/attribute-tag/attribute-tag.module'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { CvcEntityCollectionTagModule } from '@app/forms/components/entity-collection-tag/entity-collection-tag.module'
import { CvcEntityTagModule } from '@app/forms/components/entity-tag/entity-tag.module'
import { CvcEntityTagListModule } from '@app/forms/components/entity-tag-list/entity-tag-list.module'
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
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { EnumFilterMenuComponent } from './enum-filter-menu/enum-filter-menu.component'
import { TableFilterInputComponent } from './table-filter-input/table-filter-input.component'
import { TableScrollerDirective } from './table-scroller.directive'
import { CvcVariantManagerComponent } from './variant-manager.component'

/**
 * The variant manager and its private table pieces, kept as an NgModule and
 * imported by the now-standalone variant-select field.
 *
 * Deliberately not a standalone conversion, for the same reason as the
 * evidence manager: it still renders the old cvc-entity-tag-list and
 * cvc-entity-collection-tag, which have no equivalent in app/tags yet. This
 * module only declares components — the field's formly registration has moved
 * to the shared select registry.
 */
@NgModule({
  declarations: [
    CvcVariantManagerComponent,
    TableScrollerDirective,
    TableFilterInputComponent,
    EnumFilterMenuComponent,
  ],
  imports: [
    CommonModule,
    CvcAttributeTagModule,
    CvcEmptyValueModule,
    CvcEntityCollectionTagModule,
    CvcEntityTagListModule,
    CvcEntityTagModule,
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
    NzSpaceModule,
    NzTableModule,
    NzTagModule,
    NzTooltipModule,
    NzTypographyModule,
    PushPipe,
  ],
  exports: [CvcVariantManagerComponent],
})
export class CvcVariantManagerModule {}
