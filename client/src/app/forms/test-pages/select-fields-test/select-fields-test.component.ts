import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  inject,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { CvcSelectFieldsRegistryModule } from '@app/forms/select/select-fields.registry.module'
import { AssertionState } from '@app/forms/states/assertion.state'
import { EvidenceState } from '@app/forms/states/evidence.state'
import { CvcBaseFieldsRegistryModule } from '@app/forms/types/base-fields.registry.module'
import { CvcFormWrappersModule } from '@app/forms/wrappers/form-wrappers.module'
import {
  CvcTagComponent,
  EntityTagRef,
  TaggableTypename,
  tagSpecFor,
} from '@app/tags'
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core'
import { Apollo } from 'apollo-angular'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzDividerModule } from 'ng-zorro-antd/divider'

/**
 * Cache rows for the tag gallery. CvcTag renders from a { __typename, id } ref
 * by watching that type's Linkable* fragment, so seeding the cache is the whole
 * setup — no query, no network, and therefore no login. That is what lets the
 * e2e specs run against this page on a fresh checkout.
 *
 * Shapes are per-type and deliberately not copied between types; see
 * tags/linkable.fragments.gql, which documents the same rule.
 */
const SEEDS: Record<string, any>[] = [
  { __typename: 'AcmgCode', id: 1, name: 'PS1', tooltip: 'Same amino acid change as an established pathogenic variant' },
  { __typename: 'Assertion', id: 1, name: 'AID1', link: '/assertions/1', flagged: false, status: 'ACCEPTED' },
  { __typename: 'ClingenCode', id: 1, name: 'OM1', tooltip: 'Located in a critical and well-established functional domain' },
  { __typename: 'CytogeneticRegion', id: 1, name: '7q31.2' },
  { __typename: 'Disease', id: 1, name: 'Chronic Myeloid Leukemia', link: '/diseases/1', deprecated: false },
  { __typename: 'EvidenceItem', id: 1, name: 'EID1', link: '/evidence/1', flagged: false, status: 'ACCEPTED' },
  { __typename: 'Feature', id: 1, name: 'BRAF', link: '/features/1', flagged: false, deprecated: false, featureType: 'GENE' },
  { __typename: 'Gene', id: 1, name: 'BRAF', link: '/genes/1', flagged: false, deprecated: false },
  { __typename: 'MolecularProfile', id: 1, name: 'BRAF V600E', link: '/molecular-profiles/1', flagged: false, deprecated: false },
  { __typename: 'NccnGuideline', id: 1, name: 'Melanoma' },
  { __typename: 'Phenotype', id: 1, name: 'Nausea', link: '/phenotypes/1' },
  { __typename: 'Source', id: 1, name: 'PMID: 12068308', link: '/sources/1', deprecated: false, citation: 'Davies et al., 2002, Nature', sourceType: 'PUBMED' },
  { __typename: 'Therapy', id: 1, name: 'Vemurafenib', link: '/therapies/1', deprecated: false },
  { __typename: 'VariantType', id: 1, name: 'missense_variant', link: '/variant-types/1' },

  // every concrete Variant typename shares one spec, so each is worth rendering
  { __typename: 'GeneVariant', id: 1, name: 'V600E', link: '/variants/1', flagged: false, deprecated: false },
  { __typename: 'FactorVariant', id: 2, name: 'METHYLATION', link: '/variants/2', flagged: false, deprecated: false },
  { __typename: 'FusionVariant', id: 3, name: 'BCR::ABL1', link: '/variants/3', flagged: false, deprecated: false },
  { __typename: 'RegionVariant', id: 4, name: 'CHR7:g.140453136', link: '/variants/4', flagged: false, deprecated: false },
  { __typename: 'Variant', id: 5, name: 'Generic Variant', link: '/variants/5', flagged: false, deprecated: false },

  // the two states that change how a tag renders, rather than just its label
  { __typename: 'MolecularProfile', id: 2, name: 'Flagged Profile', link: '/molecular-profiles/2', flagged: true, deprecated: false },
  { __typename: 'MolecularProfile', id: 3, name: 'Deprecated Profile', link: '/molecular-profiles/3', flagged: false, deprecated: true },
]

const evidenceFields: FormlyFieldConfig[] = [
  { key: 'evidenceType', type: 'type-select' },
  { key: 'evidenceDirection', type: 'direction-select' },
  { key: 'significance', type: 'significance-select' },
  { key: 'evidenceLevel', type: 'level-select' },
  { key: 'variantOrigin', type: 'origin-select' },
  { key: 'rating', type: 'rating' },
  { key: 'diseaseId', type: 'disease-select' },
  { key: 'therapyIds', type: 'therapy-multi-select' },
  { key: 'therapyInteractionType', type: 'interaction-select' },
  { key: 'sourceId', type: 'source-select' },
  { key: 'phenotypeIds', type: 'phenotype-multi-select' },
  { key: 'molecularProfileId', type: 'molecular-profile-select' },
  { key: 'featureId', type: 'feature-select' },
  { key: 'variantId', type: 'variant-select' },
]

