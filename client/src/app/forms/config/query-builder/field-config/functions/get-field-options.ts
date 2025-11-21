import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'
import { FormlyFieldConfig } from '@ngx-formly/core'
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

export function getFieldOptions(
  endpoint: QueryBuilderSearchEndpoint
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
      `Unknown searchEndpoint provided to getFieldOptions: "${endpoint}".`
    )
    return []
  }
  return options
}
