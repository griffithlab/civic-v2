import {
  ClinvarInput,
  Maybe,
  RevisableGeneVariantFieldsFragment,
  SuggestGeneVariantRevisionInput,
} from '@app/generated/civic.apollo'
import * as fmt from '@app/forms/utilities/input-formatters'
import { GeneVariantReviseModel } from '../models/gene-variant-revise.model'
import { GeneVariantFields } from '../models/gene-variant-fields.model'

export function geneVariantToModelFields(
  variant: RevisableGeneVariantFieldsFragment
): GeneVariantFields {
  return {
    name: variant.name,
    aliases: variant.variantAliases,
    hgvsDescriptions: variant.hgvsDescriptions,
    clinvarIds: variant.clinvarIds,
    variantTypeIds: variant.variantTypes.map((vt) => vt.id),
    coordinates: variant.coordinates,
    featureId: variant.feature.id,
  }
}

export function geneVariantFormModelToReviseInput(
  vid: number,
  model: GeneVariantReviseModel
): Maybe<SuggestGeneVariantRevisionInput> {
  const fields = model.fields
  if (!model.comment || !fields.name || !fields.featureId) {
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
      coordinates: {
        chromosome: fields.chromosome,
        start: fields.start ? +fields.start : undefined,
        stop: fields.stop ? +fields.stop : undefined,
        representativeTranscript: fields.representativeTranscript,
        ensemblVersion: fmt.toNullableInput(
          fields.ensemblVersion ? +fields.ensemblVersion : undefined
        ),
        referenceBuild: fmt.toNullableInput(fields.referenceBuild),
        referenceBases: fmt.toNullableString(fields.referenceBases),
        variantBases: fmt.toNullableString(fields.variantBases),
      },
      featureId: fields.featureId,
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
