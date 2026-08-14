import { Maybe } from '@app/generated/civic.apollo.types'
import { MyVariantInfoFieldsFragment } from '@app/views/variants/variants-detail/variants-summary/variants-summary.query.gql.generated'

export type VariantInfo = {
  myVariantInfo: Maybe<MyVariantInfoFieldsFragment>
  openCravatAnnotations: Maybe<JSON>
  openCravatUrl: Maybe<string>
}
