import { EvidenceLevel } from '@app/generated/civic.apollo'

const levelDescriptions = new Map<EvidenceLevel, string>([
  [EvidenceLevel.A, 'Validated Association'],
  [EvidenceLevel.B, 'Clinical Evidence'],
  [EvidenceLevel.C, 'Case Study'],
  [EvidenceLevel.D, 'Preclinical Evidence'],
  [EvidenceLevel.E, 'Inferential Association'],
])

export function formatEvidenceLevelEnum(value: EvidenceLevel): string {
  const desc = levelDescriptions.get(value)
  return desc ? desc : ''
}
