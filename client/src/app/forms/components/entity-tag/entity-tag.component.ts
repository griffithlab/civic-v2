import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { Apollo, gql } from 'apollo-angular'
import {
  EntityTagPopoverInput,
  EntityTagTypeWithPopover,
  ENTITY_TAG_TYPES_WITH_POPOVER,
} from '../entity-tag-popover/entity-tag-popover.component'
import { NzPopoverDirective } from 'ng-zorro-antd/popover'
import {
  LinkableEntity,
  CvcEntityTagStatus,
  CvcTagLabelMax,
  PopoverPlacement,
} from './entity-tag.types'
import {
  getFragment,
  getFragmentDoc,
  isLinkableEntity,
} from './entity-tag.functions'
import result from '@app/generated/civic.possible-types'

@Component({
  selector: 'cvc-entity-tag',
  templateUrl: './entity-tag.component.html',
  styleUrls: ['./entity-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.full-width]': `cvcFullWidth === true`,
    '[class.label-max]': `cvcTruncateLabel !== undefined`,
    '[class.label-max-50]': `cvcTruncateLabel === '50px'`,
    '[class.label-max-75]': `cvcTruncateLabel === '75px'`,
    '[class.label-max-100]': `cvcTruncateLabel === '100px'`,
    '[class.label-max-125]': `cvcTruncateLabel === '125px'`,
    '[class.label-max-150]': `cvcTruncateLabel === '150px'`,
    '[class.label-max-175]': `cvcTruncateLabel === '175px'`,
    '[class.label-max-200]': `cvcTruncateLabel === '200px'`,
    '[class.label-max-250]': `cvcTruncateLabel === '250px'`,
    '[class.label-max-300]': `cvcTruncateLabel === '300px'`,
    '[class.label-max-350]': `cvcTruncateLabel === '350px'`,
    '[class.label-max-400]': `cvcTruncateLabel === '400px'`,
    '[class.label-max-450]': `cvcTruncateLabel === '450px'`,
    '[class.label-max-500]': `cvcTruncateLabel === '500px'`,
    '[class.rejected]': `cvcStatus === 'REJECTED'`,
    '[class.accepted]': `cvcStatus === 'ACCEPTED'`,
    '[class.submitted]': `cvcStatus === 'SUBMITTED'`,
    '[class.new]': `cvcStatus === 'NEW'`,
    '[class.superseded]': `cvcStatus === 'SUPERSEDED'`,
  },
  standalone: false,
})
export class CvcEntityTagComponent implements OnChanges, AfterViewInit {
  @Input()
  set cvcLinkableEntity(entity: Maybe<LinkableEntity>) {
    if (!entity) return
    this.setLinkableEntity(entity)
  }
  @Input()
  set cvcCacheId(cacheId: string) {
    if (!cacheId) return
    this.setCachedLinkableEntity(cacheId)
  }
  @Input() cvcStatus: Maybe<CvcEntityTagStatus>
  @Input() cvcContext: 'default' | 'select-item' | 'multi-select-item' =
    'default'
  @Input() cvcMode: 'default' | 'closeable' | 'checkable' = 'default'
  @Input() cvcEmphasize?: string
  @Input() cvcDisableLink: boolean = true
  @Input() cvcTagChecked: boolean = false
  @Input() cvcHasTooltip: boolean = false
  @Input() cvcFullWidth: boolean = false
  @Input() cvcShowPopover: boolean = false
  @Input() cvcShowIcon: boolean = true
  @Input() cvcTruncateLabel?: CvcTagLabelMax
  @Input() cvcPopoverPlacement: PopoverPlacement = 'top'

  @Output() cvcTagCheckedChange: EventEmitter<boolean> =
    new EventEmitter<boolean>()
  @Output() cvcOnClose: EventEmitter<MouseEvent>

  @ViewChildren(NzPopoverDirective) popoverList!: QueryList<NzPopoverDirective>
  popover: NzPopoverDirective | undefined

  typename?: string
  id?: number
  entity?: LinkableEntity
  fragmentDoc?: ReturnType<typeof gql>
  popoverInput?: EntityTagPopoverInput
  isLinked = false

  constructor(private apollo: Apollo) {
    this.cvcOnClose = new EventEmitter<MouseEvent>()
  }

  private hasPopover(
    entityType: string
  ): entityType is EntityTagTypeWithPopover {
    const typesWithPopover = ENTITY_TAG_TYPES_WITH_POPOVER
    return typesWithPopover.includes(entityType)
  }

  private setLinkableEntity(entity: LinkableEntity): void {
    if (!isLinkableEntity(entity)) return
    this.typename = entity.__typename
    this.id = entity.id
    this.entity = entity
    this.setPopoverInput(entity)
  }

  //FIXME: If you set this before you set the disable link input
  //you will not get the correct cache fragment
  private setCachedLinkableEntity(cacheId: string): void {
    const [typename, id] = cacheId.split(':')
    this.typename = typename
    this.id = Number(id)
    this.isLinked = !this.cvcDisableLink

    if (!this.typename || !this.id) {
      console.error(
        `entity-tag received an invalid cacheId: ${cacheId}. Cache IDs must be in the format 'TYPENAME:ID'.`
      )
      return
    }
    // get linkable entity
    let fragment = undefined
    let entity = undefined
    const fragmentDoc: Maybe<ReturnType<typeof gql>> = getFragmentDoc(
      typename,
      this.isLinked
    )

    if (fragmentDoc) {
      fragment = getFragment(this.typename, this.id, fragmentDoc)
    } else {
      console.error(
        `Could not find fragment for ${typename}. Update entityTagFields Maps in entity-tag.functions.ts.`
      )
      return
    }

    entity = this.apollo.client.readFragment(fragment)

    // if cache-miss, check VariantInteface's other polymorphic types
    if (!entity && typename === 'Variant') {
      // cache misssed on a Variant type, check for its other polymorphic types
      result.possibleTypes.VariantInterface.forEach((type) => {
        if (type === 'Variant') return // already checked for Variant:id above
        const fragmentDoc: Maybe<ReturnType<typeof gql>> = getFragmentDoc(
          type,
          this.isLinked
        )
        if (fragmentDoc) {
          fragment = getFragment(type, this.id!, fragmentDoc)
          entity = this.apollo.client.readFragment(fragment)
          return
        }
      })
    }
    if (!isLinkableEntity(entity)) {
      console.error(`entity-tag could not find cached entity ${cacheId}`)
      return
    }
    this.setPopoverInput(entity)
    this.entity = entity
  }

  private setPopoverInput(entity: LinkableEntity) {
    if (isLinkableEntity(entity) && this.hasPopover(entity.__typename)) {
      this.popoverInput = { entityId: entity.id, entityType: entity.__typename }
    }
  }

  updatePopoverPosition() {
    if (this.popover) {
      this.popover.updatePosition()
    }
  }
  // ngOnChanges(changes: SimpleChanges): void {
  ngOnChanges(changes: SimpleChanges): void {
    // disable link for checkable mode
    if (changes.cvcMode) {
      const mode = changes.cvcMode.currentValue
      if (mode === 'checkable') {
        this.cvcDisableLink = true
      }
    }
    // disable link for select-item, multi-select-item contexts
    if (changes.cvcContext) {
      const context = changes.cvcContext.currentValue
      if (context !== 'default') {
        this.cvcDisableLink = true
      }
    }
  }

  ngAfterViewInit() {
    if (this.popoverList.length > 0) {
      this.popover = this.popoverList.first
    } else {
      console.warn('NzPopoverDirective not found in entity-tag view')
    }
  }
}
