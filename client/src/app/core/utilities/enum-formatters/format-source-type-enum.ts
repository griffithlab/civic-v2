import { SourceSource } from "@app/generated/civic.apollo";

export function formatSourceTypeEnum(value: SourceSource): string {
  switch (value) {
    case 'ASCO':
      return 'Asco';
    case 'PUBMED':
      return 'PubMed';
    default:
      return value;
  }
}
