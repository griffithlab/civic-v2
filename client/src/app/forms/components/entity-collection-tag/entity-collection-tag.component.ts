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
  standalone: false,
})
export class CvcEntityCollectionTagComponent {
  @Input() set cvcCollectionTagConfig(config: CvcEntityTagListConfig) {
    if (!config || !config.tagList || !config.tag) return
    // remove label truncation for display in popover
    this.setConfig(config)
    this.setEntities(config.tagList)
  }
  @Input() cvcTagTemplate!: TemplateRef<any>
  @Input() cvcShowMaxIcons: number = 5 // number of icons to show before switching to numeric count
  @Input() cvcShowFullLabels?: boolean = true // view full labels in popover, even if truncateLabel set

  config?: CvcEntityTagListConfig
  entities: LinkableEntity[]

  constructor() {
    this.entities = []
  }

  setConfig(config: CvcEntityTagListConfig) {
    if (this.cvcShowFullLabels) {
      this.config = {
        ...config,
        tag: { ...config.tag, truncateLabel: undefined },
      }
    } else {
      this.config = config
    }
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
