import { CommonModule, JsonPipe } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { TypeGuard } from '@app/core/pipes/type-guard.pipe'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import {
  LinkoutData,
  ModeratedFieldDiff,
  ObjectFieldDiff,
  Revision,
  ScalarFieldDiff,
} from '@app/generated/civic.apollo'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSwitchModule } from 'ng-zorro-antd/switch'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

type DiffType = 'ObjectFieldDiff' | 'ScalarFieldDiff'

type ColumnDefinition = {
  xxl: number
  xl: number
  lg: number
  md: number
  sm: number
  xs: number
}

@Component({
  selector: 'cvc-activity-revision',
  imports: [
    CommonModule,
    FormsModule,
    NzTypographyModule,
    NzSwitchModule,
    NzGridModule,
    NzDescriptionsModule,
    NzTagModule,
    CvcEmptyValueModule,
    CvcPipesModule,
  ],
  templateUrl: './activity-revision.component.html',
  styleUrl: './activity-revision.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityRevision {
  revision = input.required<Revision>({
    alias: 'cvcActivityRevision',
  })
  title = computed(() => {
    const rev = this.revision()
    return `${rev.linkoutData.name} ${rev.name} `
  })
  // NOTE: getter required for type narrowing to work with @let/@if/@switch
  // see https://medium.com/javascript-everyday/elegant-type-narrowing-with-let-syntax-in-angular-a6cf2cd18964
  get diffValue(): ObjectFieldDiff | ScalarFieldDiff {
    const diff = this.revision().linkoutData.diffValue
    const diffType = diff.__typename
    if (diffType === 'ObjectFieldDiff') {
      return diff as ObjectFieldDiff
    } else if (diffType === 'ScalarFieldDiff') {
      return diff as ScalarFieldDiff
    } else {
      throw new Error(`Unsupported diff type: ${diffType}`)
    }
  }
  showDiffs = signal(false)
}
