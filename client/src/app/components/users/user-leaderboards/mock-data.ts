// import { UserEdge } from '@app/generated/civic.apollo'

// interface IDeepPartialArray<T> extends Array<DeepPartial<T>> {}

// type DeepPartialObject<T> = {
//   [Key in keyof T]?: DeepPartial<T[Key]>
// }

// export type DeepPartial<T> = T extends Function
//   ? T
//   : T extends Array<infer U>
//   ? IDeepPartialArray<U>
//   : T extends object
//   ? DeepPartialObject<T>
//   : T | undefined

export const userList: any[] = [
  {
    cursor: 'MQ',
    node: {
      id: 2,
      name: 'Joshua McMichael',
      displayName: 'JoshMcMichael',
      organizations: [
        {
          id: 1,
          name: 'The McDonnell Genome Institute',
          __typename: 'Organization',
        },
        {
          id: 12,
          name: 'Washington University in Saint Louis',
          __typename: 'Organization',
        },
      ],
      role: 'ADMIN',
      statsHash: {
        submittedEvidenceItems: 1,
        revisions: 6,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhibk15TlhwdmJEVjFjbXBxTUhoeU9XRjFOblYzT0hweGJuVTRkQVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpJdWFuQm5JanNnWm1sc1pXNWhiV1VxUFZWVVJpMDRKeWN5TG1wd1p3WTdCbFE2RVdOdmJuUmxiblJmZEhsd1pVa2lEMmx0WVdkbEwycHdaV2NHT3daVU9oRnpaWEoyYVdObFgyNWhiV1U2Q214dlkyRnMiLCJleHAiOiIyMDIzLTA4LTEwVDE2OjEyOjUxLjc3MloiLCJwdXIiOiJibG9iX2tleSJ9fQ==--223338fc3abe1ab12d9f9d357502d54320268fb6/2.jpg',
      mostRecentActionTimestamp: '2023-07-24T19:34:28Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'NQ',
    node: {
      id: 1053,
      name: 'Jason Saliba',
      displayName: 'JasonSaliba',
      organizations: [
        {
          id: 1,
          name: 'The McDonnell Genome Institute',
          __typename: 'Organization',
        },
        {
          id: 12,
          name: 'Washington University in Saint Louis',
          __typename: 'Organization',
        },
        {
          id: 13,
          name: 'FGFR SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 11,
          name: 'Hematologic Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 14,
          name: 'NTRK SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 9,
          name: 'Pediatric Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 16,
          name: 'BCR::ABL1-like B-ALL SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 19,
          name: 'Histone H3 SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
        {
          id: 22,
          name: 'Established Clinical Significance',
          __typename: 'Organization',
        },
      ],
      role: 'ADMIN',
      statsHash: {
        submittedEvidenceItems: 108,
        revisions: 1233,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhZbmRtYTJkek1IUnFablJvYlRCamVXdDVabUV5Tm1vME1tZzJaQVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTzJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpFd05UTXVhbkJuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnljeE1EVXpMbXB3WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraUQybHRZV2RsTDJwd1pXY0dPd1pVT2hGelpYSjJhV05sWDI1aGJXVTZDbXh2WTJGcyIsImV4cCI6IjIwMjMtMDgtMTBUMTY6MTI6NTEuNzI5WiIsInB1ciI6ImJsb2Jfa2V5In19--cb079df7ca56d13a7acc0e9a6d8a1f15b70154e5/1053.jpg',
      mostRecentActionTimestamp: '2023-07-07T17:08:05Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'Ng',
    node: {
      id: 3,
      name: 'Obi Griffith',
      displayName: 'ObiGriffith',
      organizations: [
        {
          id: 12,
          name: 'Washington University in Saint Louis',
          __typename: 'Organization',
        },
        {
          id: 22,
          name: 'Established Clinical Significance',
          __typename: 'Organization',
        },
        {
          id: 16,
          name: 'BCR::ABL1-like B-ALL SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 13,
          name: 'FGFR SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 19,
          name: 'Histone H3 SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 14,
          name: 'NTRK SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 11,
          name: 'Hematologic Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 9,
          name: 'Pediatric Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
      ],
      role: 'ADMIN',
      statsHash: {
        submittedEvidenceItems: 19,
        revisions: 640,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhhamR3TVc1bVpYcHRNalJ5YlRCd1pqVnlaWEkyZURRMFp6bDBid1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpNdWFuQm5JanNnWm1sc1pXNWhiV1VxUFZWVVJpMDRKeWN6TG1wd1p3WTdCbFE2RVdOdmJuUmxiblJmZEhsd1pVa2lEMmx0WVdkbEwycHdaV2NHT3daVU9oRnpaWEoyYVdObFgyNWhiV1U2Q214dlkyRnMiLCJleHAiOiIyMDIzLTA4LTEwVDE2OjEyOjUxLjc3NVoiLCJwdXIiOiJibG9iX2tleSJ9fQ==--2d8f0badb689ccfd80c14f10ec2d0f603085e588/3.jpg',
      mostRecentActionTimestamp: '2023-07-07T16:58:21Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'Nw',
    node: {
      id: 968,
      name: 'Cam Grisdale',
      displayName: 'CamGrisdale',
      organizations: [
        {
          id: 3,
          name: 'BCCA (POGS)',
          __typename: 'Organization',
        },
        {
          id: 19,
          name: 'Histone H3 SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 9,
          name: 'Pediatric Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
        {
          id: 22,
          name: 'Established Clinical Significance',
          __typename: 'Organization',
        },
      ],
      role: 'EDITOR',
      statsHash: {
        submittedEvidenceItems: 525,
        revisions: 2233,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhOamg0WW1KcGJtdHJOWGQ1Yld0bk1tNDFaV1EyYW5sdk0yUTFid1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpT1dsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWprMk9DNXFjR2NpT3lCbWFXeGxibUZ0WlNvOVZWUkdMVGduSnprMk9DNXFjR2NHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWc5cGJXRm5aUzlxY0dWbkJqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6IjIwMjMtMDgtMTBUMTY6MTI6NTEuNzI0WiIsInB1ciI6ImJsb2Jfa2V5In19--1c286e350cd72829d9f4002b1082605d163fb9ea/968.jpg',
      mostRecentActionTimestamp: '2023-07-07T16:44:45Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'OA',
    node: {
      id: 110,
      name: 'Arpad Danos',
      displayName: 'ArpadDanos',
      organizations: [
        {
          id: 11,
          name: 'Hematologic Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 13,
          name: 'FGFR SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 14,
          name: 'NTRK SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 9,
          name: 'Pediatric Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 1,
          name: 'The McDonnell Genome Institute',
          __typename: 'Organization',
        },
        {
          id: 12,
          name: 'Washington University in Saint Louis',
          __typename: 'Organization',
        },
        {
          id: 16,
          name: 'BCR::ABL1-like B-ALL SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 19,
          name: 'Histone H3 SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
        {
          id: 22,
          name: 'Established Clinical Significance',
          __typename: 'Organization',
        },
      ],
      role: 'ADMIN',
      statsHash: {
        submittedEvidenceItems: 399,
        revisions: 1369,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhiSEUxYUhaNk0zVnpZM2xuY0dzemNYWm9kV1IwYjNkNVlUSnllQVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpT1dsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpFeE1DNXFjR2NpT3lCbWFXeGxibUZ0WlNvOVZWUkdMVGduSnpFeE1DNXFjR2NHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWc5cGJXRm5aUzlxY0dWbkJqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6IjIwMjMtMDgtMTBUMTY6MTI6NTEuNzg3WiIsInB1ciI6ImJsb2Jfa2V5In19--fbaa185ebb6a135ad39bed6012d2cb57b594c1cd/110.jpg',
      mostRecentActionTimestamp: '2023-07-07T04:40:19Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'OQ',
    node: {
      id: 6,
      name: 'Kilannin Krysiak',
      displayName: 'kkrysiak',
      organizations: [
        {
          id: 1,
          name: 'The McDonnell Genome Institute',
          __typename: 'Organization',
        },
        {
          id: 12,
          name: 'Washington University in Saint Louis',
          __typename: 'Organization',
        },
        {
          id: 11,
          name: 'Hematologic Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 9,
          name: 'Pediatric Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 16,
          name: 'BCR::ABL1-like B-ALL SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
      ],
      role: 'ADMIN',
      statsHash: {
        submittedEvidenceItems: 248,
        revisions: 3520,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhjMjgzTTJrM2JEWnFiWE55ZG5oek1tVnRPVGR5Ym13eGJISTNjUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpZdWFuQm5JanNnWm1sc1pXNWhiV1VxUFZWVVJpMDRKeWMyTG1wd1p3WTdCbFE2RVdOdmJuUmxiblJmZEhsd1pVa2lEMmx0WVdkbEwycHdaV2NHT3daVU9oRnpaWEoyYVdObFgyNWhiV1U2Q214dlkyRnMiLCJleHAiOiIyMDIzLTA4LTEwVDE2OjEyOjUxLjc3OFoiLCJwdXIiOiJibG9iX2tleSJ9fQ==--4eb44fb29a17087e806f536f34d8f72bd9ab8b8d/6.jpg',
      mostRecentActionTimestamp: '2023-07-07T00:35:00Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MTA',
    node: {
      id: 15,
      name: 'Malachi Griffith',
      displayName: 'MalachiGriffith',
      organizations: [
        {
          id: 1,
          name: 'The McDonnell Genome Institute',
          __typename: 'Organization',
        },
        {
          id: 12,
          name: 'Washington University in Saint Louis',
          __typename: 'Organization',
        },
        {
          id: 13,
          name: 'FGFR SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 19,
          name: 'Histone H3 SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 14,
          name: 'NTRK SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
        {
          id: 22,
          name: 'Established Clinical Significance',
          __typename: 'Organization',
        },
      ],
      role: 'ADMIN',
      statsHash: {
        submittedEvidenceItems: 69,
        revisions: 3257,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhhSGsyZEdKb1ltUnRkSGN3WjJ0dE4zSXdNSGt5YjNNNFozUTJjUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTjJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpFMUxuQnVaeUk3SUdacGJHVnVZVzFsS2oxVlZFWXRPQ2NuTVRVdWNHNW5CanNHVkRvUlkyOXVkR1Z1ZEY5MGVYQmxTU0lPYVcxaFoyVXZjRzVuQmpzR1ZEb1JjMlZ5ZG1salpWOXVZVzFsT2dwc2IyTmhiQT09IiwiZXhwIjoiMjAyMy0wOC0xMFQxNjoxMjo1MS43ODRaIiwicHVyIjoiYmxvYl9rZXkifX0=--b03519d6bbe054ac9f5efc636d0f02b3047d6e0d/15.png',
      mostRecentActionTimestamp: '2023-07-06T22:08:58Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MTE',
    node: {
      id: 1622,
      name: 'Mariam Khanfar',
      displayName: 'MariamKhanfar',
      organizations: [
        {
          id: 12,
          name: 'Washington University in Saint Louis',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 52,
        revisions: 66,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-07-06T17:42:23Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MTI',
    node: {
      id: 2000,
      name: 'Sumir Pandit',
      displayName: 'SumirPandit',
      organizations: [
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 0,
        revisions: 0,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-07-06T10:10:50Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MTM',
    node: {
      id: 662,
      name: 'Laura Corson',
      displayName: 'LauraCorson',
      organizations: [
        {
          id: 9,
          name: 'Pediatric Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 73,
        revisions: 78,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhlVEF5WVhZemNuSmtjR3hyYXpKamIzcHpjMkpuZHpOc2FqZDBkZ1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpVVdsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SW5CeWIyWnBiR1VnY0dodmRHOHlMbXB3WnlJN0lHWnBiR1Z1WVcxbEtqMVZWRVl0T0NjbmNISnZabWxzWlNVeU1IQm9iM1J2TWk1cWNHY0dPd1pVT2hGamIyNTBaVzUwWDNSNWNHVkpJZzlwYldGblpTOXFjR1ZuQmpzR1ZEb1JjMlZ5ZG1salpWOXVZVzFsT2dwc2IyTmhiQT09IiwiZXhwIjoiMjAyMy0wOC0xMFQxNjoxMjo1MS43NTdaIiwicHVyIjoiYmxvYl9rZXkifX0=--2a3c7eeffcbb87d524658aa8f20b34745c501eb9/profile%20photo2.jpg',
      mostRecentActionTimestamp: '2023-07-05T21:13:48Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MTQ',
    node: {
      id: 713,
      name: 'Gordana Raca',
      displayName: 'GordanaRaca',
      organizations: [
        {
          id: 9,
          name: 'Pediatric Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 11,
          name: 'Hematologic Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 14,
          name: 'NTRK SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 16,
          name: 'BCR::ABL1-like B-ALL SC-VCEP',
          __typename: 'Organization',
        },
      ],
      role: 'EDITOR',
      statsHash: {
        submittedEvidenceItems: 59,
        revisions: 212,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-07-05T18:58:48Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MTU',
    node: {
      id: 2007,
      name: 'Kai Lee Yap',
      displayName: 'KaiLeeYap',
      organizations: [],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 0,
        revisions: 5,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-07-05T18:54:54Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MTY',
    node: {
      id: 385,
      name: 'CIViC Bot',
      displayName: 'CIViC_Bot',
      organizations: [],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 0,
        revisions: 7596,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-07-02T00:00:25Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MTc',
    node: {
      id: 2005,
      name: 'Nicholas Beckloff',
      displayName: 'NicholasBeckloff',
      organizations: [],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 2,
        revisions: 0,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-06-30T19:53:25Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MTg',
    node: {
      id: 1415,
      name: 'Ariana Gonzalez',
      displayName: 'ArianaGonzalez',
      organizations: [
        {
          id: 13,
          name: 'FGFR SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 17,
        revisions: 9,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhNVEp4T0hoeGNqbGtaR1o0ZFc5NWNtNHdPV281YlhGbE5HOWlNZ1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTzJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpFME1UVXVhbkJuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnljeE5ERTFMbXB3WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraUQybHRZV2RsTDJwd1pXY0dPd1pVT2hGelpYSjJhV05sWDI1aGJXVTZDbXh2WTJGcyIsImV4cCI6IjIwMjMtMDgtMTBUMTY6MTI6NTEuNzM1WiIsInB1ciI6ImJsb2Jfa2V5In19--72ca3d9826bdf06339189b63fb8bd5fa2bcbbac3/1415.jpg',
      mostRecentActionTimestamp: '2023-06-14T01:24:12Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MTk',
    node: {
      id: 1922,
      name: 'Kori Kuzma',
      displayName: 'korikuzma_1',
      organizations: [],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 0,
        revisions: 7,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-05-16T14:11:03Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MjA',
    node: {
      id: 1974,
      name: 'Connor Frey',
      displayName: 'ConnorFrey',
      organizations: [
        {
          id: 3,
          name: 'BCCA (POGS)',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 103,
        revisions: 49,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhOVFJtWW01bk1tVTNhbU13Y21rNU1uZHpiV2d5YmpWMFkzTnVhUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpUldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWtobFlXUnphRzkwTG1wd1pXY2lPeUJtYVd4bGJtRnRaU285VlZSR0xUZ25KMGhsWVdSemFHOTBMbXB3WldjR093WlVPaEZqYjI1MFpXNTBYM1I1Y0dWSklnOXBiV0ZuWlM5cWNHVm5CanNHVkRvUmMyVnlkbWxqWlY5dVlXMWxPZ3BzYjJOaGJBPT0iLCJleHAiOiIyMDIzLTA4LTEwVDE2OjEyOjUxLjc2MVoiLCJwdXIiOiJibG9iX2tleSJ9fQ==--2cfd27f87fe90929b287ad924e8805d69a21fe53/Headshot.jpeg',
      mostRecentActionTimestamp: '2023-05-15T23:43:40Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MjE',
    node: {
      id: 1189,
      name: 'Laveniya Satgunaseelan',
      displayName: 'LaveniyaSatgunaseelan',
      organizations: [
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 9,
          name: 'Pediatric Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 19,
          name: 'Histone H3 SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
        {
          id: 22,
          name: 'Established Clinical Significance',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 21,
        revisions: 35,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhOVE5sY1dwb09ESnVjR0kyT1cxbE5tRTFjM2w1ZVdVemR6STBhQVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpUzJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWt4VElHaGxZV1J6YUc5MExtcHdaeUk3SUdacGJHVnVZVzFsS2oxVlZFWXRPQ2NuVEZNbE1qQm9aV0ZrYzJodmRDNXFjR2NHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWc5cGJXRm5aUzlxY0dWbkJqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6IjIwMjMtMDgtMTBUMTY6MTI6NTEuNzQ5WiIsInB1ciI6ImJsb2Jfa2V5In19--28c742896186baa5325f1ebb751ac0a2deb67929/LS%20headshot.jpg',
      mostRecentActionTimestamp: '2023-05-10T13:42:27Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MjI',
    node: {
      id: 1443,
      name: 'Cara Reisle',
      displayName: 'CaraReisle',
      organizations: [
        {
          id: 3,
          name: 'BCCA (POGS)',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 87,
        revisions: 92,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhaMkYyZUdSc016VTBOalprYzNJd01tMWhhbkZvYTJScE5HdDBNUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTzJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpFME5ETXVhbkJuSWpzZ1ptbHNaVzVoYldVcVBWVlVSaTA0SnljeE5EUXpMbXB3WndZN0JsUTZFV052Ym5SbGJuUmZkSGx3WlVraUQybHRZV2RsTDJwd1pXY0dPd1pVT2hGelpYSjJhV05sWDI1aGJXVTZDbXh2WTJGcyIsImV4cCI6IjIwMjMtMDgtMTBUMTY6MTI6NTEuNzQwWiIsInB1ciI6ImJsb2Jfa2V5In19--d91af5e28d24a6241b00add4844fd05b52a3dade/1443.jpg',
      mostRecentActionTimestamp: '2023-05-04T16:23:29Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MjM',
    node: {
      id: 971,
      name: 'Erin Pleasance',
      displayName: 'ErinPleasance',
      organizations: [
        {
          id: 3,
          name: 'BCCA (POGS)',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 58,
        revisions: 60,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-04-20T20:46:23Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MjQ',
    node: {
      id: 1,
      name: 'Adam Coffman',
      displayName: 'AdamCoffman',
      organizations: [
        {
          id: 1,
          name: 'The McDonnell Genome Institute',
          __typename: 'Organization',
        },
        {
          id: 12,
          name: 'Washington University in Saint Louis',
          __typename: 'Organization',
        },
      ],
      role: 'ADMIN',
      statsHash: {
        submittedEvidenceItems: 1,
        revisions: 1,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhlblkxYzIxaVkzVnRNR05zWm1ka05IRnFiak55WVhJMmJXbHZhd1k2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpFdWFuQm5JanNnWm1sc1pXNWhiV1VxUFZWVVJpMDRKeWN4TG1wd1p3WTdCbFE2RVdOdmJuUmxiblJmZEhsd1pVa2lEMmx0WVdkbEwycHdaV2NHT3daVU9oRnpaWEoyYVdObFgyNWhiV1U2Q214dlkyRnMiLCJleHAiOiIyMDIzLTA4LTEwVDE2OjEyOjUxLjc2OFoiLCJwdXIiOiJibG9iX2tleSJ9fQ==--a84414a42b0db545817a7718c5dd013a982ee9b8/1.jpg',
      mostRecentActionTimestamp: '2023-04-06T20:46:36Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MjU',
    node: {
      id: 1722,
      name: 'Madina Sukhanova',
      displayName: 'msukhanova',
      organizations: [
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 11,
          name: 'Hematologic Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 9,
          name: 'Pediatric Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 6,
        revisions: 0,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-03-20T16:11:56Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MjY',
    node: {
      id: 952,
      name: 'Ian King',
      displayName: 'IanKing',
      organizations: [
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 13,
          name: 'FGFR SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
        {
          id: 22,
          name: 'Established Clinical Significance',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 7,
        revisions: 0,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-03-10T16:28:20Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'Mjc',
    node: {
      id: 7,
      name: 'Alex Handler Wagner, PhD',
      displayName: 'AlexWagner',
      organizations: [
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 11,
          name: 'Hematologic Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 9,
          name: 'Pediatric Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 15,
          name: 'The Institute for Genomic Medicine',
          __typename: 'Organization',
        },
      ],
      role: 'ADMIN',
      statsHash: {
        submittedEvidenceItems: 25,
        revisions: 153,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhiV0prWTJ0c2RHdHNZMnRvZG1jMGJqQTRkM2hyY21oMU5HSjBkQVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpTldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpjdWFuQm5JanNnWm1sc1pXNWhiV1VxUFZWVVJpMDRKeWMzTG1wd1p3WTdCbFE2RVdOdmJuUmxiblJmZEhsd1pVa2lEMmx0WVdkbEwycHdaV2NHT3daVU9oRnpaWEoyYVdObFgyNWhiV1U2Q214dlkyRnMiLCJleHAiOiIyMDIzLTA4LTEwVDE2OjEyOjUxLjc4MVoiLCJwdXIiOiJibG9iX2tleSJ9fQ==--dc1e3c0434b0754c4cdcf59dbc2f865cf75c8fdb/7.jpg',
      mostRecentActionTimestamp: '2023-03-09T20:30:58Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'Mjg',
    node: {
      id: 1651,
      name: 'Ajay Venigalla',
      displayName: 'AjayVenigalla',
      organizations: [
        {
          id: 12,
          name: 'Washington University in Saint Louis',
          __typename: 'Organization',
        },
        {
          id: 13,
          name: 'FGFR SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 14,
          name: 'NTRK SC-VCEP',
          __typename: 'Organization',
        },
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 26,
        revisions: 1023,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhNV2h4TlhWNE16VmpZM2h3Ym1WbGFYbzVOV3RqYUhNeFlXb3piUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpUldsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWpJeE5EQTFMVEV4T1M1cWNHY2lPeUJtYVd4bGJtRnRaU285VlZSR0xUZ25Kekl4TkRBMUxURXhPUzVxY0djR093WlVPaEZqYjI1MFpXNTBYM1I1Y0dWSklnOXBiV0ZuWlM5cWNHVm5CanNHVkRvUmMyVnlkbWxqWlY5dVlXMWxPZ3BzYjJOaGJBPT0iLCJleHAiOiIyMDIzLTA4LTEwVDE2OjEyOjUxLjc0NFoiLCJwdXIiOiJibG9iX2tleSJ9fQ==--77b0a189603ecf771249856d9b1b9f0d584b441a/21405-119.jpg',
      mostRecentActionTimestamp: '2023-02-22T04:36:54Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'Mjk',
    node: {
      id: 1430,
      name: 'Destiney Allen',
      displayName: 'DestineyBAllen',
      organizations: [
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 11,
          name: 'Hematologic Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 5,
        revisions: 0,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-02-10T17:23:52Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MzA',
    node: {
      id: 1867,
      name: 'Danielle Croucher',
      displayName: 'DanielleCroucher',
      organizations: [],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 0,
        revisions: 1,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-02-10T15:34:16Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MzE',
    node: {
      id: 66,
      name: 'Melika Bonakdar',
      displayName: 'melikar1000!',
      organizations: [
        {
          id: 3,
          name: 'BCCA (POGS)',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 25,
        revisions: 7,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-02-03T00:05:19Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MzI',
    node: {
      id: 1311,
      name: 'Mamta Rao',
      displayName: 'raom',
      organizations: [
        {
          id: 2,
          name: 'ClinGen Somatic ',
          __typename: 'Organization',
        },
        {
          id: 9,
          name: 'Pediatric Cancer Taskforce',
          __typename: 'Organization',
        },
        {
          id: 21,
          name: 'Solid Tumor Taskforce ',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 12,
        revisions: 7,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-01-30T17:24:44Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MzM',
    node: {
      id: 1900,
      name: 'Jimita Toraskar',
      displayName: 'JimitaToraskar',
      organizations: [],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 0,
        revisions: 3,
        __typename: 'Stats',
      },
      profileImagePath:
        'http://127.0.0.1:4200/rails/active_storage/disk/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDVG9JYTJWNVNTSWhkbkZvZFRZMmFtVnRNVFIwYzJrMWVXWTJOemgzZW01bGFuSm5jUVk2QmtWVU9oQmthWE53YjNOcGRHbHZia2tpUzJsdWJHbHVaVHNnWm1sc1pXNWhiV1U5SWs1bGR5QndhV04wZFhKbExtcHdaeUk3SUdacGJHVnVZVzFsS2oxVlZFWXRPQ2NuVG1WM0pUSXdjR2xqZEhWeVpTNXFjR2NHT3daVU9oRmpiMjUwWlc1MFgzUjVjR1ZKSWc5cGJXRm5aUzlxY0dWbkJqc0dWRG9SYzJWeWRtbGpaVjl1WVcxbE9ncHNiMk5oYkE9PSIsImV4cCI6IjIwMjMtMDgtMTBUMTY6MTI6NTEuNzUyWiIsInB1ciI6ImJsb2Jfa2V5In19--e313f3cb5d31277c97bda6e503146c95d44b9d3c/New%20picture.jpg',
      mostRecentActionTimestamp: '2023-01-25T10:00:45Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MzQ',
    node: {
      id: 1371,
      name: 'Sarah Ridd',
      displayName: 'SarahRidd',
      organizations: [
        {
          id: 6,
          name: 'University Health Network (Toronto)',
          __typename: 'Organization',
        },
      ],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 337,
        revisions: 1649,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-01-09T15:24:18Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
  {
    cursor: 'MzU',
    node: {
      id: 1883,
      name: 'Mario Capasso',
      displayName: 'MarioCapasso',
      organizations: [],
      role: 'CURATOR',
      statsHash: {
        submittedEvidenceItems: 2,
        revisions: 0,
        __typename: 'Stats',
      },
      profileImagePath: null,
      mostRecentActionTimestamp: '2023-01-09T10:43:35Z',
      __typename: 'User',
    },
    __typename: 'UserEdge',
  },
]
