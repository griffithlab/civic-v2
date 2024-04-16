import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { CvcInputEnum } from '@app/forms/forms.types'
import {
    VariantsSortColumns
} from '@app/generated/civic.apollo'
import { NzTableFilterList } from 'ng-zorro-antd/table'
import { BehaviorSubject, Observable } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import { EnumWrapper } from 'ts-enum-util'
import {
    CvcFilterChange,
    CvcSortChange, hasFilterOptions,
    hasSortOptions, VariantManagerColKey,
    VariantManagerColQueryMap,
    VariantManagerColSortMap,
    VariantManagerTableConfig
} from './variant-manager.types'

// export enum VariantsSortColumns {
//   DiseaseName = 'diseaseName',
//   EntrezSymbol = 'entrezSymbol',
//   TherapyName = 'therapyName',
//   VariantName = 'variantName'
// }

export const columnKeyToSortColumnMap: VariantManagerColSortMap = {
  diseases: VariantsSortColumns.DiseaseName,
  feature: VariantsSortColumns.FeatureName,
  therapies: VariantsSortColumns.TherapyName,
  variant: VariantsSortColumns.VariantName,
}

// entity browse query vars include filter vars for values
// not part of the evidence row model, this maps between
// the columnKey and entity browse query variable
export const columnKeyToQueryVariableMap: VariantManagerColQueryMap = {
  diseases: 'diseaseName',
  therapies: 'therapyName',
  variant: 'variantName',
  feature: 'featureName',
  aliases: 'variantAlias'
}

// colum keys included here will be hidden in preference panel, preventing
// defaults from being changed by the user
export const omittedFromPrefs: VariantManagerColKey[] = ['selected', 'id']

// NOTE: implementing this separate config file as a class b/c it would be good
// to move the additional onSortChanges, onFilterChange array config into
// the class in a future refactor
export class VariantManagerConfig {
  config: VariantManagerTableConfig
  sortStreams: Observable<CvcSortChange>[]
  filterStreams: Observable<CvcFilterChange>[]

  constructor() {
    this.sortStreams = []
    this.filterStreams = []

    this.config = this.configureColumnStreams([
      {
        key: 'selected',
        label: 'Select',
        type: 'select',
        width: '25px',
        align: 'center',
        fixedLeft: true,
        checkbox: {
          th: {
            showCheckbox: false,
          },
          td: {
            showCheckbox: true,
          },
        },
      },
      {
        key: 'id',
        label: 'ID',
        hidden: true,
        type: 'hidden',
        width: '0px',
      },
      {
        key: 'variant',
        label: 'Variant',
        type: 'entity-tag',
        width: '215px',
        context: 'variant',
        fixedLeft: true,
        showStatus: true,
        tag: {
          fullWidth: true,
          truncateLabel: '200px',
        },
        sort: {
          default: 'ascend',
        },
        filter: {
          inputType: 'default',
          options: [{ key: 'Filter Variant Name', value: null }],
        },
      },
      {
        key: 'aliases',
        label: 'Aliases',
        type: 'default',
        width: '150px',
        objectKey: 'name',
        sort: {},
        filter: {
          inputType: 'default',
          options: [{ key: 'Filter Aliases', value: null }],
        },
      },
      {
        key: 'feature',
        label: 'Feature',
        type: 'entity-tag',
        width: '135px',
        tag: {
          truncateLabel: '125px',
        },
        sort: {},
        filter: {
          inputType: 'default',
          options: [{ key: 'Filter Feature Name', value: null }],
        },
      },
      {
        key: 'diseases',
        label: 'Diseases',
        type: 'entity-tag',
        width: '250px',
        sort: {},
        tag: {
          maxTags: 1,
          truncateLabel: '175px',
        },
        filter: {
          inputType: 'default',
          typename: 'Therapy',
          options: [
            {
              key: 'Filter Therapy Names',
              value: null,
            },
          ],
        },
      },
      {
        key: 'therapies',
        label: 'Therapies',
        type: 'entity-tag',
        width: '275px',
        sort: {},
        tag: {
          maxTags: 2,
          truncateLabel: '150px',
        },
        filter: {
          inputType: 'default',
          typename: 'Therapy',
          options: [
            {
              key: 'Filter Therapy Names',
              value: null,
            },
          ],
        },
      },
    ])
  }

  get() {
    return this.config
  }

  getSortStreams() {
    return this.sortStreams
  }

  getFilterStreams() {
    return this.filterStreams
  }

  private getAttributeFilters(
    attrEnums: EnumWrapper,
    byDefault?: CvcInputEnum
  ): NzTableFilterList {
    const filters = attrEnums.getValues().map((value) => {
      return {
        text: formatEvidenceEnum(value),
        value: value,
        byDefault: byDefault === value,
      }
    })
    return filters
  }

  private configureColumnStreams(
    config: VariantManagerTableConfig
  ): VariantManagerTableConfig {
    config.forEach((colConfig) => {
      const col = colConfig
      if (hasSortOptions(col)) {
        col.sort.changes = new BehaviorSubject<CvcSortChange>({
          key: col.key,
          value: col.sort.default ?? null,
        })
        this.sortStreams.push(
          // opt.sort.changes.pipe(tag(`${opt.key} sort changes`))
          col.sort.changes
        )
      }
      if (hasFilterOptions(col)) {
        const defaultValue = col.filter.options.find((o) => o.byDefault)?.value
        col.filter.changes = new BehaviorSubject<CvcFilterChange>({
          key: col.key,
          value: defaultValue ?? null,
        })
        this.filterStreams.push(col.filter.changes)
      }
    })
    return config
  }
}
