
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "UNION",
        "name": "CommentBodySegment",
        "possibleTypes": [
          {
            "name": "CommentTagSegment"
          },
          {
            "name": "CommentTextSegment"
          },
          {
            "name": "User"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Commentable",
        "possibleTypes": [
          {
            "name": "Assertion"
          },
          {
            "name": "EvidenceItem"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Gene"
          },
          {
            "name": "Revision"
          },
          {
            "name": "Variant"
          },
          {
            "name": "VariantGroup"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "EventOriginObject",
        "possibleTypes": [
          {
            "name": "Assertion"
          },
          {
            "name": "Comment"
          },
          {
            "name": "EvidenceItem"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Revision"
          },
          {
            "name": "SourceSuggestion"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "EventSubject",
        "possibleTypes": [
          {
            "name": "Assertion"
          },
          {
            "name": "EvidenceItem"
          },
          {
            "name": "Gene"
          },
          {
            "name": "Revision"
          },
          {
            "name": "Source"
          },
          {
            "name": "SourcePopover"
          },
          {
            "name": "SourceSuggestion"
          },
          {
            "name": "Variant"
          },
          {
            "name": "VariantGroup"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "Flaggable",
        "possibleTypes": [
          {
            "name": "Assertion"
          },
          {
            "name": "EvidenceItem"
          },
          {
            "name": "Gene"
          },
          {
            "name": "Variant"
          },
          {
            "name": "VariantGroup"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ModeratedField",
        "possibleTypes": [
          {
            "name": "ObjectField"
          },
          {
            "name": "ScalarField"
          }
        ]
      },
      {
        "kind": "UNION",
        "name": "ModeratedFieldDiff",
        "possibleTypes": [
          {
            "name": "ObjectFieldDiff"
          },
          {
            "name": "ScalarFieldDiff"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "WithRevisions",
        "possibleTypes": [
          {
            "name": "Assertion"
          },
          {
            "name": "EvidenceItem"
          },
          {
            "name": "Gene"
          },
          {
            "name": "Variant"
          },
          {
            "name": "VariantGroup"
          }
        ]
      }
    ]
  }
};
      export default result;
    