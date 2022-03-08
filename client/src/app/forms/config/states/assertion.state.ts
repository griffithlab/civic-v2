import {
  AssertionClinicalSignificance,
  AssertionDirection,
  AssertionType,
} from "@app/generated/civic.apollo";
import { EntityState } from "./entity.state";

class AssertionState extends EntityState {
  constructor() {
    super();
    this.validStates.set(AssertionType.Predictive, {
      entityType: AssertionType.Predictive,
      clinicalSignificance: [
        AssertionClinicalSignificance.Sensitivityresponse,
        AssertionClinicalSignificance.Resistance,
        AssertionClinicalSignificance.AdverseResponse,
        AssertionClinicalSignificance.ReducedSensitivity,
        AssertionClinicalSignificance.Na,
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: true,
      requiresAcmgCodes: false,
      requiresAmpLevel: true
    });

    this.validStates.set(AssertionType.Diagnostic, {
      entityType: AssertionType.Diagnostic,
      clinicalSignificance: [
        AssertionClinicalSignificance.Positive,
        AssertionClinicalSignificance.Negative,
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true
    });

    this.validStates.set(AssertionType.Prognostic, {
      entityType: AssertionType.Prognostic,
      clinicalSignificance: [
        AssertionClinicalSignificance.BetterOutcome,
        AssertionClinicalSignificance.PoorOutcome,
        AssertionClinicalSignificance.Na
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true
    });

    this.validStates.set(AssertionType.Predisposing, {
      entityType: AssertionType.Predisposing,
      clinicalSignificance: [
        AssertionClinicalSignificance.Pathogenic,
        AssertionClinicalSignificance.LikelyPathogenic,
        AssertionClinicalSignificance.Benign,
        AssertionClinicalSignificance.LikelyBenign,
        AssertionClinicalSignificance.UncertainSignificance,
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport,
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
    });
  }
}

export { AssertionState };
