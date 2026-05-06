import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core'
import { EnumOutputStyle } from '@app/core/pipes/evidence-enum-display-type'
import { UntilDestroy } from '@ngneat/until-destroy'
import {
  CvcEntityTagStatus,
  CvcTagLabelMax,
  LinkableEntity,
} from '../entity-tag/entity-tag.component'

export interface CvcEntityTagListConfig {
  tagList: LinkableEntity[]
  tag: CvcEntityTagListContext
  emphasize?: string
  showPopover?: boolean
  status?: CvcEntityTagStatus
}

// context object for rendering tags in tag-list
export interface CvcEntityTagListContext {
  showLabel?: EnumOutputStyle | boolean
  showIcon?: string | boolean
  truncateLabel?: CvcTagLabelMax
  fullWidth?: boolean
  maxTags?: number
}

@UntilDestroy()
@Component({
    selector: 'cvc-entity-tag-list',
    templateUrl: './entity-tag-list.component.html',
    styleUrls: ['./entity-tag-list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class EntityTagListComponent {
  @Input() set cvcTagListConfig(config: CvcEntityTagListConfig) {
    if (!config || !config.tagList || !config.tag) return
    this.config = config
    this.setEntities(config.tagList, config.tag)
  }
  @Input() cvcTagTemplate!: TemplateRef<any>

  config?: CvcEntityTagListConfig
  tagCollectionConfig?: CvcEntityTagListConfig
  entities: LinkableEntity[]

  constructor() {
    this.entities = []
  }

  setEntities(entities: LinkableEntity[], context: CvcEntityTagListContext) {
    const max = context.maxTags
    const length = entities.length
    if (!entities || length === 0 || max === 0) {
      this.entities = []
      return
    }
    this.entities = entities
  }
}
