import { Maybe, RevisableRegionFieldsFragment, SuggestRegionRevisionInput } from "@app/generated/civic.apollo";
import { RegionFields } from "../models/region-fields.model";
import { RegionReviseModel } from "../models/region-revise.model";
import * as fmt from '@app/forms/utilities/input-formatters'

export function regionToModelFields(region: RevisableRegionFieldsFragment): RegionFields {
  return {
    description: region.description,
    sourceIds: region.sources.map(s => s.id),
    aliases: region.featureAliases,
  }
}

export function regionFormModelToReviseInput(rid: number, model: RegionReviseModel): Maybe<SuggestRegionRevisionInput> {
  const fields = model.fields
  if (!model.comment) {
    return undefined
  }

  return {
    id: rid,
    fields: {
      description: fmt.toNullableString(fields.description),
      sourceIds: fields.sourceIds || [],
      aliases: fields.aliases || [],
    },
    organizationId: model.organizationId,
    comment: model.comment!
  }
}
