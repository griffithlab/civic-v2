import { TherapyInteraction } from '@app/generated/civic.apollo'

export type SourceFields = {
  molecularProfileId?: number
  sourceId?: number
  diseaseId?: number
  therapyIds?: number[]
  therapyInteractionType?: TherapyInteraction
}
