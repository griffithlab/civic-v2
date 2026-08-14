import { Type } from '@angular/core'
import { TaggableTypename } from './entity-tag-specs'

/**
 * Lazy popover registry: typename → dynamic import + input mapping.
 *
 * Replaces the old eager entity-tag-popover module (which imported all nine
 * popover modules from @app/components into every lazy form chunk) and its
 * out-of-sync ENTITY_TAG_TYPES_WITH_POPOVER array / template @switch pair.
 * Popover code now loads over the network only when a tag's popover first
 * opens.
 *
 * Deliberate registry decisions (old array/switch drift, reconciled):
 * - Assertion + Feature: had unreachable @switch cases before; now active.
 * - Gene: was in the old array but had no @switch case (rendered an empty
 *   shell). There is no gene popover component; omitted until one exists.
 * - VariantType: popover component exists; newly registered.
 */
export interface TagPopoverLoader {
  readonly load: () => Promise<Type<unknown>>
  /** maps the entity id to the popover component's input(s) */
  readonly inputs: (id: number) => Record<string, unknown>
}

const variantPopover: TagPopoverLoader = {
  load: () =>
    import(
      '@app/components/variants/variant-popover/variant-popover.component'
    ).then((m) => m.CvcVariantPopoverComponent),
  inputs: (id) => ({ variantId: id }),
}

export const TAG_POPOVERS: Partial<
  Record<TaggableTypename, TagPopoverLoader>
> = {
  Assertion: {
    load: () =>
      import(
        '@app/components/assertions/assertions-popover/assertion-popover.component'
      ).then((m) => m.CvcAssertionPopoverComponent),
    inputs: (id) => ({ assertionId: id }),
  },
  Disease: {
    load: () =>
      import(
        '@app/components/diseases/disease-popover/disease-popover.component'
      ).then((m) => m.CvcDiseasePopoverComponent),
    inputs: (id) => ({ diseaseId: id }),
  },
  EvidenceItem: {
    load: () =>
      import(
        '@app/components/evidence/evidence-popover/evidence-popover.component'
      ).then((m) => m.CvcEvidencePopoverComponent),
    inputs: (id) => ({ evidenceId: id }),
  },
  Feature: {
    load: () =>
      import(
        '@app/components/features/feature-popover/feature-popover.component'
      ).then((m) => m.CvcFeaturePopoverComponent),
    inputs: (id) => ({ featureId: id }),
  },
  MolecularProfile: {
    load: () =>
      import(
        '@app/components/molecular-profiles/molecular-profile-popover/molecular-profile-popover.component'
      ).then((m) => m.CvcMolecularProfilePopoverComponent),
    inputs: (id) => ({ molecularProfileId: id }),
  },
  Phenotype: {
    load: () =>
      import(
        '@app/components/phenotypes/phenotype-popover/phenotype-popover.component'
      ).then((m) => m.CvcPhenotypePopoverComponent),
    inputs: (id) => ({ phenotypeId: id }),
  },
  Source: {
    load: () =>
      import(
        '@app/components/sources/source-popover/source-popover.component'
      ).then((m) => m.CvcSourcePopoverComponent),
    inputs: (id) => ({ sourceId: id }),
  },
  Therapy: {
    load: () =>
      import(
        '@app/components/therapies/cvc-therapy-popover/cvc-therapy-popover.component'
      ).then((m) => m.CvcTherapyPopoverComponent),
    inputs: (id) => ({ therapyId: id }),
  },
  VariantType: {
    load: () =>
      import(
        '@app/components/variant-types/variant-type-popover/variant-type-popover.component'
      ).then((m) => m.CvcVariantTypePopoverComponent),
    inputs: (id) => ({ variantTypeId: id }),
  },
  Variant: variantPopover,
  GeneVariant: variantPopover,
  FactorVariant: variantPopover,
  FusionVariant: variantPopover,
  RegionVariant: variantPopover,
}

export function hasTagPopover(typename: TaggableTypename): boolean {
  return typename in TAG_POPOVERS
}
