export { CvcTagComponent } from './entity-tag.component'
export {
  ENTITY_TAG_SPECS,
  isTaggableTypename,
  tagSpecFor,
} from './entity-tag-specs'
export type {
  EntityTagRef,
  EntityTagSpec,
  TaggableTypename,
} from './entity-tag-specs'
export type {
  CvcTagContext,
  CvcTagLabelMax,
  CvcTagMode,
  LinkableEntity,
  PopoverPlacement,
} from './entity-tag.types'
export { labelSegments } from './entity-tag.types'
export { TAG_POPOVERS, hasTagPopover } from './tag-popovers'
export { readCachedEntity, readCachedEntityName } from './cached-entity'
export { CvcTagListComponent } from './tag-list.component'
export { CvcCollectionTagComponent } from './collection-tag.component'
