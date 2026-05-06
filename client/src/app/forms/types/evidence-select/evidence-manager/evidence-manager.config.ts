import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum'
import { CvcInputEnum } from '@app/forms/forms.types'
import {
  EvidenceDirection,
  EvidenceLevel,
  EvidenceSignificance,
  EvidenceSortColumns,
  EvidenceType,
  TherapyInteraction,
} from '@app/generated/civic.apollo'
import { NzTableFilterList } from 'ng-zorro-antd/table'
import { BehaviorSubject, Observable } from 'rxjs'
import { $enum, EnumWrapper } from 'ts-enum-util'
import {
  CvcFilterChange,
  CvcSortChange,
  EvidenceManagerColKey,
  EvidenceManagerColQueryMap,
  EvidenceManagerColSortMap,
  EvidenceManagerTableConfig,
  hasFilterOptions,
  hasSortOptions,
} from './evidence-manager.types'

export const columnKeyToSortColumnMap: EvidenceManagerColSortMap = {
  description: EvidenceSortColumns.Description,
  disease: EvidenceSortColumns.DiseaseName,
  evidenceDirection: EvidenceSortColumns.EvidenceDirection,
  evidenceLevel: EvidenceSortColumns.EvidenceLevel,
  evidenceRating: EvidenceSortColumns.EvidenceRating,
  evidenceType: EvidenceSortColumns.EvidenceType,
  id: EvidenceSortColumns.Id,
  significance: EvidenceSortColumns.Significance,
  status: EvidenceSortColumns.Status,
  variantOrigin: EvidenceSortColumns.VariantOrigin,
}

// entity browse query vars include filter vars for values
// not part of the evidence row model, this maps between
// the columnKey and entity browse query variable
export const columnKeyToQueryVariableMap: EvidenceManagerColQueryMap = {
  molecularProfile: 'molecularProfileName',
  disease: 'diseaseName',
  therapies: 'therapyName',
  evidenceItem: 'id',
}
// column keys included here will be hidden in preference panel, preventing
// defaults from being changed by the user
export const omittedFromPrefs: EvidenceManagerColKey[] = ['selected', 'id']

// NOTE: implementing this separate config file as a class b/c it would be good
// to move the additional onSortChanges, onFilterChange array config into
// the class in a future refactor
export class EvidenceManagerConfig {
  config: EvidenceManagerTableConfig
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
        hidden: true,
        key: 'id',
        label: 'ID',
        type: 'default',
        width: '30px',
      },
      {
        hidden: true,
        key: 'status',
        label: 'Status',
        type: 'default',
        width: '50px',
      },
      {
        key: 'id',
        label: 'Evidence',
        type: 'entity-tag',
        width: '95px',
        context: 'evidenceItem',
        fixedLeft: true,
        showStatus: true,
        tag: {
          fullWidth: true,
          popoverPlacement: 'right',
        },
        sort: {
          default: 'ascend',
        },
        filter: {
          inputType: 'default',
          options: [{ key: 'EID', value: null }],
          transform: (v) => {
            if (v) {
              return +v.toString().replace(/EID/i, '')
            } else {
              return null
            }
          },
        },
      },
      {
        key: 'molecularProfile',
        label: 'Molecular Profile',
        type: 'entity-tag',
        width: '240px',
        sort: {},
        tag: {
          truncateLabel: '200px',
        },
        filter: {
          inputType: 'default',
          typename: 'MolecularProfile',
          options: [
            {
              key: 'Filter Therapy Names',
              value: null,
            },
          ],
        },
      },
      {
        key: 'disease',
        type: 'entity-tag',
        label: 'Disease',
        width: '240px',
        sort: {},
        tag: {
          truncateLabel: '200px',
        },
        filter: {
          inputType: 'default',
          typename: 'Disease',
          options: [
            {
              key: 'Filter Disease Names',
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
        sort: {
          disabled: true,
        },
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
      {
        key: 'therapyInteractionType',
        label: 'INT',
        tooltip: 'Therapy Interaction Type',
        type: 'enum-tag',
        width: '40px',
        align: 'center',
        emptyValueCategory: 'not-applicable',
        sort: {},
        filter: {
          options: this.getAttributeFilters($enum(TherapyInteraction)),
        },
      },
      {
        key: 'description',
        label: 'DSC',
        tooltip: 'Evidence Description',
        type: 'text-tag',
        width: '40px',
        align: 'center',
        fixedRight: true,
        emptyValueCategory: 'unspecified',
        sort: {},
        filter: {
          inputType: 'default',
          options: [{ key: 'Search Descriptions', value: null }],
        },
      },
      {
        key: 'evidenceType',
        label: 'ET',
        tooltip: 'Evidence Type',
        type: 'enum-tag',
        width: '40px',
        align: 'center',
        fixedRight: true,
        sort: {},
        filter: {
          options: this.getAttributeFilters(
            $enum(EvidenceType)
            // EvidenceType.Predictive
          ),
        },
      },
      {
        key: 'evidenceLevel',
        label: 'EL',
        tooltip: 'Evidence Level',
        type: 'enum-tag',
        width: '40px',
        align: 'center',
        fixedRight: true,
        sort: {},
        filter: {
          options: this.getAttributeFilters($enum(EvidenceLevel)),
        },
      },
      {
        key: 'evidenceDirection',
        label: 'ED',
        tooltip: 'Evidence Direction',
        type: 'enum-tag',
        width: '40px',
        align: 'center',
        fixedRight: true,
        sort: {},
        filter: {
          options: this.getAttributeFilters($enum(EvidenceDirection)),
        },
      },
      {
        key: 'significance',
        label: 'SI',
        tooltip: 'Significance',
        type: 'enum-tag',
        align: 'center',
        width: '40px',
        fixedRight: true,
        sort: {},
        filter: {
          options: this.getAttributeFilters($enum(EvidenceSignificance)),
        },
      },
      {
        key: 'evidenceRating',
        label: 'ER',
        tooltip: 'Evidence Rating',
        type: 'enum-tag',
        width: '45px',
        align: 'center',
        fixedRight: true,
        tag: {
          showLabel: 'short-string',
        },
        sort: {},
        filter: {
          options: [1, 2, 3, 4, 5].map((n) => {
            return { value: n, text: `${n} stars` }
          }),
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
    config: EvidenceManagerTableConfig
  ): EvidenceManagerTableConfig {
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
        this.filterStreams.push(
          // opt.filter.changes.pipe(tag(`${opt.key} filter changes`))
          col.filter.changes
        )
      }
    })
    return config
  }
}
