import { Component, input, model } from '@angular/core'
import { VariantInfo } from './variant-info.types'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcMyVariantInfoModule } from '../my-variant-info/my-variant-info.module'
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module'
import { CvcOpenCravatAnnotationsModule } from '../open-cravat-annotations/open-cravat-annotations.module'

@Component({
  selector: 'cvc-variant-info',
  standalone: true,
  imports: [
    NzCardModule,
    NzTabsModule,
    NzDescriptionsModule,
    NzTagModule,
    CvcMyVariantInfoModule,
    CvcEmptyRevisableModule,
    CvcOpenCravatAnnotationsModule,
  ],
  templateUrl: './variant-info.component.html',
  styleUrl: './variant-info.component.less',
})
export class CvcVariantInfo {
  variantInfo = input.required<VariantInfo>()
  selectedTab = model<number>(0)
}
