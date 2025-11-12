import { $enum } from 'ts-enum-util'
import { StringSearchOperator } from '@app/generated/civic.apollo'

const NULL_VALUE = null

export function getSelectOptions(enumType: string) {
  switch (enumType) {
    case 'StringSearchOperator':
      return $enum(StringSearchOperator).map(
        (value, key, wrappedEnum, index) => {
          // type of value is Contains, DoesNotContain
          // type of key is CONTAINS, DOES_NOT_CONTAIN
          // wrappedEnum is a reference to wrapped enum
          // index is based on original defined order of the enum
          return `{ label: "${key}", value: "${value}"`
        }
      )
    // export enum StringSearchOperator {
    //   Contains = 'CONTAINS',
    //   DoesNotContain = 'DOES_NOT_CONTAIN',
    //   Eq = 'EQ',
    //   Ne = 'NE',
    //   StartsWith = 'STARTS_WITH'
    // }
    default:
      return []
  }
}
