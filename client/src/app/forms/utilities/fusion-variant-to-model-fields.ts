import {
  Maybe,
  RevisableFusionVariantFieldsFragment,
  SuggestFactorVariantRevisionInput,
} from '@app/generated/civic.apollo'
import { FusionVariantReviseModel } from '../models/fusion-variant-revise.model'
import { FusionVariantFields } from '../models/fusion-variant-fields.model'

export function fusionVariantToModelFields(
  variant: RevisableFusionVariantFieldsFragment
): FusionVariantFields {
  return {
    aliases: variant.variantAliases,
    variantTypeIds: variant.variantTypes.map((vt) => vt.id),
    fivePrimeTranscript:
      variant.fivePrimeEndExonCoordinates.representativeTranscript,
    fivePrimeExonEnd: variant.fivePrimeEndExonCoordinates.exon?.toString(),
    fivePrimeOffset: variant.fivePrimeEndExonCoordinates.exonOffset?.toString(),
    fivePrimeOffsetDirection:
      variant.fivePrimeEndExonCoordinates.exonOffsetDirection,
    threePrimeTranscript:
      variant.threePrimeStartExonCoordinates.representativeTranscript,
    threePrimeExonStart:
      variant.threePrimeStartExonCoordinates.exon?.toString(),
    threePrimeOffset:
      variant.threePrimeStartExonCoordinates.exonOffset?.toString(),
    threePrimeOffsetDirection:
      variant.threePrimeStartExonCoordinates.exonOffsetDirection,
    referenceBuild: variant.fivePrimeEndExonCoordinates.referenceBuild,
    ensemblVersion: variant.fivePrimeEndExonCoordinates.ensemblVersion,
  }
}

export function fusionVariantFormModelToReviseInput(
  vid: number,
  model: FusionVariantReviseModel
): Maybe<SuggestFactorVariantRevisionInput> {
  return undefined

  const fields = model.fields
  if (!model.comment) {
    return undefined
  }

  //return {
  //  id: vid,
  //  fields: {
  //    aliases: fields.aliases || [],
  //    variantTypeIds: fields.variantTypeIds || [],
  //  },
  //  organizationId: model.organizationId,
  //  comment: model.comment!,
  //}
}
