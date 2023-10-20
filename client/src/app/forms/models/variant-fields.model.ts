import { ReferenceBuild } from "@app/generated/civic.apollo"

export type VariantFields = {
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
  chromosome2?: string
  start2?: number
  stop2?: number
  representativeTranscript2?: string
  geneId?: number
  referenceBases?: string
  variantBases?: string
}