const assertionFields: FormlyFieldConfig[] = [
  { key: 'assertionType', type: 'type-select' },
  { key: 'assertionDirection', type: 'direction-select' },
  { key: 'significance', type: 'significance-select' },
  { key: 'ampLevel', type: 'amp-category-select' },
  { key: 'acmgCodeIds', type: 'acmg-code-multi-select' },
  { key: 'clingenCodeIds', type: 'clingen-code-multi-select' },
  { key: 'nccnGuidelineId', type: 'nccn-guideline-select' },
  { key: 'fdaRegulatoryApproval', type: 'fda-regulatory-approval-checkbox' },
  { key: 'fdaCompanionTest', type: 'fda-companion-test-checkbox' },
  { key: 'variantTypeIds', type: 'variant-type-multi-select' },
  { key: 'cytogeneticRegionId', type: 'cytogenetic-region-select' },
  { key: 'clinvarIds', type: 'clinvar-multi-input' },
]

/** One field, in its own form, so the bench can address each independently. */
interface FieldBench {
  key: string
  type: string
  form: UntypedFormGroup
  model: Record<string, any>
  fields: FormlyFieldConfig[]
  options: FormlyFormOptions
}

/**
 * Each field gets its own FormGroup and its own formly options, but they share
 * one form-state instance — which is what the gates actually communicate
 * through. Fields therefore still drive each other (pick an Evidence Type and
 * direction gates itself) while remaining separately addressable.
 *
 * The separation is not cosmetic: molecular-profile-select embeds an mp-finder
 * carrying its own nested feature- and variant-selects, so `cvc-variant-select`
 * alone matches more than one element on this page.
 */
function bench(configs: FormlyFieldConfig[], formState: unknown): FieldBench[] {
  return configs.map((config) => ({
    key: config.key as string,
    type: config.type as string,
    form: new UntypedFormGroup({}),
    model: {},
    fields: [config],
    options: { formState } as FormlyFormOptions,
  }))
}

/**
 * A dev-only bench for the migrated formly fields: every field in isolation,
 * driven by a real form state, plus a gallery of every taggable typename.
 *
 * It exists because the fields are otherwise only reachable through submit and
 * revise forms that require a login and a lot of clicking to reach — which made
 * the migration expensive to eyeball and impossible to drive from a headless
 * browser. Registered only when `environment.production` is false.
 */
@Component({
  selector: 'cvc-select-fields-test',
  standalone: true,
  imports: [
    FormlyModule,
    CvcSelectFieldsRegistryModule,
    CvcBaseFieldsRegistryModule,
    CvcFormWrappersModule,
    NzCardModule,
    NzDividerModule,
    CvcTagComponent,
  ],
  templateUrl: './select-fields-test.component.html',
  styleUrls: ['./select-fields-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcSelectFieldsTestComponent implements AfterViewInit {
  private readonly apollo = inject(Apollo)

  private readonly evidenceState = new EvidenceState()
  private readonly assertionState = new AssertionState()

  protected readonly evidenceBench: FieldBench[]
  protected readonly assertionBench: FieldBench[]
  protected readonly tagRefs: EntityTagRef[]

  constructor() {
    this.evidenceBench = bench(evidenceFields, this.evidenceState)
    this.assertionBench = bench(assertionFields, this.assertionState)

    const cache = this.apollo.client.cache
    for (const data of SEEDS) {
      cache.writeFragment({
        fragment: tagSpecFor(data.__typename as TaggableTypename).fragment,
        id: cache.identify(data),
        data,
      })
    }

    this.tagRefs = SEEDS.map((s) => ({
      __typename: s.__typename as TaggableTypename,
      id: s.id as number,
    }))
  }

  /**
   * A real form announces this once it has finished populating its model, and
   * four field types wait for it before wiring themselves up: variant-select's
   * feature gate, both FDA checkboxes, and the NCCN version input. formReady$
   * is a plain Subject rather than a BehaviorSubject, so this has to run after
   * the fields have subscribed — hence ngAfterViewInit, matching
   * assertion-submit.form.ts.
   */
  ngAfterViewInit(): void {
    this.evidenceState.formReady$.next(true)
    this.assertionState.formReady$.next(true)
  }
}
