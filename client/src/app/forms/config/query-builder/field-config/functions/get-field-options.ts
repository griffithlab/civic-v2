import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'
import { FormlyFieldConfig } from '@ngx-formly/core'
import {
  searchDiseasesDefaultKey,
  searchDiseasesFieldOptions,
} from '@app/forms/config/query-builder/field-config/search-diseases.config'
import {
  searchFeaturesDefaultKey,
  searchFeaturesFieldOptions,
} from '@app/forms/config/query-builder/field-config/search-features.config'
import {
  searchAssertionsDefaultKey,
  searchAssertionsFieldOptions,
} from '@app/forms/config/query-builder/field-config/search-assertions.config'
import {
  searchMolecularProfilesDefaultKey,
  searchMolecularProfilesFieldOptions,
} from '@app/forms/config/query-builder/field-config/search-molecular-profiles.config'
import {
  searchEvidenceItemsDefaultKey,
  searchEvidenceItemsFieldOptions,
} from '@app/forms/config/query-builder/field-config/search-evidence-items.config'
import {
  searchPhenotypesDefaultKey,
  searchPhenotypesFieldOptions,
} from '@app/forms/config/query-builder/field-config/search-phenotypes.config'
import {
  searchSourcesDefaultKey,
  searchSourcesFieldOptions,
} from '@app/forms/config/query-builder/field-config/search-sources.config'
import {
  searchTherapiesDefaultKey,
  searchTherapiesFieldOptions,
} from '@app/forms/config/query-builder/field-config/search-therapies.config'
import {
  searchUsersDefaultKey,
  searchUsersFieldOptions,
} from '@app/forms/config/query-builder/field-config/search-users.config'
import {
  searchVariantTypesDefaultKey,
  searchVariantTypesFieldOptions,
} from '@app/forms/config/query-builder/field-config/search-variant-types.config'
import {
  searchVariantsDefaultKey,
  searchVariantsFieldOptions,
} from '@app/forms/config/query-builder/field-config/search-variants.config'
import { Maybe } from '@generated/civic.apollo'
import { withSmallSize } from './field-config-helpers'

export function getFieldOptions(
  endpoint: QueryBuilderSearchEndpoint,
  isRootFilter?: boolean
): FormlyFieldConfig[] {
  const FILTER_OPTIONS: Record<string, FormlyFieldConfig[]> = {
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
  const options = FILTER_OPTIONS[endpoint]
  if (!options) {
    console.warn(
      `Unknown searchEndpoint provided to getFieldOptions:
      "${endpoint}". Returning empty array.`
    )
    return []
  }
  if (isRootFilter === false && options.length > 0) {
    options.forEach((opt) => {
      if (opt.fieldGroup) opt.fieldGroup = withSmallSize(opt.fieldGroup)
    })
  }
  return options
}

export function getDefaultSelectedKey(
  endpoint: QueryBuilderSearchEndpoint
): Maybe<string> {
  const DEFAULT_SELECTED_KEY: Record<string, string> = {
    searchDiseases: searchDiseasesDefaultKey,
    searchFeatures: searchFeaturesDefaultKey,
    searchAssertions: searchAssertionsDefaultKey,
    searchMolecularProfiles: searchMolecularProfilesDefaultKey,
    searchEvidenceItems: searchEvidenceItemsDefaultKey,
    searchPhenotypes: searchPhenotypesDefaultKey,
    searchSources: searchSourcesDefaultKey,
    searchTherapies: searchTherapiesDefaultKey,
    searchUsers: searchUsersDefaultKey,
    searchVariantTypes: searchVariantTypesDefaultKey,
    searchVariants: searchVariantsDefaultKey,
  }
  let defaultKey = DEFAULT_SELECTED_KEY[endpoint]
  if (!defaultKey) {
    console.warn(
      `Unknown searchEndpoint provided to getDefaultSelectedKey:
      "${endpoint}". Setting to 'name' default.`
    )
  }
  return defaultKey
}
