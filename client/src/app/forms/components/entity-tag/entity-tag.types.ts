import { TypeGuard } from '@app/core/pipes/type-guard.pipe'
import { FlagState, RevisionStatus } from '@app/generated/civic.apollo'
import { EvidenceStatus } from '@app/generated/civic.apollo'

export type LinkableEntity = {
  __typename: string
  id: number
  name: string
  link?: string
  tooltip?: string
}

export type PopoverPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom'
  | Array<string>

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
