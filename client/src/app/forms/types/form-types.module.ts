import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcSelectFieldsRegistryModule } from '@app/forms/select/select-fields.registry.module'
import { CvcQueryFilterModule } from '@app/forms/types/query-builder/query-filter/query-filter.module'
import { CvcQuerySubfiltersModule } from '@app/forms/types/query-builder/query-subfilters/query-subfilters.module'
import { CvcSearchButtonTypeModule } from '@app/forms/types/search-button/search-button.module'
import { CvcBaseFieldsRegistryModule } from './base-fields.registry.module'
import { CvcCancelButtonModule } from './cancel-button/cancel-button.module'
import { CvcOrgSubmitButtonTypeModule } from './org-submit-button/org-submit-button.type.module'
import { CvcStructFilterModule } from './query-builder/struct-filter/struct-filter.module'

@NgModule({
  imports: [
    CommonModule,
    CvcBaseFieldsRegistryModule,
    CvcSelectFieldsRegistryModule,
    CvcCancelButtonModule,
    CvcOrgSubmitButtonTypeModule,
    CvcSearchButtonTypeModule,
    CvcQuerySubfiltersModule,
    CvcQueryFilterModule,
    CvcStructFilterModule,
  ],
})
export class CvcFormTypesModule {}
