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
})
export class EntityTagListComponent {
  @Input() set cvcTagListConfig(config: CvcEntityTagListConfig) {
    if (!config || !config.tagList || !config.tag) return
    this.config = config
    this.setEntities(config.tagList, config.tag)
  }
  @Input() cvcTagTemplate!: TemplateRef<any>
  @Input() cvcShowCountMax: number = 5

  config?: CvcEntityTagListConfig
  tagCollectionConfig?: CvcEntityTagListConfig
  entities: LinkableEntity[]

  constructor() {
    this.entities = []
  }

  setEntities(entities: LinkableEntity[], context: CvcEntityTagListContext) {
    // console.log(
    //   'entity-tag-list setEntities entities:',
    //   entities,
    //   'context',
    //   context
    // )
    const max = context.maxTags
    const length = entities.length
    if (!entities || length === 0 || max === 0) {
      this.entities = []
      return
    }
    this.entities = entities.slice(0, max)
    const overflow = entities.slice(max, entities.length)
    if (overflow.length > 0) {
      this.tagCollectionConfig = {
        ...this.config,
        tagList: entities.slice(max, entities.length),
        tag: context,
      }
    }
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   // watching cvcTemplateContext Input here to kick off entity list init,
  //   // since it is is reliably triggered on changes when rendered within
  //   // cdkScrollable's *cdkVirtualFor
  //   if (changes.cvcTemplateContext) {
  //     console.log(
  //       'entity-tag-list entity cacheIds:',
  //       this.cvcLinkableEntities.map((e) => `${e.__typename}:${e.id}`)
  //     )
  //     this.setEntities(this.cvcLinkableEntities)
  //   }
  // }
}
