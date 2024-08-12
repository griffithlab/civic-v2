import {
  Maybe,
  RevisableFusionVariantFieldsFragment,
  SuggestFusionVariantRevisionInput,
} from '@app/generated/civic.apollo'
import { FusionVariantReviseModel } from '../models/fusion-variant-revise.model'
import { FusionVariantFields } from '../models/fusion-variant-fields.model'
import * as fmt from '@app/forms/utilities/input-formatters'

export function fusionVariantToModelFields(
  variant: RevisableFusionVariantFieldsFragment
): FusionVariantFields {
  const refBuild = variant.fivePrimeEndExonCoordinates
    ? variant.fivePrimeEndExonCoordinates.referenceBuild
    : variant.threePrimeStartExonCoordinates?.referenceBuild
  const ensemblVersion = variant.fivePrimeEndExonCoordinates
    ? variant.fivePrimeEndExonCoordinates.ensemblVersion
    : variant.threePrimeStartExonCoordinates?.ensemblVersion

  return {
    aliases: variant.variantAliases,
    variantTypeIds: variant.variantTypes.map((vt) => vt.id),
    fivePrimeTranscript:
      variant.fivePrimeEndExonCoordinates?.representativeTranscript,
    fivePrimeExonEnd: variant.fivePrimeEndExonCoordinates?.exon?.toString(),
    fivePrimeOffset:
      variant.fivePrimeEndExonCoordinates?.exonOffset?.toString(),
    fivePrimeOffsetDirection:
      variant.fivePrimeEndExonCoordinates?.exonOffsetDirection,
    threePrimeTranscript:
      variant.threePrimeStartExonCoordinates?.representativeTranscript,
    threePrimeExonStart:
      variant.threePrimeStartExonCoordinates?.exon?.toString(),
    threePrimeOffset:
      variant.threePrimeStartExonCoordinates?.exonOffset?.toString(),
    threePrimeOffsetDirection:
      variant.threePrimeStartExonCoordinates?.exonOffsetDirection,
    referenceBuild: refBuild,
    ensemblVersion: ensemblVersion,
  }
}

export function fusionVariantFormModelToReviseInput(
  vid: number,
  model: FusionVariantReviseModel
): Maybe<SuggestFusionVariantRevisionInput> {
  const fields = model.fields
  if (!model.comment) {
    return undefined
  }

  return {
    id: vid,
    fields: {
      aliases: fields.aliases || [],
      variantTypeIds: fields.variantTypeIds || [],
      coordinates: {
        fivePrimeTranscript: model.fields.fivePrimeTranscript,
        fivePrimeExonEnd: fmt.toNumOrUndefined(model.fields.fivePrimeExonEnd),
        fivePrimeOffset: fmt.toNumOrUndefined(model.fields.fivePrimeOffset),
        fivePrimeOffsetDirection: model.fields.fivePrimeOffsetDirection,
        threePrimeTranscript: model.fields.threePrimeTranscript,
        threePrimeExonStart: fmt.toNumOrUndefined(
          model.fields.threePrimeExonStart
        ),
        threePrimeOffset: fmt.toNumOrUndefined(model.fields.threePrimeOffset),
        threePrimeOffsetDirection: model.fields.threePrimeOffsetDirection,
        referenceBuild: model.fields.referenceBuild,
        ensemblVersion: +model.fields.ensemblVersion!,
      },
    },
    organizationId: model.organizationId,
    comment: model.comment!,
  }
}
