
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
      "DeleteCommentActivity",
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
      "CommentTagSegmentFlagged",
      "CommentTagSegmentFlaggedAndDeprecated",
      "CommentTagSegmentFlaggedAndWithStatus",
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
      "Fusion",
      "FusionVariant",
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
      "Fusion",
      "FusionVariant",
      "Gene",
      "GeneVariant",
      "MolecularProfile",
      "Revision",
      "SourceSuggestion",
      "Variant"
    ],
    "EventSubject": [
      "Assertion",
      "Comment",
      "EvidenceItem",
      "ExonCoordinate",
      "Factor",
      "FactorVariant",
      "Feature",
      "Flag",
      "Fusion",
      "FusionVariant",
      "Gene",
      "GeneVariant",
      "MolecularProfile",
      "Revision",
      "RevisionSet",
      "Source",
      "SourcePopover",
      "SourceSuggestion",
      "Variant",
      "VariantCoordinate",
      "VariantGroup"
    ],
    "FeatureInstance": [
      "Factor",
      "Fusion",
      "Gene"
    ],
    "Flaggable": [
      "Assertion",
      "BrowseFeature",
      "EvidenceItem",
      "Factor",
      "FactorVariant",
      "Feature",
      "Fusion",
      "FusionVariant",
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
      "Fusion",
      "FusionVariant",
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
      "FusionVariant",
      "GeneVariant",
      "Variant"
    ],
    "WithRevisions": [
      "Assertion",
      "EvidenceItem",
      "ExonCoordinate",
      "Factor",
      "FactorVariant",
      "Feature",
      "Fusion",
      "FusionVariant",
      "Gene",
      "GeneVariant",
      "MolecularProfile",
      "Variant",
      "VariantCoordinate",
      "VariantGroup"
    ]
  }
};
      export default result;
    