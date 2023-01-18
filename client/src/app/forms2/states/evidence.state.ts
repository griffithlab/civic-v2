import {
  TherapyInteraction,
  EvidenceSignificance,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceType,
  Maybe,
  VariantOrigin,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import { BehaviorSubject } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import { CvcInputEnum } from '../forms2.types'
import { evidenceItemSubmitFieldsDefaults } from '../models/evidence-submit.model'
import { EntityName, BaseState } from './base.state'

export type EvidenceFields = {
  geneId$: BehaviorSubject<Maybe<number>>
  variantId$: BehaviorSubject<Maybe<number>>
  variantOrigin$: BehaviorSubject<Maybe<VariantOrigin>>
  evidenceType$: BehaviorSubject<Maybe<EvidenceType>>
  evidenceLevel$: BehaviorSubject<Maybe<EvidenceLevel>>
  evidenceDirection$: BehaviorSubject<Maybe<EvidenceDirection>>
  significance$: BehaviorSubject<Maybe<EvidenceSignificance>>
  diseaseId$: BehaviorSubject<Maybe<number>>
  drugIds$: BehaviorSubject<Maybe<number[]>>
  therapyInteractionType$: BehaviorSubject<Maybe<TherapyInteraction>>
  rating$: BehaviorSubject<Maybe<number>>
  sourceId$: BehaviorSubject<Maybe<number>>
  phenotypeIds$: BehaviorSubject<Maybe<number[]>>
}

export type EvidenceEnums = {
  entityType$: BehaviorSubject<CvcInputEnum[]>
  significance$: BehaviorSubject<CvcInputEnum[]>
  direction$: BehaviorSubject<CvcInputEnum[]>
  interaction$: BehaviorSubject<CvcInputEnum[]>
}

export type EvidenceRequires = {
  requiresDisease$: BehaviorSubject<boolean>
  requiresDrug$: BehaviorSubject<boolean>
  requiresTherapyInteraction$: BehaviorSubject<boolean>
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
      geneId$: new BehaviorSubject<Maybe<number>>(def.geneId),
      variantId$: new BehaviorSubject<Maybe<number>>(def.variantId),
      evidenceType$: new BehaviorSubject<Maybe<EvidenceType>>(def.evidenceType),
      evidenceLevel$: new BehaviorSubject<Maybe<EvidenceLevel>>(
        def.evidenceLevel
      ),
      evidenceDirection$: new BehaviorSubject<Maybe<EvidenceDirection>>(
        def.evidenceDirection
      ),
      significance$: new BehaviorSubject<
        Maybe<EvidenceSignificance>
      >(def.significance),
      variantOrigin$: new BehaviorSubject<Maybe<VariantOrigin>>(
        def.variantOrigin
      ),
      diseaseId$: new BehaviorSubject<Maybe<number>>(def.diseaseId),
      drugIds$: new BehaviorSubject<Maybe<number[]>>(def.drugIds),
      therapyInteractionType$: new BehaviorSubject<Maybe<TherapyInteraction>>(
        def.therapyInteractionType
      ),
      rating$: new BehaviorSubject<Maybe<number>>(def.rating),
      phenotypeIds$: new BehaviorSubject<Maybe<number[]>>(def.phenotypeIds),
      sourceId$: new BehaviorSubject<Maybe<number>>(def.sourceId),
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
      requiresDrug$: new BehaviorSubject<boolean>(false),
      requiresTherapyInteraction$: new BehaviorSubject<boolean>(false),
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
        this.requires.requiresDrug$.next(this.requiresDrug(et))
        this.requires.requiresClingenCodes$.next(this.requiresClingenCodes(et))
        this.requires.requiresAcmgCodes$.next(this.requiresAcmgCodes(et))
        this.requires.allowsFdaApproval$.next(this.allowsFdaApproval(et))
      })

    this.fields.drugIds$
      .pipe(untilDestroyed(this, 'onDestroy'))
      .subscribe((ids: Maybe<number[]>) => {
        if (!ids) {
          this.requires.requiresTherapyInteraction$.next(false)
        } else {
          this.requires.requiresTherapyInteraction$.next(ids.length > 1)
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
      requiresDrug: true,
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
      requiresDrug: false,
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
      requiresDrug: false,
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
      requiresDrug: false,
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
      requiresDrug: false,
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
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresClingenCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false,
    })
  }
}

export { EvidenceState }
