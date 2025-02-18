import { Maybe, MyVariantInfoFieldsFragment } from '@app/generated/civic.apollo'

export type VariantInfo = {
  myVariantInfo: Maybe<MyVariantInfoFieldsFragment>
  openCravatAnnotations: Maybe<JSON>
  openCravatUrl: Maybe<string>
}
