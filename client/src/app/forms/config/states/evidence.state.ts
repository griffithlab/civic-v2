import {
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceType,
} from "@app/generated/civic.apollo";
import { EntityName, EntityState } from "./entity.state";

class EvidenceState extends EntityState {
  constructor() {
    super(EntityName.EVIDENCE);
    this.validStates.set(EvidenceType.Predictive, {
      entityType: EvidenceType.Predictive,
      clinicalSignificance: [
        EvidenceClinicalSignificance.Sensitivityresponse,
        EvidenceClinicalSignificance.Resistance,
        EvidenceClinicalSignificance.AdverseResponse,
        EvidenceClinicalSignificance.ReducedSensitivity,
        EvidenceClinicalSignificance.Na,
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: true,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });

    this.validStates.set(EvidenceType.Diagnostic, {
      entityType: EvidenceType.Diagnostic,
      clinicalSignificance: [
        EvidenceClinicalSignificance.Positive,
        EvidenceClinicalSignificance.Negative,
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });

    this.validStates.set(EvidenceType.Prognostic, {
      entityType: EvidenceType.Prognostic,
      clinicalSignificance: [
        EvidenceClinicalSignificance.BetterOutcome,
        EvidenceClinicalSignificance.PoorOutcome,
        EvidenceClinicalSignificance.Na
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });

    this.validStates.set(EvidenceType.Oncogenic, {
      entityType: EvidenceType.Oncogenic,
      clinicalSignificance: [
        EvidenceClinicalSignificance.Na,
      ],
      entityDirection: [
        EvidenceDirection.Na,
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });

    this.validStates.set(EvidenceType.Predisposing, {
      entityType: EvidenceType.Predisposing,
      clinicalSignificance: [
        EvidenceClinicalSignificance.Na,
      ],
      entityDirection: [
        EvidenceDirection.Na,
      ],
      requiresDisease: true,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });

    this.validStates.set(EvidenceType.Functional, {
      entityType: EvidenceType.Functional,
      clinicalSignificance: [
        EvidenceClinicalSignificance.GainOfFunction,
        EvidenceClinicalSignificance.LossOfFunction,
        EvidenceClinicalSignificance.UnalteredFunction,
        EvidenceClinicalSignificance.Neomorphic,
        EvidenceClinicalSignificance.DominantNegative,
        EvidenceClinicalSignificance.Unknown,
      ],
      entityDirection: [
        EvidenceDirection.Supports,
        EvidenceDirection.DoesNotSupport
      ],
      requiresDisease: false,
      requiresDrug: false,
      requiresAcmgCodes: false,
      requiresAmpLevel: false,
      allowsFdaApproval: false
    });
  }
}

export { EvidenceState };
