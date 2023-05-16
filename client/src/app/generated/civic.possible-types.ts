
      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "ActivityInterface": [
      "FlagEntityActivity",
      "ResolveFlagActivity",
      "SubmitEvidenceItemActivity"
    ],
    "CommentBodySegment": [
      "CommentTagSegment",
      "CommentTextSegment",
      "User"
    ],
    "Commentable": [
      "Assertion",
      "EvidenceItem",
      "Flag",
      "Gene",
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
      "Flag",
      "MolecularProfile",
      "Revision",
      "SourceSuggestion",
      "Variant"
    ],
    "EventSubject": [
      "Assertion",
      "EvidenceItem",
      "Gene",
      "MolecularProfile",
      "Revision",
      "Source",
      "SourcePopover",
      "SourceSuggestion",
      "Variant",
      "VariantGroup"
    ],
    "Flaggable": [
      "Assertion",
      "BrowseGene",
      "EvidenceItem",
      "Gene",
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
      "Gene",
      "Variant"
    ],
    "MolecularProfileSegment": [
      "Gene",
      "MolecularProfileTextSegment",
      "Variant"
    ],
    "WithRevisions": [
      "Assertion",
      "EvidenceItem",
      "Gene",
      "MolecularProfile",
      "Variant",
      "VariantGroup"
    ]
  }
};
      export default result;
    