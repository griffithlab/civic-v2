import {
  EvidenceDirection,
  EvidenceLevel,
  EvidenceSignificance,
  EvidenceType,
  Maybe,
  MolecularProfile,
  TherapyInteraction,
  VariantOrigin,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import { BehaviorSubject } from 'rxjs'
import { CvcInputEnum } from '../forms.types'
import { evidenceItemSubmitFieldsDefaults } from '../models/evidence-submit.model'
import { BaseState, EntityName } from './base.state'

export type EvidenceFields = {
  molecularProfileId$: BehaviorSubject<Maybe<number>>
  featureId$: BehaviorSubject<Maybe<number>>
  variantId$: BehaviorSubject<Maybe<number>>
  variantMolecularProfile$: BehaviorSubject<Maybe<MolecularProfile>>
  variantOrigin$: BehaviorSubject<Maybe<VariantOrigin>>
  evidenceType$: BehaviorSubject<Maybe<EvidenceType>>
  evidenceLevel$: BehaviorSubject<Maybe<EvidenceLevel>>
  evidenceDirection$: BehaviorSubject<Maybe<EvidenceDirection>>
  significance$: BehaviorSubject<Maybe<EvidenceSignificance>>
  diseaseId$: BehaviorSubject<Maybe<number>>
  therapyIds$: BehaviorSubject<Maybe<number[]>>
  therapyInteractionType$: BehaviorSubject<Maybe<TherapyInteraction>>
  rating$: BehaviorSubject<Maybe<number>>
  sourceId$: BehaviorSubject<Maybe<number>>
  phenotypeIds$: BehaviorSubject<Maybe<number[]>>
  description$: BehaviorSubject<Maybe<string>>
  comment$: BehaviorSubject<Maybe<string>>
}

export type EvidenceEnums = {
  entityType$: BehaviorSubject<CvcInputEnum[]>
  significance$: BehaviorSubject<CvcInputEnum[]>
  direction$: BehaviorSubject<CvcInputEnum[]>
  interaction$: BehaviorSubject<CvcInputEnum[]>
}

export type EvidenceRequires = {
  requiresDisease$: BehaviorSubject<boolean>
  requiresTherapy$: BehaviorSubject<boolean>
  requiresTherapyInteractionType$: BehaviorSubject<boolean>
  requiresClingenCodes$: BehaviorSubject<boolean>
  requiresAcmgCodes$: BehaviorSubject<boolean>
  requiresAmpLevel$: BehaviorSubject<boolean>
  allowsFdaApproval$: BehaviorSubject<boolean>
}

class EvidenceState extends BaseState {
  fields: EvidenceFields
  enums: EvidenceEnums
  requires: EvidenceRequires

  constructor() {
    super(EntityName.EVIDENCE)

    const def = evidenceItemSubmitFieldsDefaults

    this.fields = {
      molecularProfileId$: new BehaviorSubject<Maybe<number>>(
        def.molecularProfileId
      ),
      variantId$: new BehaviorSubject<Maybe<number>>(def.variantId),
      variantMolecularProfile$: new BehaviorSubject<Maybe<MolecularProfile>>(
        undefined
      ),
      featureId$: new BehaviorSubject<Maybe<number>>(def.featureId),
      evidenceType$: new BehaviorSubject<Maybe<EvidenceType>>(def.evidenceType),
      evidenceLevel$: new BehaviorSubject<Maybe<EvidenceLevel>>(
        def.evidenceLevel
      ),
      evidenceDirection$: new BehaviorSubject<Maybe<EvidenceDirection>>(
        def.evidenceDirection
      ),
      significance$: new BehaviorSubject<Maybe<EvidenceSignificance>>(
        def.significance
      ),
      variantOrigin$: new BehaviorSubject<Maybe<VariantOrigin>>(
        def.variantOrigin
      ),
      diseaseId$: new BehaviorSubject<Maybe<number>>(def.diseaseId),
      therapyIds$: new BehaviorSubject<Maybe<number[]>>(def.therapyIds),
      therapyInteractionType$: new BehaviorSubject<Maybe<TherapyInteraction>>(
        def.therapyInteractionType
      ),
      rating$: new BehaviorSubject<Maybe<number>>(def.rating),
      phenotypeIds$: new BehaviorSubject<Maybe<number[]>>(def.phenotypeIds),
      sourceId$: new BehaviorSubject<Maybe<number>>(def.sourceId),
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

    this.requires = {
      requiresDisease$: new BehaviorSubject<boolean>(false),
      requiresTherapy$: new BehaviorSubject<boolean>(false),
      requiresTherapyInteractionType$: new BehaviorSubject<boolean>(false),
      requiresClingenCodes$: new BehaviorSubject<boolean>(false),
      requiresAcmgCodes$: new BehaviorSubject<boolean>(false),
      requiresAmpLevel$: new BehaviorSubject<boolean>(false),
      allowsFdaApproval$: new BehaviorSubject<boolean>(false),
    }

    this.fields.evidenceType$
      .pipe(
        // tag('evidence.state evidentType$'),
        untilDestroyed(this, 'onDestroy')
      )
      .subscribe((et: Maybe<EvidenceType>) => {
        if (!et) {
          // set all 'requires' fields to false, non-type enums to []
          Object.entries(this.requires).forEach(([key, value]) => {
            value.next(false)
          })
          this.enums.significance$.next([])
          this.enums.direction$.next([])
          return
        }
        this.enums.significance$.next(this.getSignificanceOptions(et))
        this.enums.direction$.next(this.getDirectionOptions(et))

        this.requires.requiresDisease$.next(this.requiresDisease(et))
        this.requires.requiresTherapy$.next(this.requiresTherapy(et))
        this.requires.requiresTherapyInteractionType$.next(
          this.requiresTherapy(et)
        )
        this.requires.requiresClingenCodes$.next(this.requiresClingenCodes(et))
        this.requires.requiresAcmgCodes$.next(this.requiresAcmgCodes(et))
        this.requires.allowsFdaApproval$.next(this.allowsFdaApproval(et))
      })

    this.fields.therapyIds$
      .pipe(untilDestroyed(this, 'onDestroy'))
      .subscribe((ids: Maybe<number[]>) => {
        if (!ids) {
          this.requires.requiresTherapyInteractionType$.next(false)
        } else {
          this.requires.requiresTherapyInteractionType$.next(ids.length > 1)
        }
      })

    this.validStates.set(EvidenceType.Predictive, {
      entityType: EvidenceType.Predictive,
      significance: [
        EvidenceSignificance.Sensitivityresponse,
        EvidenceSignificance.Resistance,
        EvidenceSignificance.AdverseResponse,
        EvidenceSignificance.ReducedSensitivity,
        EvidenceSignificance.Na,
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport,
      ],
      requiresDisease: true,
      requiresTherapy: true,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false,
    })

    this.validStates.set(EvidenceType.Diagnostic, {
      entityType: EvidenceType.Diagnostic,
      significance: [
        EvidenceSignificance.Positive,
        EvidenceSignificance.Negative,
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport,
      ],
      requiresDisease: true,
      requiresTherapy: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false,
    })

    this.validStates.set(EvidenceType.Prognostic, {
      entityType: EvidenceType.Prognostic,
      significance: [
        EvidenceSignificance.BetterOutcome,
        EvidenceSignificance.PoorOutcome,
        EvidenceSignificance.Na,
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport,
      ],
      requiresDisease: true,
      requiresTherapy: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false,
    })

    this.validStates.set(EvidenceType.Oncogenic, {
      entityType: EvidenceType.Oncogenic,
      significance: [
        EvidenceSignificance.Oncogenicity,
        EvidenceSignificance.Protectiveness,
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport,
      ],
      requiresDisease: true,
      requiresTherapy: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false,
    })

    this.validStates.set(EvidenceType.Predisposing, {
      entityType: EvidenceType.Predisposing,
      significance: [
        EvidenceSignificance.Predisposition,
        EvidenceSignificance.Protectiveness,
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport,
      ],
      requiresDisease: true,
      requiresTherapy: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false,
    })

    this.validStates.set(EvidenceType.Functional, {
      entityType: EvidenceType.Functional,
      significance: [
        EvidenceSignificance.GainOfFunction,
        EvidenceSignificance.LossOfFunction,
        EvidenceSignificance.UnalteredFunction,
        EvidenceSignificance.Neomorphic,
        EvidenceSignificance.DominantNegative,
        EvidenceSignificance.Unknown,
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport,
      ],
      requiresDisease: false,
      requiresTherapy: false,
      requiresAcmgCodes: false,
      requiresClingenCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false,
    })
  }
}

export { EvidenceState }
