import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  QueryList,
  TemplateRef,
  Type,
  ViewChildren,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcSelectEntityName } from '@app/forms2/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms2/mixins/base/base-field'
import { EntitySelectField } from '@app/forms2/mixins/entity-select-field.mixin'
import {
  EvidenceItem,
  EvidenceSelectTagGQL,
  EvidenceSelectTagQuery,
  EvidenceSelectTagQueryVariables,
  EvidenceSelectTypeaheadFieldsFragment,
  EvidenceSelectTypeaheadGQL,
  EvidenceSelectTypeaheadQuery,
  EvidenceSelectTypeaheadQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { Apollo } from 'apollo-angular'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  scan,
  startWith,
  Subject,
  tap,
} from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import mixin from 'ts-mixin-extended'

export type CvcEvidenceSelectFieldOptions = Partial<
  FieldTypeConfig<CvcEvidenceSelectFieldProps>
>

export interface CvcEvidenceSelectFieldProps extends FormlyFieldProps {
  isMultiSelect: boolean // is child of a repeat-field type
  entityName: CvcSelectEntityName
  placeholder: string
  tooltip?: string
  description?: string
  minSearchStrLength: number
}

export interface CvcEvidenceSelectFieldConfig
  extends FormlyFieldConfig<Partial<CvcEvidenceSelectFieldProps>> {
  type:
    | 'evidence-select'
    | 'evidence-multi-select'
    | Type<CvcEvidenceSelectField>
}

const EvidenceSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcEvidenceSelectFieldProps>,
    Maybe<number | number[]>
  >(),
  EntitySelectField<
    EvidenceSelectTypeaheadQuery,
    EvidenceSelectTypeaheadQueryVariables,
    EvidenceSelectTypeaheadFieldsFragment,
    EvidenceSelectTagQuery,
    EvidenceSelectTagQueryVariables,
    Maybe<number>
  >()
)
@Component({
  selector: 'cvc-evidence-select',
  templateUrl: './evidence-select.type.html',
  styleUrls: ['./evidence-select.type.less'],
})
export class CvcEvidenceSelectField
  extends EvidenceSelectMixin
  implements AfterViewInit
{
  // SOURCE STREAMS
  onEidSelect$: Subject<number[]>
  onEid$: ReplaySubject<Maybe<number | number[]>>
  onShowMgrClick$: Subject<void>

  // PRESENTATION STREAMS
  showMgr$: Observable<boolean>

  mgrOpen: boolean = false

  defaultOptions: CvcEvidenceSelectFieldOptions = {
    props: {
      label: 'Evidence Items',
      placeholder: 'Select Evidence Items',
      isMultiSelect: true,
      description:
        'Select Evidence by ID, or use the manager to select with filtering',
      entityName: {
        singular: 'Evidence Item',
        plural: 'Evidence Items',
      },
      minSearchStrLength: 1,
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(
    private taq: EvidenceSelectTypeaheadGQL,
    private tq: EvidenceSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef,
    private apollo: Apollo
  ) {
    super()
    this.onEid$ = new ReplaySubject<Maybe<number | number[]>>()
    this.onEidSelect$ = new Subject<number[] >()
    this.onShowMgrClick$ = new Subject<void>()
    this.showMgr$ = this.onShowMgrClick$.pipe(
      startWith(true),
      scan((acc, _) => !acc, false),
    )
  }
  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEntitySelectField({
      typeaheadQuery: this.taq,
      tagQuery: this.tq,
      getTypeaheadVarsFn: this.getTypeaheadVarsFn,
      getTypeaheadResultsFn: this.getTypeaheadResultsFn,
      getTagQueryVarsFn: this.getTagQueryVarsFn,
      getTagQueryResultsFn: this.getTagQueryResultsFn,
      getSelectedItemOptionFn: this.getSelectedItemOptionFn,
      getSelectOptionsFn: this.getSelectOptionsFn,
      changeDetectorRef: this.changeDetectorRef,
    })
    this.onEidSelect$.pipe(untilDestroyed(this)).subscribe((ids) => {
      this.formControl.setValue(ids)
    })
  }
  private configureStateConnections() {
    if (!this.state) return
  }
  getTypeaheadVarsFn(id: string, param: Maybe<number>) {
    return {
      eid: +id,
    }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<EvidenceSelectTypeaheadQuery>) {
    return r.data.evidenceItems.nodes
  }

  getTagQueryVarsFn(id: number): EvidenceSelectTagQueryVariables {
    return { eid: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<EvidenceSelectTagQuery>
  ): Maybe<EvidenceSelectTypeaheadFieldsFragment> {
    return r.data.evidenceItem
  }

  getSelectedItemOptionFn(
    evidenceItem: EvidenceSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: evidenceItem.id, label: `EID${evidenceItem.id}` }
  }

  getSelectOptionsFn(
    results: EvidenceSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (
        evidenceItem: EvidenceSelectTypeaheadFieldsFragment,
        index: number
      ) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || `EID${evidenceItem.id}`,
          value: evidenceItem.id,
        }
      }
    )
  }
}
