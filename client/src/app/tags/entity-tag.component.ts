import { NgTemplateOutlet } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  computed,
  effect,
  inject,
  input,
  isDevMode,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { RouterLink } from '@angular/router'
import { TypedDocumentNode } from '@apollo/client'
import {
  PolymorpheusComponent,
  PolymorpheusOutlet,
} from '@taiga-ui/polymorpheus'
import { Apollo } from 'apollo-angular'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverDirective, NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { switchMap } from 'rxjs/operators'
import {
  EntityTagRef,
  tagSpecFor,
} from './entity-tag-specs'
import {
  CvcTagContext,
  CvcTagMode,
  LinkableEntity,
  labelSegments,
} from './entity-tag.types'
import { TAG_POPOVERS, hasTagPopover } from './tag-popovers'

/**
 * Generic entity tag, rendered from a `{ __typename, id }` ref alone.
 *
 * Display data comes reactively from `Apollo.watchFragment` over the
 * typename's codegen'd Linkable* fragment (see entity-tag-specs.ts) — any
 * query or cache write that satisfies the fragment updates the tag; there is
 * no one-shot read and no runtime-constructed GraphQL. Popovers lazy-load
 * their component chunk on first open via TAG_POPOVERS.
 */
@Component({
  selector: 'cvc-tag',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgTemplateOutlet,
    RouterLink,
    NzTagModule,
    NzIconModule,
    NzPopoverModule,
    NzTooltipModule,
    NzSpinModule,
    PolymorpheusOutlet,
  ],
  templateUrl: './entity-tag.component.html',
  styleUrl: './entity-tag.component.less',
  host: {
    '[class.default]': `context() === 'default'`,
    '[class.select-item]': `context() === 'select-item'`,
    '[class.multi-select-item]': `context() === 'multi-select-item'`,
    '[class.full-width]': 'fullWidth()',
    '[class.flagged]': '!!entity()?.flagged',
    '[class.deprecated]': '!!entity()?.deprecated',
    '[class.accepted]': `entity()?.status === 'ACCEPTED'`,
    '[class.submitted]': `entity()?.status === 'SUBMITTED'`,
    '[class.rejected]': `entity()?.status === 'REJECTED'`,
    '[style.--cvc-tag-max-width]': 'truncate() ?? null',
  },
})
export class CvcTagComponent {
  readonly ref = input.required<EntityTagRef>()
  readonly context = input<CvcTagContext>('default')
  readonly mode = input<CvcTagMode>('default')
  /** typeahead search string to emphasize within the label */
  readonly emphasize = input<string | undefined>(undefined)
  /** override link rendering; default: spec.linked && context === 'default' */
  readonly linked = input<boolean | undefined>(undefined)
  /** override popover display; default: enabled in 'default' context only */
  readonly popover = input<boolean | undefined>(undefined)
  readonly popoverPlacement = input<string>('top')
  readonly showIcon = input<boolean>(true)
  readonly fullWidth = input<boolean>(false)
  /** CSS length for label max-width (replaces the old px-union input) */
  readonly truncate = input<string | undefined>(undefined)
  readonly checked = model<boolean>(false)
  readonly closed = output<void>()

  private readonly apollo = inject(Apollo)

  protected readonly spec = computed(() => tagSpecFor(this.ref().__typename))

  private readonly fragmentResult = toSignal(
    toObservable(this.ref).pipe(
      switchMap((ref) =>
        this.apollo.watchFragment<LinkableEntity>({
          fragment: tagSpecFor(ref.__typename)
            .fragment as TypedDocumentNode<LinkableEntity, unknown>,
          from: { __typename: ref.__typename, id: ref.id },
        })
      )
    )
  )

  protected readonly entity = computed<LinkableEntity | undefined>(() => {
    const result = this.fragmentResult()
    return result?.complete ? result.data : undefined
  })

  protected readonly label = computed(() => {
    const entity = this.entity()
    if (!entity) return `#${this.ref().id}`
    return this.spec().displayName?.(entity) ?? entity.name
  })

  protected readonly segments = computed(() =>
    labelSegments(this.label(), this.emphasize())
  )

  protected readonly isLinked = computed(
    () =>
      !!this.entity()?.link &&
      (this.linked() ?? (this.spec().linked && this.context() === 'default'))
  )

  protected readonly tooltip = computed(() => this.entity()?.tooltip)

  protected readonly nzMode = computed<CvcTagMode>(() =>
    this.context() === 'select-item' ? 'closeable' : this.mode()
  )

  // --- lazy popover ---
  protected readonly popoverEnabled = computed(
    () =>
      (this.popover() ?? this.context() === 'default') &&
      hasTagPopover(this.ref().__typename)
  )
  protected readonly popoverComponent =
    signal<PolymorpheusComponent<unknown> | null>(null)
  protected readonly popoverContext = computed(() =>
    TAG_POPOVERS[this.ref().__typename]?.inputs(this.ref().id)
  )
  private readonly popoverDirective = viewChild(NzPopoverDirective)

  constructor() {
    if (isDevMode()) {
      effect(() => {
        const result = this.fragmentResult()
        if (result && !result.complete) {
          const { __typename, id } = this.ref()
          console.warn(
            `cvc-tag: incomplete cache data for ${__typename}:${id} — ` +
              `ensure the query that loaded this entity spreads the ` +
              `Linkable${__typename} fragment`
          )
        }
      })
    }
  }

  private popoverLoad?: Promise<unknown>

  protected onPopoverVisible(visible: boolean): void {
    if (!visible || this.popoverLoad) return
    const loader = TAG_POPOVERS[this.ref().__typename]
    if (!loader) return
    this.popoverLoad = loader.load().then((component) => {
      this.popoverComponent.set(
        new PolymorpheusComponent(component as Type<unknown>)
      )
      setTimeout(() => this.updatePopoverPosition())
    })
  }

  protected onClose(): void {
    this.closed.emit()
  }

  /** re-layout the open popover after async content changes its size */
  updatePopoverPosition(): void {
    this.popoverDirective()?.updatePosition()
  }
}
