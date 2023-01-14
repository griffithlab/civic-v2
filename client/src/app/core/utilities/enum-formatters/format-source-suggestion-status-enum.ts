import { SourceSuggestionStatus } from '@app/generated/civic.apollo';

export function formatSourceSuggestionStatusEnum(
  value: SourceSuggestionStatus
): string {
  switch (value) {
    case 'NEW':
      return 'New';
    case 'CURATED':
      return 'Curated';
    case 'REJECTED':
      return 'Rejected';
    default:
      return value;
  }
}
