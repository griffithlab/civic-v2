import { DrugInteraction } from "@app/generated/civic.apollo";

export function formatDrugInteractionEnum(value: DrugInteraction): string {
  switch (value) {
    case 'COMBINATION':
      return 'Combination';
    case 'SEQUENTIAL':
      return 'Sequential';
    case 'SUBSTITUTES':
      return 'Substitutes';
    default:
      return value;
  }
}
