import { Component, input, model } from '@angular/core'
import { VariantInfo } from './variant-info.types'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcMyVariantInfoModule } from '../my-variant-info/my-variant-info.module'
import { CvcEmptyRevisableModule } from '@app/components/shared/empty-revisable/empty-revisable.module'
import { CvcOpenCravatAnnotationsModule } from '../open-cravat-annotations/open-cravat-annotations.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CommonModule } from '@angular/common'
@Component({
  selector: 'cvc-variant-info',
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzTabsModule,
    NzDescriptionsModule,
    NzTagModule,
    NzIconModule,
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
