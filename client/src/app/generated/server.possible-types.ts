
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
            "name": "Variant"
          }
        ]
      },
      {
        "kind": "INTERFACE",
        "name": "EventOriginObject",
        "possibleTypes": [
          {
            "name": "Comment"
          },
          {
            "name": "Flag"
          },
          {
            "name": "Revision"
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
            "name": "Variant"
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
            "name": "ScalarField"
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
          }
        ]
      }
    ]
  }
};
      export default result;
    