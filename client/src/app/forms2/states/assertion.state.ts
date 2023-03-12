import {
  AssertionSignificance,
  AssertionDirection,
  AssertionType,
  Maybe,
} from '@app/generated/civic.apollo'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { BehaviorSubject } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import { CvcInputEnum } from '../forms2.types'
import { assertionSubmitFieldsDefaults } from '../models/assertion-submit.model'
import { EntityName, BaseState } from './base.state'

class AssertionState extends BaseState {
  constructor() {
    super(EntityName.ASSERTION)
    const def = assertionSubmitFieldsDefaults

    this.fields = {
      geneId$: new BehaviorSubject<Maybe<number>>(def.geneId),
      variantId$: new BehaviorSubject<Maybe<number>>(def.variantId),
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
      drugId$: new BehaviorSubject<Maybe<number>>(def.drugId),
    }

    this.enums = {
      entityType$: new BehaviorSubject<CvcInputEnum[]>(this.getTypeOptions()),
      significance$: new BehaviorSubject<CvcInputEnum[]>([]),
      direction$: new BehaviorSubject<CvcInputEnum[]>([]),
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
    this.requires.requiresDisease$.pipe(tag('requiresDisease$')).subscribe()
    // ASSERTION TYPE SUBSCRIBERS
    // TODO: determine best way to cleanup & unsubscribe from these subscriptions
    this.fields.assertionType$.subscribe((at: Maybe<AssertionType>) => {
      if (!at) {
        // set all 'requires' fields to false, non-type enums to []
        Object.entries(this.requires).forEach(([key, value]) => {
          value.next(false)
        })
        this.enums.significance$.next([])
        this.enums.direction$.next([])
        return
      }

      const significanceEnums = this.getSignificanceOptions(at)
      this.enums.significance$.next(significanceEnums)
      this.options.significanceOption$.next(
        this.getOptionsFromEnums(this.getSignificanceOptions(at))
      )
      const directionEnums = this.getDirectionOptions(at)
      this.enums.direction$.next(directionEnums)
      this.options.directionOption$.next(
        this.getOptionsFromEnums(this.getDirectionOptions(at))
      )
      this.requires.requiresDisease$.next(this.requiresDisease(at))
      this.requires.requiresTherapy$.next(this.requiresTherapy(at))
      this.requires.requiresClingenCodes$.next(this.requiresClingenCodes(at))
      this.requires.requiresAcmgCodes$.next(this.requiresAcmgCodes(at))
      this.requires.allowsFdaApproval$.next(this.allowsFdaApproval(at))
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
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport,
      ],
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
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport,
      ],
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
