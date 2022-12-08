import {
  AssertionSignificance,
  AssertionDirection,
  AssertionType,
} from "@app/generated/civic.apollo";
import { EntityName, EntityState } from "./entity.state";

class AssertionState extends EntityState {
  constructor() {
    super(EntityName.ASSERTION);
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
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: true,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true,
      allowsFdaApproval: true
    });

    this.validStates.set(AssertionType.Diagnostic, {
      entityType: AssertionType.Diagnostic,
      significance: [
        AssertionSignificance.Positive,
        AssertionSignificance.Negative,
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true,
      allowsFdaApproval: false
    });

    this.validStates.set(AssertionType.Prognostic, {
      entityType: AssertionType.Prognostic,
      significance: [
        AssertionSignificance.BetterOutcome,
        AssertionSignificance.PoorOutcome,
        AssertionSignificance.Na
      ],
      entityDirection: [
        AssertionDirection.Supports,
        AssertionDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: true,
      allowsFdaApproval: false
    });

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
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: true,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });

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
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresClingenCodes: true,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });
  }
}

export { AssertionState };
