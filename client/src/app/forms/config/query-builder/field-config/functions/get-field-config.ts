import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { BooleanOperator } from '@app/generated/civic.apollo'
import { searchDiseasesFilterOptions } from '@app/forms/config/query-builder/field-config/search-diseases.config'
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
import { getSelectOptions } from '@app/forms/config/query-builder/field-config/functions/get-select-options'

export type QueryBuilderWrapper = 'query-builder-card' | 'query-subfilter-card'

export function getFieldOptions(
  endpoint: QueryBuilderSearchEndpoint
): FormlyFieldConfig[] {
  const FILTER_OPTIONS: Record<string, FormlyFieldConfig[]> = {
    searchDiseases: searchDiseasesFilterOptions,
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
  const options = FILTER_OPTIONS[endpoint]
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
            options: getSelectOptions('BooleanOperator'),
          },
        },
        {
          key: 'subFilters',
          type: 'query-subfilters',
          wrappers: [],
          fieldArray: {
            type: 'query-filter',
            resetOnHide: true,
            props: {
              selectedKey: undefined,
            },
            /* TODO: commenting out this fieldGroup, and the model
             * population works, as far as properly setting the select.
             * However, query-filter's field builder fails with a formControl err.*/
            fieldGroup: getFieldOptions(endpoint),
          },
        },
        {
          key: 'createPermalink',
          wrappers: [],
        },
      ],
    },
  ]
}
