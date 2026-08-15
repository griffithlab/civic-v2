import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CvcTagComponent } from './entity-tag.component'
import { EntityTagRef } from './entity-tag-specs'

/**
 * Renders a row of entity tags that wraps cleanly.
 *
 * The component it replaces took a `TemplateRef` and a config object, and every
 * call site passed the same template: one that rendered an entity tag. That
 * indirection existed because the old tag needed a whole `LinkableEntity` and
 * each caller had to supply it. CvcTag renders from a `{ __typename, id }` ref
 * alone, so the tags can just be rendered here.
 */
@Component({
  selector: 'cvc-tag-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CvcTagComponent],
  template: `
    @for (ref of refs(); track ref.__typename + ref.id) {
      <span class="tag-container">
        <cvc-tag
          [ref]="ref"
          [emphasize]="emphasize()"
          [popover]="popover()"
          [popoverPlacement]="popoverPlacement()"
          [showIcon]="showIcon()"
          [fullWidth]="fullWidth()"
          [truncate]="truncate()" />
      </span>
    }
  `,
  styleUrl: './tag-list.component.less',
})
export class CvcTagListComponent {
  readonly refs = input.required<EntityTagRef[]>()
  readonly emphasize = input<string | undefined>(undefined)
  readonly popover = input<boolean | undefined>(undefined)
  readonly popoverPlacement = input<string>('top')
  readonly showIcon = input<boolean>(true)
  readonly fullWidth = input<boolean>(false)
  readonly truncate = input<string | undefined>(undefined)
}
