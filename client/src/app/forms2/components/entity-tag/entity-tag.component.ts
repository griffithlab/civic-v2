import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'
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
@Component({
  selector: 'cvc-entity-tag',
  templateUrl: './entity-tag.component.html',
  styleUrls: ['./entity-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.full-width]': `cvcFullWidth === true`,
    '[class.clip-label]': `cvcClipLabel !== undefined`,
    '[class.clip-label-100]': `cvcClipLabel === '150px'`,
    '[class.clip-label-125]': `cvcClipLabel === '125px'`,
    '[class.clip-label-150]': `cvcClipLabel === '150px'`,
    '[class.clip-label-175]': `cvcClipLabel === '175px'`,
    '[class.clip-label-200]': `cvcClipLabel === '200px'`,
    '[class.clip-label-250]': `cvcClipLabel === '250px'`,
    '[class.clip-label-300]': `cvcClipLabel === '300px'`,
    '[class.clip-label-400]': `cvcClipLabel === '400px'`,
    '[class.clip-label-500]': `cvcClipLabel === '500px'`,
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
  @Input() cvcContext: 'default' | 'select-item' | 'multi-select-item' =
    'default'
  @Input() cvcMode: 'default' | 'closeable' | 'checkable' = 'default'
  @Input() cvcEmphasize?: string
  @Input() cvcDisableLink: boolean = false
  @Input() cvcTagChecked: boolean = false
  @Input() cvcFullWidth: boolean = false
  @Input() cvcClipLabel?:
    | '100px'
    | '125px'
    | '150px'
    | '175px'
    | '200px'
    | '250px'
    | '300px'
    | '400px'
    | '500px'
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
