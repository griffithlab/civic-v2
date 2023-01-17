import { TherapyInteraction } from '@app/generated/civic.apollo'

export function formatTherapyInteractionEnum(
  value: TherapyInteraction
): string {
  switch (value) {
    case 'COMBINATION':
      return 'Combination'
    case 'SEQUENTIAL':
      return 'Sequential'
    case 'SUBSTITUTES':
      return 'Substitutes'
    default:
      return value
  }
}
