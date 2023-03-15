import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core'
import { CvcEntityTagListConfig, CvcEntityTagListContext } from '../entity-tag-list/entity-tag-list.component'
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
  @Input() cvcShowCountMax: number = 5
  @Input() cvcShowPopovers: boolean = false

  config?: CvcEntityTagListConfig
  entities: LinkableEntity[]
  hiddenEntities: LinkableEntity[]

  constructor() {
    this.entities = []
    this.hiddenEntities = []
  }

  setEntities(entities: LinkableEntity[]) {
    const max = this.cvcShowCountMax
    const length = entities.length
    if (!entities || length === 0) {
      this.entities = []
      return
    }
    if(max === 0) {
      this.hiddenEntities = []
    }
    this.entities = entities.slice(0, max)
    this.hiddenEntities = entities.slice(max, entities.length)
  }
}
