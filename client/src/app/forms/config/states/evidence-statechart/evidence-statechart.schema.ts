// based on: https://github.com/stefanoslig/xstate-angular/blob/main/apps/conduit/src/app/article-list/%2Bxstate/article-list-machine.schema.ts
import { EvidenceClinicalSignificance, EvidenceDirection } from "@app/generated/civic.apollo";

export interface EvidenceStatechartSchema {
  states: {
    unspecified: {
      // gene, variant, source unspecified
      states: {
        gene: {};
        variant: {};
        source: {};
      }
    };
    specified: {
     // gene, variant, source specified
      state: {
        duplicates: {};
        unique: {};
      }
    };
    evidencetype: {
      states: {
        diagnostic: {};
        functional: {};
        oncogenic: {};
        predictive: {};
        predisposing: {};
        prognostic: {};
      }
    };
    drug: {
      states: {
        single: {};
        combination: {};
      }
    };
  };
}

export interface EvidenceStatechartContext {
  significanceOptions: EvidenceClinicalSignificance[];
  directionOptions: EvidenceDirection[];
  diseaseRequired: boolean;
  drugRequired: boolean;
  drugInteractionRequired: boolean;
}
