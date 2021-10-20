import { DrugInteraction, Maybe, NullableDrugInteractionTypeInput } from "@app/generated/civic.apollo";

export function toNullableDrugInteractionTypeInput(
  interaction: Maybe<DrugInteraction>
): NullableDrugInteractionTypeInput {
  let nInteraction: NullableDrugInteractionTypeInput = { value: undefined, unset: undefined };
  if (interaction) { nInteraction.value = interaction }
  else { nInteraction.unset = true }
  return nInteraction;
}
