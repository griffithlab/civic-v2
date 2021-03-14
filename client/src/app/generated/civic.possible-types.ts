
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
        "name": "ModeratedField",
        "possibleTypes": [
          {
            "name": "ObjectField"
          },
          {
            "name": "ScalarField"
          }
        ]
      }
    ]
  }
};
      export default result;
    