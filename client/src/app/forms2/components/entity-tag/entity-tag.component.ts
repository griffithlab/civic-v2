import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { Apollo, gql } from 'apollo-angular'
import { Subject } from 'rxjs'
export interface LinkableEntity {
  id: number
  name: string
  link?: string
}
@Component({
  selector: 'cvc-entity-tag',
  templateUrl: './entity-tag.component.html',
  styleUrls: ['./entity-tag.component.less'],
})
export class CvcEntityTagComponent {
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
  @Output() cvcOnClose: EventEmitter<MouseEvent>
  @Input() cvcTagChecked: boolean = false
  @Output() cvcTagCheckedChange: EventEmitter<boolean> =
    new EventEmitter<boolean>()

  typename?: string
  id?: number
  entity?: LinkableEntity

  constructor(private apollo: Apollo) {
    this.cvcOnClose = new EventEmitter<MouseEvent>()
  }

  private setLinkableEntity(cacheId: string) {
    this._cacheId = cacheId
    const [typename, id] = cacheId.split(':')
    this.typename = typename
    this.id = +id
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
}
