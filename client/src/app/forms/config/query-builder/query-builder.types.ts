import {
  AssertionSearchFilter,
  DiseaseSearchFilter,
  EvidenceItemSearchFilter,
} from '@app/generated/civic.apollo'

export type AdvancedSearchFilter =
  | DiseaseSearchFilter
  | AssertionSearchFilter
  | EvidenceItemSearchFilter

export interface QueryBuilderFormModel {
  query: AdvancedSearchFilter
  createPermalink: boolean
}

export const defaultQueryBuildFormModel: QueryBuilderFormModel = {
  query: {},
  createPermalink: true,
}
