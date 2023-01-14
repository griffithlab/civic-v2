// based on:
// https://github.com/stefanoslig/xstate-angular/blob/main/apps/conduit/src/app/article-list/%2Bxstate/article-list-machine.schema.ts

export interface EvidenceStatechartSchema {
  states: {
    // located if gene, variant, source specified
    located: {
      states: {
        // identified if located & origin, type, disease, drug specified
        identified: {
          states: {
            // characterized if identified & all required fields are specified
            characterized: {
              states: {
                // parallel state
                // complete if characterized & all optional fields specified
                complete: {};
                curated: {
                  states: {
                    pending: {};
                    approved: {};
                    rejected: {};
                    revised: {};
                  };
                };
              };
            };
          };
        };
      };
    };
  };
}

export interface EvidenceStatechartContext {
  evidence: {
    hasGene: boolean;
    hasVariant: boolean;
    hasSource: boolean;

    hasVariantOrigin: boolean;
    hasType: boolean;

    hasDisease: boolean;
    hasDrug: boolean;
    hasMultipleDrugs: boolean;
    hasInteractionType: boolean;

    hasSignificance: boolean;
    hasDirection: boolean;
    hasLevel: boolean;
    hasRating: boolean;

    hasPhenotype: boolean;
  };
  curation: {
    isLocated: boolean;
    isIdentified: boolean;
    isCharacterized: boolean;
    isComplete: boolean;
    isCurated: boolean;
    isSubmitted: boolean;
    isApproved: boolean;
    isRejected: boolean;
    isRevised: boolean;
  };
}
