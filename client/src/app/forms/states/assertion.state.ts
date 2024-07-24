import {
  AssertionDirection,
  AssertionSignificance,
  AssertionType,
  Maybe,
  MolecularProfile,
  VariantOrigin,
  TherapyInteraction,
  AmpLevel,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { BehaviorSubject } from 'rxjs'
import { CvcInputEnum } from '../forms.types'
import { assertionSubmitFieldsDefaults } from '../models/assertion-submit.model'
import { EntityName, BaseState } from './base.state'
import { EvidenceRequires } from './evidence.state'

export type AssertionFields = {
  molecularProfileId$: BehaviorSubject<Maybe<number>>
  evidenceItemIds$: BehaviorSubject<Maybe<number[]>>
  geneId$: BehaviorSubject<Maybe<number>>
  variantId$: BehaviorSubject<Maybe<number>>
  variantMolecularProfile$: BehaviorSubject<Maybe<MolecularProfile>>
  variantOrigin$: BehaviorSubject<Maybe<VariantOrigin>>
  assertionType$: BehaviorSubject<Maybe<AssertionType>>
  assertionDirection$: BehaviorSubject<Maybe<AssertionDirection>>
  significance$: BehaviorSubject<Maybe<AssertionSignificance>>
  diseaseId$: BehaviorSubject<Maybe<number>>
  therapyIds$: BehaviorSubject<Maybe<number[]>>
  therapyInteractionType$: BehaviorSubject<Maybe<TherapyInteraction>>
  phenotypeIds$: BehaviorSubject<Maybe<number[]>>
  nccnGuidelineId$: BehaviorSubject<Maybe<number>>
  fdaRegulatoryApproval$: BehaviorSubject<Maybe<boolean>>
  fdaCompanionTest$: BehaviorSubject<Maybe<boolean>>
  ampLevel$: BehaviorSubject<Maybe<AmpLevel>>
  acmgCodeIds$: BehaviorSubject<Maybe<number[]>>
  clingenCodeIds$: BehaviorSubject<Maybe<number[]>>
  nccnGuidelineVersion$: BehaviorSubject<Maybe<string>>
  description$: BehaviorSubject<Maybe<string>>
  comment$: BehaviorSubject<Maybe<string>>
}

export type AssertionEnums = {
  entityType$: BehaviorSubject<CvcInputEnum[]>
  significance$: BehaviorSubject<CvcInputEnum[]>
  direction$: BehaviorSubject<CvcInputEnum[]>
  interaction$: BehaviorSubject<CvcInputEnum[]>
}

class AssertionState extends BaseState {
  fields: AssertionFields
  enums: AssertionEnums
  requires: EvidenceRequires

  constructor() {
    super(EntityName.ASSERTION)
    const def = assertionSubmitFieldsDefaults

    this.fields = {
      molecularProfileId$: new BehaviorSubject<Maybe<number>>(
        def.molecularProfileId
      ),
      variantMolecularProfile$: new BehaviorSubject<Maybe<MolecularProfile>>(
        undefined
      ),
      geneId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantOrigin$: new BehaviorSubject<Maybe<VariantOrigin>>(
        def.variantOrigin
      ),
      assertionType$: new BehaviorSubject<Maybe<AssertionType>>(
        def.assertionType
      ),
      assertionDirection$: new BehaviorSubject<Maybe<AssertionDirection>>(
        def.assertionDirection
      ),
      evidenceItemIds$: new BehaviorSubject<Maybe<number[]>>(
        def.evidenceItemIds
      ),
      significance$: new BehaviorSubject<Maybe<AssertionSignificance>>(
        def.significance
      ),
      diseaseId$: new BehaviorSubject<Maybe<number>>(def.diseaseId),
      therapyIds$: new BehaviorSubject<Maybe<number[]>>(def.therapyIds),
      therapyInteractionType$: new BehaviorSubject<Maybe<TherapyInteraction>>(
        def.therapyInteractionType
      ),
      phenotypeIds$: new BehaviorSubject<Maybe<number[]>>(def.phenotypeIds),
      nccnGuidelineId$: new BehaviorSubject(def.nccnGuidelineId),
      fdaRegulatoryApproval$: new BehaviorSubject(def.fdaRegulatoryApproval),
      fdaCompanionTest$: new BehaviorSubject(def.fdaCompanionTest),
      ampLevel$: new BehaviorSubject<Maybe<AmpLevel>>(def.ampLevel),
      acmgCodeIds$: new BehaviorSubject<Maybe<number[]>>(def.acmgCodeIds),
      clingenCodeIds$: new BehaviorSubject<Maybe<number[]>>(def.clingenCodeIds),
      nccnGuidelineVersion$: new BehaviorSubject<Maybe<string>>(
        def.nccnGuidelineVersion
      ),
      description$: new BehaviorSubject<Maybe<string>>(undefined),
      comment$: new BehaviorSubject<Maybe<string>>(undefined),
    }

    this.enums = {
      entityType$: new BehaviorSubject<CvcInputEnum[]>(this.getTypeOptions()),
      significance$: new BehaviorSubject<CvcInputEnum[]>([]),
      direction$: new BehaviorSubject<CvcInputEnum[]>([]),
      interaction$: new BehaviorSubject<CvcInputEnum[]>(
        this.getInteractionOptions()
      ),
    }

    this.options = {
      assertionTypeOption$: new BehaviorSubject<NzSelectOptionInterface[]>(
        this.getOptionsFromEnums(this.getTypeOptions())
      ),
      directionOption$: new BehaviorSubject<Maybe<NzSelectOptionInterface[]>>(
        undefined
      ),
      significanceOption$: new BehaviorSubject<
        Maybe<NzSelectOptionInterface[]>
      >(undefined),
    }

    this.requires = {
      requiresDisease$: new BehaviorSubject<boolean>(false),
      requiresTherapy$: new BehaviorSubject<boolean>(false),
      requiresTherapyInteractionType$: new BehaviorSubject<boolean>(false),
      requiresClingenCodes$: new BehaviorSubject<boolean>(false),
      requiresAcmgCodes$: new BehaviorSubject<boolean>(false),
      requiresAmpLevel$: new BehaviorSubject<boolean>(false),
      allowsFdaApproval$: new BehaviorSubject<boolean>(false),
    }

    // ASSERTION TYPE SUBSCRIBERS
    this.fields.assertionType$
      .pipe(untilDestroyed(this, 'onDestroy'))
      .subscribe((at: Maybe<AssertionType>) => {
        if (!at) {
          // set all 'requires' fields to false, non-type enums to []
          Object.entries(this.requires).forEach(([key, value]) => {
            value.next(false)
          })
          this.enums.significance$.next([])
          this.enums.direction$.next([])
          return
        }
        this.enums.significance$.next(this.getSignificanceOptions(at))
        this.enums.direction$.next(this.getDirectionOptions(at))

        this.requires.requiresDisease$.next(this.requiresDisease(at))
        this.requires.requiresTherapy$.next(this.requiresTherapy(at))
        this.requires.requiresClingenCodes$.next(this.requiresClingenCodes(at))
        this.requires.requiresAcmgCodes$.next(this.requiresAcmgCodes(at))
        this.requires.requiresAmpLevel$.next(this.requiresAmpLevel(at))
        this.requires.allowsFdaApproval$.next(this.allowsFdaApproval(at))
      })

    this.fields.therapyIds$
      .pipe(untilDestroyed(this, 'onDestroy'))
      .subscribe((ids: Maybe<number[]>) => {
        if (ids === undefined || ids === null) {
          this.requires.requiresTherapyInteractionType$.next(false)
        } else {
          this.requires.requiresTherapyInteractionType$.next(ids.length > 1)
        }
      })

    this.validStates.set(AssertionType.Predictive, {
      entityType: AssertionType.Predictive,
      significance: [
        AssertionSignificance.Sensitivityresponse,
        AssertionSignificance.Resistance,
        AssertionSignificance.AdverseResponse,
        AssertionSignificance.ReducedSensitivity,
        AssertionSignificance.Na,
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport,
      ],
      requiresDisease: true,
      requiresTherapy: true,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true,
      allowsFdaApproval: true,
    })

    this.validStates.set(AssertionType.Diagnostic, {
      entityType: AssertionType.Diagnostic,
      significance: [
        AssertionSignificance.Positive,
        AssertionSignificance.Negative,
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport,
      ],
      requiresDisease: true,
      requiresTherapy: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true,
      allowsFdaApproval: false,
    })

    this.validStates.set(AssertionType.Prognostic, {
      entityType: AssertionType.Prognostic,
      significance: [
        AssertionSignificance.BetterOutcome,
        AssertionSignificance.PoorOutcome,
        AssertionSignificance.Na,
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport,
      ],
      requiresDisease: true,
      requiresTherapy: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true,
      allowsFdaApproval: false,
    })

    this.validStates.set(AssertionType.Predisposing, {
      entityType: AssertionType.Predisposing,
      significance: [
        AssertionSignificance.Pathogenic,
        AssertionSignificance.LikelyPathogenic,
        AssertionSignificance.Benign,
        AssertionSignificance.LikelyBenign,
        AssertionSignificance.UncertainSignificance,
      ],
      entityDirection: [AssertionDirection.Supports],
      requiresDisease: true,
      requiresTherapy: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: true,
      requiresAmpLevel: false,
      allowsFdaApproval: false,
    })

    this.validStates.set(AssertionType.Oncogenic, {
      entityType: AssertionType.Oncogenic,
      significance: [
        AssertionSignificance.Oncogenic,
        AssertionSignificance.LikelyOncogenic,
        AssertionSignificance.Benign,
        AssertionSignificance.LikelyBenign,
        AssertionSignificance.UncertainSignificance,
      ],
      entityDirection: [AssertionDirection.Supports],
      requiresDisease: true,
      requiresTherapy: false,
      requiresClingenCodes: true,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false,
    })
  }
}

export { AssertionState }
