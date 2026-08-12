import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import { CvcDiseaseTagModule } from '@app/components/diseases/disease-tag/disease-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcPhenotypeTagModule } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.module'
import { LinkableVariant } from '@app/components/shared/feature-variant-tag/feature-variant-tag.component'
import { CvcFeatureVariantTagModule } from '@app/components/shared/feature-variant-tag/feature-variant-tag.module'
import { SourceWithDisplayName } from '@app/components/sources/source-tag/source-tag.component'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcVariantTypeTagModule } from '@app/components/variant-types/variant-type-tag/variant-type-tag.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { Maybe } from '@app/generated/civic.apollo'
import { NzTagModule } from 'ng-zorro-antd/tag'

/** Minimal ModeratedObjectField shape required to render an entity tag.
 * Matches the fields fetched by the shared revisionLinkoutData fragment, so
 * diff objects from any query that includes it may be passed directly. */
export interface LinkableModeratedObject {
  id: number
  entityType: string
  deleted: boolean
  displayName?: Maybe<string>
  link?: Maybe<string>
  deprecated?: Maybe<boolean>
  flagged?: Maybe<boolean>
  feature?: Maybe<{
    id: number
    name: string
    link: string
    deprecated?: Maybe<boolean>
    flagged?: Maybe<boolean>
  }>
}

type ModeratedEntityTagType =
  | 'disease'
  | 'evidence'
  | 'feature'
  | 'molecular-profile'
  | 'phenotype'
  | 'source'
  | 'therapy'
  | 'variant'
  | 'variant-type'
  | 'other'

// ModeratedObjectField.entityType is a server-side model class name, e.g.
// 'Disease', 'Features::Gene', 'Variants::GeneVariant'. Keys here are the
// name's leading namespace segment, so all STI subclasses of Feature and
// Variant resolve to their base entity's tag. Types without a key (aliases,
// ACMG/ClinGen codes, NCCN guidelines, etc.) render as a plain nz-tag.
const ENTITY_TYPE_TAGS: Record<string, ModeratedEntityTagType> = {
  Disease: 'disease',
  EvidenceItem: 'evidence',
  Feature: 'feature',
  Features: 'feature',
  MolecularProfile: 'molecular-profile',
  Phenotype: 'phenotype',
  Source: 'source',
  Therapy: 'therapy',
  Variant: 'variant',
  Variants: 'variant',
  VariantType: 'variant-type',
}

/** Renders a revision diff object (ModeratedObjectField) as its entity's tag
 * component - linked, with summary popover - falling back to a plain tag for
 * non-entity types and a 'Deleted' tag for records that no longer exist. */
@Component({
  selector: 'cvc-moderated-entity-tag',
  imports: [
    CvcDiseaseTagModule,
    CvcEvidenceTagModule,
    CvcFeatureTagModule,
    CvcFeatureVariantTagModule,
    CvcMolecularProfileTagModule,
    CvcPhenotypeTagModule,
    CvcPipesModule,
    CvcSourceTagModule,
    CvcTherapyTagModule,
    CvcVariantTagModule,
    CvcVariantTypeTagModule,
    NzTagModule,
  ],
  templateUrl: './moderated-entity-tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcModeratedEntityTagComponent {
  object = input.required<LinkableModeratedObject>({
    alias: 'cvcModeratedEntityTag',
  })

  tagType = computed<ModeratedEntityTagType>(() => {
    const namespace = this.object().entityType.split('::')[0]
    return ENTITY_TYPE_TAGS[namespace] ?? 'other'
  })

  // base Linkable* shape accepted by most entity tag components
  linkable = computed(() => {
    const o = this.object()
    return {
      id: o.id,
      name: o.displayName ?? '',
      link: o.link ?? '',
      deprecated: o.deprecated ?? false,
      flagged: o.flagged ?? false,
    }
  })

  // known_partner_gene_ids revisions reference Features::Gene records whose id
  // differs from their wrapping Feature's id; links & popovers require the
  // Feature id, so prefer it when present
  featureLinkable = computed(() => {
    const o = this.object()
    return { ...this.linkable(), id: o.feature?.id ?? o.id }
  })

  variantLinkable = computed<LinkableVariant>(() => {
    const feature = this.object().feature
    return {
      ...this.linkable(),
      feature: feature
        ? {
            id: feature.id,
            name: feature.name,
            link: feature.link,
            deprecated: feature.deprecated ?? false,
            flagged: feature.flagged ?? false,
          }
        : undefined,
    }
  })

  sourceLinkable = computed<SourceWithDisplayName>(() => {
    const o = this.object()
    return {
      id: o.id,
      displayName: o.displayName ?? '',
      link: o.link ?? '',
      deprecated: o.deprecated ?? false,
    }
  })

  // deleted stubs carry only the model class name, e.g. 'Features::Gene'
  deletedEntityName = computed(
    () => this.object().entityType.split('::').pop() ?? ''
  )
}
