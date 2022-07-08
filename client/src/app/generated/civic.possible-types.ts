
      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
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
      "Revision",
      "SourceSuggestion",
      "Variant"
    ],
    "EventSubject": [
      "Assertion",
      "EvidenceItem",
      "Gene",
      "Revision",
      "Source",
      "SourcePopover",
      "SourceSuggestion",
      "Variant",
      "VariantGroup"
    ],
    "Flaggable": [
      "Assertion",
      "EvidenceItem",
      "Gene",
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
    "WithRevisions": [
      "Assertion",
      "EvidenceItem",
      "Gene",
      "Variant",
      "VariantGroup"
    ]
  }
};
      export default result;
    