import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcEntityMetaTagComponent } from '@app/components/revisions/entity-meta-tag/entity-meta-tag.component'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import {
  ObjectFieldDiff,
  RevisionActivityDetailFragment,
  ScalarFieldDiff,
} from '@app/generated/civic.apollo'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSwitchModule } from 'ng-zorro-antd/switch'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-activity-revision',
  imports: [
    CommonModule,
    FormsModule,
    NzTypographyModule,
    NzSwitchModule,
    NzGridModule,
    NzDescriptionsModule,
    CvcEmptyValueModule,
    CvcEntityMetaTagComponent,
    CvcPipesModule,
  ],
  templateUrl: './activity-revision.component.html',
  styleUrl: './activity-revision.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityRevision {
  revision = input.required<RevisionActivityDetailFragment>({
    alias: 'cvcActivityRevision',
  })
  title = computed(() => {
    const rev = this.revision()
    return `${rev.linkoutData.name} ${rev.name} `
  })
  // Diff columns (current/added/removed/kept/suggested objects, or left/right
  // scalar HTML) arrive precomputed from the server (LinkoutData.from_revision)
  // — no diffing happens client-side.
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
