import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CvcDiseaseTagModule } from '@app/components/diseases/cvc-disease-tag/cvc-disease-tag.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { CvcUpdateSourceSuggestionFormModule } from '@app/forms/update-source-suggestion/update-source-suggestion.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcSourceSuggestionsTableComponent } from './source-suggestions-table.component';

@NgModule({
  declarations: [CvcSourceSuggestionsTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
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
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcDiseaseTagModule,
    CvcFormErrorsAlertModule,
    CvcGeneTagModule,
    CvcPipesModule,
    CvcSourceTagModule,
    CvcUpdateSourceSuggestionFormModule,
    CvcUserTagModule,
    CvcVariantTagModule,
  ],
  exports: [CvcSourceSuggestionsTableComponent]
})
export class CvcSourceSuggestionsTableModule { }