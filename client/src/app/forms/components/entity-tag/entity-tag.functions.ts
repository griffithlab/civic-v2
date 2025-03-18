import { TypeGuard } from '@app/core/pipes/type-guard.pipe'
import { LinkableEntity } from './entity-tag.types'

export const isLinkableEntity: TypeGuard<any, LinkableEntity> = (
  entity: any
): entity is LinkableEntity =>
  entity !== undefined &&
  entity.__typename &&
  entity.id &&
  entity.name !== undefined
