import {
  ClinvarInput,
  Maybe,
  RevisableVariantFieldsFragment,
  SuggestVariantRevisionInput,
} from '@app/generated/civic.apollo'
import * as fmt from '@app/forms/utilities/input-formatters'
import { VariantReviseModel } from '../models/variant-revise.model'
import { VariantFields } from '../models/variant-fields.model'

export function variantToModelFields(
  variant: RevisableVariantFieldsFragment
): VariantFields {
  return {
    name: variant.name,
    aliases: variant.variantAliases,
    hgvsDescriptions: variant.hgvsDescriptions,
    clinvarIds: variant.clinvarIds,
    variantTypeIds: variant.variantTypes.map((vt) => vt.id),
    referenceBuild: variant.referenceBuild,
    ensemblVersion: variant.ensemblVersion,
    chromosome: variant.primaryCoordinates?.chromosome,
    start: variant.primaryCoordinates?.start,
    stop: variant.primaryCoordinates?.stop,
    representativeTranscript:
      variant.primaryCoordinates?.representativeTranscript,
    chromosome2: variant.secondaryCoordinates?.chromosome,
    start2: variant.secondaryCoordinates?.start,
    stop2: variant.secondaryCoordinates?.stop,
    representativeTranscript2:
      variant.secondaryCoordinates?.representativeTranscript,
    geneId: variant.gene.id,
    referenceBases: variant.referenceBases,
    variantBases: variant.variantBases,
  }
}

export function variantFormModelToReviseInput(
  vid: number,
  model: VariantReviseModel
): Maybe<SuggestVariantRevisionInput> {
  const fields = model.fields
  if (!model.comment || !fields.name || !fields.geneId) {
    return undefined
  }

  return {
    id: vid,
    fields: {
      name: fields.name,
      aliases: fields.aliases || [],
      hgvsDescriptions: fields.hgvsDescriptions || [],
      clinvarIds: clinvarHelper(fields.clinvarIds || []),
      variantTypeIds: fields.variantTypeIds || [],
      referenceBuild: fmt.toNullableInput(fields.referenceBuild),
      ensemblVersion: fmt.toNullableInput(
        fields.ensemblVersion ? +fields.ensemblVersion : undefined
      ),
      primaryCoordinates: {
        chromosome: fields.chromosome,
        start: fields.start ? +fields.start : undefined,
        stop: fields.stop ? +fields.stop : undefined,
        representativeTranscript: fields.representativeTranscript,
      },
      secondaryCoordinates: {
        chromosome: fields.chromosome2,
        start: fields.start2 ? +fields.start2 : undefined,
        stop: fields.stop2 ? +fields.stop2 : undefined,
        representativeTranscript: fields.representativeTranscript2,
      },
      geneId: fields.geneId,
      referenceBases: fmt.toNullableString(fields.referenceBases),
      variantBases: fmt.toNullableString(fields.variantBases),
    },
    organizationId: model.organizationId,
    comment: model.comment!,
  }
}

let clinvarHelper = (ids: string[]): ClinvarInput => {
  if (ids[0] == 'NONE FOUND') {
    return { noneFound: true }
  } else if (ids[0] == 'N/A') {
    return { notApplicable: true }
  } else {
    return { ids: ids.map((id) => +id) }
  }
}
