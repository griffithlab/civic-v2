import { EvidenceStatus } from '@app/generated/civic.apollo.types'

/**
 * Structural supertype of every generated Linkable* fragment — the shape
 * CvcTag renders from. Fields are optional here because availability varies
 * per schema type (e.g. NccnGuideline has no link; only Acmg/ClingenCode have
 * tooltip); each fragment's generated type is exact.
 */
export interface LinkableEntity {
  readonly __typename: string
  readonly id: number
  readonly name: string
  readonly link?: string
  readonly tooltip?: string
  readonly flagged?: boolean
  readonly deprecated?: boolean
  readonly status?: EvidenceStatus
  readonly citation?: string | undefined
}

/** Rendering context: default page flow, or inside an nz-select's chrome. */
export type CvcTagContext = 'default' | 'select-item' | 'multi-select-item'

export type CvcTagMode = 'default' | 'closeable' | 'checkable'

/** A segment of the tag label, for sanitizer-free typeahead highlighting. */
export interface LabelSegment {
  readonly text: string
  readonly highlight: boolean
}

/**
 * Splits `label` into segments marking case-insensitive occurrences of
 * `emphasize`. Plain string matching — no RegExp construction from user
 * input, no innerHTML (replaces the old highlightTypeahead pipe's unescaped
 * RegExp + bypassSecurityTrustHtml).
 */
export function labelSegments(
  label: string,
  emphasize: string | undefined
): LabelSegment[] {
  if (!emphasize || emphasize.length === 0) {
    return [{ text: label, highlight: false }]
  }
  const segments: LabelSegment[] = []
  const lowerLabel = label.toLowerCase()
  const lowerQuery = emphasize.toLowerCase()
  let pos = 0
  while (pos < label.length) {
    const found = lowerLabel.indexOf(lowerQuery, pos)
    if (found === -1) {
      segments.push({ text: label.slice(pos), highlight: false })
      break
    }
    if (found > pos) {
      segments.push({ text: label.slice(pos, found), highlight: false })
    }
    segments.push({
      text: label.slice(found, found + emphasize.length),
      highlight: true,
    })
    pos = found + emphasize.length
  }
  return segments
}
