import { ReferenceBuild } from '@app/generated/civic.apollo'

export type GeneVariantFields = {
  name?: string
  aliases?: string[]
  hgvsDescriptions?: string[]
  clinvarIds?: string[]
  variantTypeIds?: number[]
  referenceBuild?: ReferenceBuild
  ensemblVersion?: number
  chromosome?: string
  start?: number
  stop?: number
  representativeTranscript?: string
  representativeTranscript2?: string
  featureId?: number
  referenceBases?: string
  variantBases?: string
}
