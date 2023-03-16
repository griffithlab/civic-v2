import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { CvcInputEnum } from '@app/forms2/forms2.types'
import { EnumWrapper } from 'ts-enum-util'
import { CvcTableFilterOption } from './evidence-manager.types'

// export const evidenceManagerConfig: EvidenceManagerTableConfig = [
//   {
//     key: 'selected',
//     name: 'Select',
//     width: '30px',
//     showSelect: true,

//   },
// ]

// export const evidenceManagerConfig: TableConfig = {
//   selected: {
//     name: 'Select',
//     key: 'selected',
//     hidden: false,
//     width: '30px',
//   },
//   id: {
//     name: 'ID',
//     key: 'id',
//     width: '30px',
//     hidden: true,
//     filter: {
//       options: [{ text: '', value: '' }],
//     },
//   },
//   status: {
//     name: 'Status',
//     key: 'status',
//     width: '40px',
//     hidden: true,
//   },
//   evidenceItem: {
//     name: 'Evidence Item',
//     key: 'evidenceItem',
//     width: '110px',
//     showSort: true,
//     filter: {
//       options: [{ text: 'Search IDs', value: '' }],
//     },
//   },
//   molecularProfile: {
//     name: 'Molecular Profile',
//     key: 'molecularProfile',
//     width: '250px',
//     filter: {
//       options: [{ text: 'Search MP Names', value: '' }],
//     },
//   },
//   disease: {
//     name: 'Disease',
//     key: 'disease',
//     width: '250px',
//     filter: {
//       options: [{ text: 'Search Disease Names', value: '' }],
//     },
//   },
//   therapies: {
//     name: 'Therapies',
//     key: 'therapies',
//     width: '200px',
//     filter: {
//       options: [{ text: 'Search Therapy Names', value: '' }],
//     },
//   },
//   therapyInteractionType: {
//     name: 'IT',
//     tooltip: 'Interaction Type',
//     key: 'therapyInteractionType',
//     width: '30px',
//   },
//   description: {
//     name: 'DESC',
//     tooltip: 'Evidence Description',
//     key: 'description',
//     width: '40px',
//   },
//   evidenceType: {
//     name: 'ET',
//     tooltip: 'Evidence Type',
//     key: 'evidenceType',
//     width: '40px',
//     filter: {
//       options: getAttributeFilters(
//         $enum(EvidenceType),
//         EvidenceType.Predictive
//       ),
//     },
//   },
//   evidenceDirection: {
//     name: 'ED',
//     tooltip: 'Evidence Direction',
//     key: 'evidenceDirection',
//     width: '40px',
//     filter: {
//       options: getAttributeFilters($enum(EvidenceDirection)),
//     },
//   },
//   evidenceLevel: {
//     name: 'EL',
//     tooltip: 'Evidence Level',
//     key: 'evidenceLevel',
//     width: '40px',
//     filter: {
//       options: getAttributeFilters($enum(EvidenceLevel)),
//     },
//   },
//   significance: {
//     name: 'SI',
//     tooltip: 'Significance',
//     key: 'significance',
//     width: '40px',
//     filter: {
//       options: getAttributeFilters($enum(EvidenceSignificance)),
//     },
//   },
//   variantOrigin: {
//     name: 'VO',
//     tooltip: 'Variant Origin',
//     key: 'variantOrigin',
//     width: '40px',
//     filter: {
//       options: getAttributeFilters($enum(VariantOrigin)),
//     },
//   },
//   evidenceRating: {
//     name: 'ER',
//     tooltip: 'Evidence Rating',
//     key: 'evidenceRating',
//     width: '40px',
//     hidden: false,
//     filter: {
//       options: [1, 2, 3, 4, 5].map((n) => {
//         return { value: n, text: `${n} stars` }
//       }),
//     },
//   },
// }

export function getAttributeFilters(
  attrEnums: EnumWrapper,
  byDefault?: CvcInputEnum
): CvcTableFilterOption[] {
  const filters = attrEnums.getValues().map((value) => {
    return {
      text: formatEvidenceEnum(value),
      value: value,
      byDefault: byDefault === value,
    }
  })
  return filters
}
