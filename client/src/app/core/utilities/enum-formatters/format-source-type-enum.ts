import { SourceSource } from '@app/generated/civic.apollo'

export function formatSourceTypeEnum(value: SourceSource): string {
  switch (value) {
    case 'ASCO':
      return 'ASCO'
    case 'PUBMED':
      return 'PubMed'
    case 'ASH':
      return 'ASH'
    case 'BIORXIV':
      return 'bioRxiv'
    case 'MEDRXIV':
      return 'medRxiv'
    default:
      return value
  }
}
