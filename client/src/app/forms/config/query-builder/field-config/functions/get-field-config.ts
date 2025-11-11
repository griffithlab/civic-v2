import {
  QueryBuilderFieldOption,
  QueryBuilderSearchEndpoint,
} from '@app/forms/config/query-builder/query-builder.types'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { BooleanOperator } from '@app/generated/civic.apollo'
import { searchDiseasesFieldOptions } from '@app/forms/config/query-builder/field-config/search-diseases.config'
import { searchFeaturesFieldOptions } from '@app/forms/config/query-builder/field-config/search-features.config'
import { searchAssertionsFieldOptions } from '@app/forms/config/query-builder/field-config/search-assertions.config'
import { searchMolecularProfilesFieldOptions } from '@app/forms/config/query-builder/field-config/search-molecular-profiles.config'
import { searchEvidenceItemsFieldOptions } from '@app/forms/config/query-builder/field-config/search-evidence-items.config'
import { searchPhenotypesFieldOptions } from '@app/forms/config/query-builder/field-config/search-phenotypes.config'
import { searchSourcesFieldOptions } from '@app/forms/config/query-builder/field-config/search-sources.config'
import { searchTherapiesFieldOptions } from '@app/forms/config/query-builder/field-config/search-therapies.config'
import { searchUsersFieldOptions } from '@app/forms/config/query-builder/field-config/search-users.config'
import { searchVariantTypesFieldOptions } from '@app/forms/config/query-builder/field-config/search-variant-types.config'
import { searchVariantsFieldOptions } from '@app/forms/config/query-builder/field-config/search-variants.config'

export type QueryBuilderWrapper = 'query-builder-card' | 'query-subfilter-card'

export function getFieldOptions(
  endpoint: QueryBuilderSearchEndpoint
): QueryBuilderFieldOption[] {
  const QUERY_FIELD_OPTION_REGISTRY: Record<string, QueryBuilderFieldOption[]> =
    {
      searchDiseases: searchDiseasesFieldOptions,
      searchFeatures: searchFeaturesFieldOptions,
      searchAssertions: searchAssertionsFieldOptions,
      searchMolecularProfiles: searchMolecularProfilesFieldOptions,
      searchEvidenceItems: searchEvidenceItemsFieldOptions,
      searchPhenotypes: searchPhenotypesFieldOptions,
      searchSources: searchSourcesFieldOptions,
      searchTherapies: searchTherapiesFieldOptions,
      searchUsers: searchUsersFieldOptions,
      searchVariantTypes: searchVariantTypesFieldOptions,
      searchVariants: searchVariantsFieldOptions,
    }
  const options = QUERY_FIELD_OPTION_REGISTRY[endpoint]
  if (!options) {
    console.warn(
      `Unknown searchEndpoint provided to getFieldOptions: "${endpoint}".`
    )
    return []
  }
  return options
}

export function getFieldConfig(
  endpoint: QueryBuilderSearchEndpoint,
  wrapper: QueryBuilderWrapper,
  title: string
): FormlyFieldConfig[] {
  return [
    {
      key: 'query',
      wrappers: [`${wrapper}`],
      props: {
        formCardOptions: { title: `${title}` },
        fieldOptions: getFieldOptions(endpoint),
      },
      fieldGroup: [
        {
          key: 'booleanOperator',
          type: 'base-radio',
          wrappers: [],
          props: {
            required: true,
            size: 'small',
            type: 'button',
            options: [
              { label: 'all', value: BooleanOperator.And },
              { label: 'any', value: BooleanOperator.Or },
            ],
          },
        },
        {
          key: 'subFilters',
          // type: 'query-subfilters',
          wrappers: [],
          fieldArray: {
            fieldGroup: [
              /* ... */
            ],
          },
        },
      ],
    },
  ]
}
