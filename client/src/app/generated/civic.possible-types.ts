
      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "ActivityInterface": [
      "AcceptRevisionsActivity",
      "CommentActivity",
      "CreateComplexMolecularProfileActivity",
      "CreateFeatureActivity",
      "CreateVariantActivity",
      "DeprecateComplexMolecularProfileActivity",
      "DeprecateFeatureActivity",
      "DeprecateVariantActivity",
      "FlagEntityActivity",
      "ModerateAssertionActivity",
      "ModerateEvidenceItemActivity",
      "RejectRevisionsActivity",
      "ResolveFlagActivity",
      "SubmitAssertionActivity",
      "SubmitEvidenceItemActivity",
      "SuggestRevisionSetActivity",
      "SuggestSourceActivity",
      "UpdateSourceSuggestionStatusActivity"
    ],
    "CommentBodySegment": [
      "CommentTagSegment",
      "CommentTextSegment",
      "User"
    ],
    "Commentable": [
      "Assertion",
      "EvidenceItem",
      "Factor",
      "FactorVariant",
      "Feature",
      "Flag",
      "Gene",
      "GeneVariant",
      "MolecularProfile",
      "Revision",
      "Source",
      "SourcePopover",
      "Variant",
      "VariantGroup"
    ],
    "EventOriginObject": [
      "Assertion",
      "Comment",
      "EvidenceItem",
      "Factor",
      "FactorVariant",
      "Feature",
      "Flag",
      "Gene",
      "GeneVariant",
      "MolecularProfile",
      "Revision",
      "SourceSuggestion",
      "Variant"
    ],
    "EventSubject": [
      "Assertion",
      "EvidenceItem",
      "Factor",
      "FactorVariant",
      "Feature",
      "Flag",
      "Gene",
      "GeneVariant",
      "MolecularProfile",
      "Revision",
      "RevisionSet",
      "Source",
      "SourcePopover",
      "SourceSuggestion",
      "Variant",
      "VariantGroup"
    ],
    "FeatureInstance": [
      "Factor",
      "Gene"
    ],
    "Flaggable": [
      "Assertion",
      "BrowseFeature",
      "EvidenceItem",
      "Factor",
      "FactorVariant",
      "Feature",
      "Gene",
      "GeneVariant",
      "MolecularProfile",
      "Variant",
      "VariantGroup"
    ],
    "ModeratedField": [
      "ObjectField",
      "ScalarField"
    ],
    "ModeratedFieldDiff": [
      "ObjectFieldDiff",
      "ScalarFieldDiff"
    ],
    "MolecularProfileComponent": [
      "Factor",
      "FactorVariant",
      "Feature",
      "Gene",
      "GeneVariant",
      "Variant"
    ],
    "MolecularProfileSegment": [
      "Feature",
      "MolecularProfileTextSegment",
      "Variant"
    ],
    "VariantInterface": [
      "FactorVariant",
      "GeneVariant",
      "Variant"
    ],
    "WithRevisions": [
      "Assertion",
      "EvidenceItem",
      "Factor",
      "FactorVariant",
      "Feature",
      "Gene",
      "GeneVariant",
      "MolecularProfile",
      "Variant",
      "VariantGroup"
    ]
  }
};
      export default result;
    