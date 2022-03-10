import {
  AssertionClinicalSignificance,
  AssertionDirection,
  AssertionType,
} from "@app/generated/civic.apollo";
import { EntityName, EntityState } from "./entity.state";

class AssertionState extends EntityState {
  constructor() {
    super(EntityName.ASSERTION);
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
      requiresAmpLevel: true,
      allowsFdaApproval: true
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
      requiresAmpLevel: true,
      allowsFdaApproval: false
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
      requiresAmpLevel: true,
      allowsFdaApproval: false
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
      requiresAcmgCodes: true,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });
  }
}

export { AssertionState };
