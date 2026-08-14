import { TypedDocumentNode } from '@apollo/client'
import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { LinkableEntity } from './entity-tag.types'
import {
  LinkableAcmgCodeFragment,
  LinkableAcmgCodeFragmentDoc,
  LinkableAssertionFragment,
  LinkableAssertionFragmentDoc,
  LinkableClingenCodeFragment,
  LinkableClingenCodeFragmentDoc,
  LinkableCytogeneticRegionFragment,
  LinkableCytogeneticRegionFragmentDoc,
  LinkableDiseaseFragment,
  LinkableDiseaseFragmentDoc,
  LinkableEvidenceItemFragment,
  LinkableEvidenceItemFragmentDoc,
  LinkableFeatureFragment,
  LinkableFeatureFragmentDoc,
  LinkableGeneFragment,
  LinkableGeneFragmentDoc,
  LinkableMolecularProfileFragment,
  LinkableMolecularProfileFragmentDoc,
  LinkableNccnGuidelineFragment,
  LinkableNccnGuidelineFragmentDoc,
  LinkablePhenotypeFragment,
  LinkablePhenotypeFragmentDoc,
  LinkableSourceFragment,
  LinkableSourceFragmentDoc,
  LinkableTherapyFragment,
  LinkableTherapyFragmentDoc,
  LinkableVariantFragment,
  LinkableVariantFragmentDoc,
  LinkableVariantTypeFragmentDoc,
  LinkableVariantTypeFragment,
} from './linkable.fragments.gql.generated'

/**
 * Per-typename rendering/config spec for CvcTag. The fragment defines the
 * exact cache shape watched via Apollo.watchFragment; presentation options
 * (icon, color, linkability) live here rather than being smuggled through
 * component inputs (the old design let two presentational inputs change the
 * fragment shape, making correctness depend on attribute order).
 */
export interface EntityTagSpec<F extends LinkableEntity = LinkableEntity> {
  readonly fragment: TypedDocumentNode<F, unknown>
  /** nz-icon nzType (registered civic-* twotone icon), or none */
  readonly icon?: string
  /** twotone icon color; single source of truth is EntityColors */
  readonly color: string
  /** whether this type has a routable detail page (schema `link` field) */
  readonly linked: boolean
  /** label override, e.g. Source citation */
  readonly displayName?: (f: F) => string
}

function spec<F extends LinkableEntity>(
  s: Omit<EntityTagSpec<F>, 'fragment'> & { fragment: unknown }
): EntityTagSpec<F> {
  return s as EntityTagSpec<F>
}

const variantSpec = spec<LinkableVariantFragment>({
  fragment: LinkableVariantFragmentDoc,
  icon: 'civic-variant',
  color: getEntityColor('Variant'),
  linked: true,
})

export const ENTITY_TAG_SPECS = {
  AcmgCode: spec<LinkableAcmgCodeFragment>({
    fragment: LinkableAcmgCodeFragmentDoc,
    color: getEntityColor('Greyscale'),
    linked: false,
  }),
  Assertion: spec<LinkableAssertionFragment>({
    fragment: LinkableAssertionFragmentDoc,
    icon: 'civic-assertion',
    color: getEntityColor('Assertion'),
    linked: true,
  }),
  ClingenCode: spec<LinkableClingenCodeFragment>({
    fragment: LinkableClingenCodeFragmentDoc,
    color: getEntityColor('Greyscale'),
    linked: false,
  }),
  CytogeneticRegion: spec<LinkableCytogeneticRegionFragment>({
    fragment: LinkableCytogeneticRegionFragmentDoc,
    color: getEntityColor('Greyscale'),
    linked: false,
  }),
  Disease: spec<LinkableDiseaseFragment>({
    fragment: LinkableDiseaseFragmentDoc,
    icon: 'civic-disease',
    color: getEntityColor('Disease'),
    linked: true,
  }),
  EvidenceItem: spec<LinkableEvidenceItemFragment>({
    fragment: LinkableEvidenceItemFragmentDoc,
    icon: 'civic-evidenceitem',
    color: getEntityColor('EvidenceItem'),
    linked: true,
  }),
  Feature: spec<LinkableFeatureFragment>({
    fragment: LinkableFeatureFragmentDoc,
    icon: 'civic-feature',
    color: getEntityColor('Feature'),
    linked: true,
  }),
  Gene: spec<LinkableGeneFragment>({
    fragment: LinkableGeneFragmentDoc,
    // no dedicated gene icon is registered; genes are Feature instances
    icon: 'civic-feature',
    color: getEntityColor('Feature'),
    linked: true,
  }),
  MolecularProfile: spec<LinkableMolecularProfileFragment>({
    fragment: LinkableMolecularProfileFragmentDoc,
    icon: 'civic-molecularprofile',
    color: getEntityColor('MolecularProfile'),
    linked: true,
  }),
  NccnGuideline: spec<LinkableNccnGuidelineFragment>({
    fragment: LinkableNccnGuidelineFragmentDoc,
    color: getEntityColor('NccnGuideline'),
    linked: false,
  }),
  Phenotype: spec<LinkablePhenotypeFragment>({
    fragment: LinkablePhenotypeFragmentDoc,
    icon: 'civic-phenotype',
    color: getEntityColor('Phenotype'),
    linked: true,
  }),
  Source: spec<LinkableSourceFragment>({
    fragment: LinkableSourceFragmentDoc,
    icon: 'civic-source',
    color: getEntityColor('Source'),
    linked: true,
    displayName: (f) => f.citation ?? f.name,
  }),
  Therapy: spec<LinkableTherapyFragment>({
    fragment: LinkableTherapyFragmentDoc,
    icon: 'civic-therapy',
    color: getEntityColor('Therapy'),
    linked: true,
  }),
  VariantType: spec<LinkableVariantTypeFragment>({
    fragment: LinkableVariantTypeFragmentDoc,
    icon: 'civic-varianttype',
    color: getEntityColor('VariantType'),
    linked: true,
  }),
  // all five concrete implementors of VariantInterface share one fragment
  Variant: variantSpec,
  GeneVariant: variantSpec,
  FactorVariant: variantSpec,
  FusionVariant: variantSpec,
  RegionVariant: variantSpec,
} as const satisfies Record<string, EntityTagSpec<any>>

export type TaggableTypename = keyof typeof ENTITY_TAG_SPECS

/** The only input CvcTag needs: a concrete typename + id (= cache identity). */
export interface EntityTagRef {
  readonly __typename: TaggableTypename
  readonly id: number
}

export function isTaggableTypename(t: string): t is TaggableTypename {
  return t in ENTITY_TAG_SPECS
}

export function tagSpecFor(typename: TaggableTypename): EntityTagSpec {
  // safe erasure: callers pass the matching typename's entity to displayName
  return ENTITY_TAG_SPECS[typename] as EntityTagSpec
}
