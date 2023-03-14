import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'
import { EvidenceStatus, FlagState, Maybe, RevisionStatus } from '@app/generated/civic.apollo'
import { Apollo, gql } from 'apollo-angular'
import {
  EntityTagPopoverInput,
  EntityTagTypeWithPopover,
  ENTITY_TAG_TYPES_WITH_POPOVER,
} from '../entity-tag-popover/entity-tag-popover.component'
export interface LinkableEntity {
  id: number
  name: string
  link?: string
}

export type CvcTagLabelMax =
  | '50px'
  | '750px'
  | '100px'
  | '125px'
  | '150px'
  | '175px'
  | '200px'
  | '250px'
  | '300px'
  | '350px'
  | '400px'
  | '450px'
  | '500px'

export type CvcEntityTagStatus = EvidenceStatus | RevisionStatus | FlagState

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
})
export class CvcEntityTagComponent implements OnChanges {
  _cacheId: string = ''
  @Input()
  set cvcCacheId(cacheId: string) {
    if (!cacheId) return
    this.setLinkableEntity(cacheId)
  }
  get cvcCacheId(): string {
    return this._cacheId
  }
  @Input() cvcStatus: Maybe<CvcEntityTagStatus>
  @Input() cvcContext: 'default' | 'select-item' | 'multi-select-item' =
    'default'
  @Input() cvcMode: 'default' | 'closeable' | 'checkable' = 'default'
  @Input() cvcEmphasize?: string
  @Input() cvcDisableLink: boolean = false
  @Input() cvcTagChecked: boolean = false
  @Input() cvcFullWidth: boolean = false
  @Input() cvcTruncateLabel?: CvcTagLabelMax
  @Output() cvcTagCheckedChange: EventEmitter<boolean> =
    new EventEmitter<boolean>()
  @Output() cvcOnClose: EventEmitter<MouseEvent>

  typename?: string
  id?: number
  entity?: LinkableEntity
  popoverInput?: EntityTagPopoverInput

  constructor(private apollo: Apollo) {
    this.cvcOnClose = new EventEmitter<MouseEvent>()
  }

  private hasPopover(
    entityType: string
  ): entityType is EntityTagTypeWithPopover {
    return ENTITY_TAG_TYPES_WITH_POPOVER.includes(entityType)
  }

  private setLinkableEntity(cacheId: string) {
    this._cacheId = cacheId
    const [typename, id] = cacheId.split(':')
    this.typename = typename
    this.id = +id
    if (this.hasPopover(this.typename)) {
      this.popoverInput = { entityId: this.id, entityType: this.typename }
    }
    if (!this.typename || !this.id) {
      console.error(
        `entity-tag received an invalid cacheId: ${cacheId}. Cache IDs must be in the format 'TYPENAME:ID'.`
      )
      return
    }
    // get linkable entity
    const fragment = {
      id: `${typename}:${id}`,
      fragment: gql`
        fragment Linkable${typename}Entity on ${typename} {
          id
          name
          link
        }
      `,
    }
    const entity = this.apollo.client.readFragment(fragment) as LinkableEntity
    if (!entity) {
      console.error(`entity-tag could not find cached entity ${cacheId}`)
      return
    }
    this.entity = entity
  }

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
}
