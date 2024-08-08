import { Direction, ReferenceBuild } from '@app/generated/civic.apollo'

export type FusionVariantFields = {
  aliases?: string[]
  variantTypeIds?: number[]
  fivePrimeTranscript?: string
  fivePrimeExonEnd?: string
  fivePrimeOffset?: string
  fivePrimeOffsetDirection?: Direction
  threePrimeTranscript?: string
  threePrimeExonStart?: string
  threePrimeOffset?: string
  threePrimeOffsetDirection?: Direction
  referenceBuild?: ReferenceBuild
  ensemblVersion?: number
}
