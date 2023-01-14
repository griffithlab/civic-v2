import { ReferenceBuild } from '@app/generated/civic.apollo';

export function formatReferenceBuildEnum(value: ReferenceBuild): string {
  switch (value) {
    case 'GRCH37':
      return 'GRCh37 (hg19)';
    case 'GRCH38':
      return 'GRCh38 (hg38)';
    case 'NCBI36':
      return 'NCBI36 (hg18)';
    default:
      return value;
  }
}
