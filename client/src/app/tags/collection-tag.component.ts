import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { EntityTagRef, tagSpecFor } from './entity-tag-specs'
import { CvcTagListComponent } from './tag-list.component'

/**
 * A single "+N" tag standing in for a list too long to render, expanding to
 * the full list on hover.
 *
 * Icons and colours come from each ref's tag spec rather than the
 * typenameToIcon/entityColor pipes the old component used, so the collection
 * and the tags it summarises cannot disagree.
 */
@Component({
  selector: 'cvc-collection-tag',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NzTagModule,
    NzIconModule,
    NzPopoverModule,
    NzTypographyModule,
    CvcTagListComponent,
  ],
  templateUrl: './collection-tag.component.html',
  styleUrl: './collection-tag.component.less',
})
export class CvcCollectionTagComponent {
  readonly refs = input.required<EntityTagRef[]>()
  /** above this many entities, show a count and one icon instead of all icons */
  readonly maxIcons = input<number>(5)
  readonly emphasize = input<string | undefined>(undefined)
  readonly popover = input<boolean | undefined>(undefined)

  protected readonly icons = computed(() =>
    this.refs().map((ref) => tagSpecFor(ref.__typename))
  )

  protected readonly showAllIcons = computed(
    () => this.refs().length <= this.maxIcons()
  )
}
