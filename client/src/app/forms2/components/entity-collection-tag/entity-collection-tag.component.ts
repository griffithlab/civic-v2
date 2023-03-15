import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core'
import { CvcEntityTagListConfig } from '../entity-tag-list/entity-tag-list.component'
import { LinkableEntity } from '../entity-tag/entity-tag.component'

@Component({
  selector: 'cvc-entity-collection-tag',
  templateUrl: './entity-collection-tag.component.html',
  styleUrls: ['./entity-collection-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEntityCollectionTagComponent {
  @Input() set cvcCollectionTagConfig(config: CvcEntityTagListConfig) {
    if (!config || !config.tagList || !config.tag) return
    this.config = config
    this.setEntities(config.tagList)
  }
  @Input() cvcTagTemplate!: TemplateRef<any>
  @Input() cvcShowMaxIcons: number = 5
  @Input() cvcShowPopovers: boolean = false

  config?: CvcEntityTagListConfig
  entities: LinkableEntity[]

  constructor() {
    this.entities = []
  }

  setEntities(entities: LinkableEntity[]) {
    const max = this.cvcShowMaxIcons
    const length = entities.length
    if (!entities || length === 0) {
      this.entities = []
      return
    }
    this.entities = entities
  }
}
