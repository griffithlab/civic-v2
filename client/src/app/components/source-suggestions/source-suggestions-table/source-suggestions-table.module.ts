import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { CvcCommentBodyModule } from '@app/components/comments/comment-body/comment-body.module'
import { CvcDiseaseTagModule } from '@app/components/diseases/disease-tag/disease-tag.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module'
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module'
import { CvcTableCountsModule } from '@app/components/shared/table-counts/table-counts.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module'
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module'
import { CvcTableScrollModule } from '@app/directives/table-scroll/table-scroll.module'
import { CvcFormErrorsAlertModule } from '@app/forms/components/form-errors-alert/form-errors-alert.module'
import { CvcUpdateSourceSuggestionFormModule } from '@app/forms/components/update-source-suggestion/update-source-suggestion.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcSourceSuggestionsTableComponent } from './source-suggestions-table.component'

@NgModule({
  declarations: [CvcSourceSuggestionsTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    LetDirective,
    PushPipe,
    RouterModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzPopoverModule,
    NzSelectModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    CvcTableScrollModule,
    CvcTableCountsModule,
    CvcNoMoreRowsModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcDiseaseTagModule,
    CvcFormErrorsAlertModule,
    CvcPipesModule,
    CvcSourceTagModule,
    CvcUpdateSourceSuggestionFormModule,
    CvcUserTagModule,
    CvcMolecularProfileTagModule,
    CvcCommentBodyModule,
  ],
  exports: [CvcSourceSuggestionsTableComponent],
})
export class CvcSourceSuggestionsTableModule {}
