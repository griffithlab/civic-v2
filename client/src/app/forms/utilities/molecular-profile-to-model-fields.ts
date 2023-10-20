import { Maybe, RevisableMolecularProfileFieldsFragment, SuggestMolecularProfileRevisionInput } from "@app/generated/civic.apollo";
import * as fmt from '@app/forms/utilities/input-formatters'
import { MolecularProfileFields } from "../models/molecular-profile-fields.model";
import { MolecularProfileReviseModel } from "../models/molecular-profile-revise.model";

export function molecularProfileToModelFields(mp: RevisableMolecularProfileFieldsFragment): MolecularProfileFields {
  return {
    description: mp.description,
    sourceIds: mp.sources.map(s => s.id),
    aliases: mp.molecularProfileAliases
  }
}

export function molecularProfileFormModelToReviseInput(mpid: number, model: MolecularProfileReviseModel): Maybe<SuggestMolecularProfileRevisionInput> {
  const fields = model.fields
  if (!model.comment) {
    return undefined
  }

  return {
    id: mpid,
    fields: {
      description: fmt.toNullableString(fields.description),
      sourceIds: fields.sourceIds || [],
      aliases: fields.aliases || []
    },
    organizationId: model.organizationId,
    comment: model.comment!
  }
}
