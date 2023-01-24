import {
  EvidenceSignificance,
  EvidenceDirection,
  EvidenceType,
} from "@app/generated/civic.apollo";
import { EntityName, EntityState } from "./entity.state";

class EvidenceState extends EntityState {
  constructor() {
    super(EntityName.EVIDENCE);
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
        EvidenceDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: true,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });

    this.validStates.set(EvidenceType.Diagnostic, {
      entityType: EvidenceType.Diagnostic,
      significance: [
        EvidenceSignificance.Positive,
        EvidenceSignificance.Negative,
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });

    this.validStates.set(EvidenceType.Prognostic, {
      entityType: EvidenceType.Prognostic,
      significance: [
        EvidenceSignificance.BetterOutcome,
        EvidenceSignificance.PoorOutcome,
        EvidenceSignificance.Na
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresClingenCodes: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });

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
      allowsFdaApproval: false
    });

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
      allowsFdaApproval: false
    });

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
        EvidenceDirection.DoesNotSupport
      ],
      requiresDisease: false,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresClingenCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });
  }
}

export { EvidenceState };
