import { SourceLinkReason } from '@app/generated/civic.apollo'

export type LinkedSourceFields = {
  sourceId?: number
  linkedSourceId?: number
  reason?: SourceLinkReason
}
