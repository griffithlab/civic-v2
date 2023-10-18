import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  QueryList,
  TemplateRef,
  Type,
  ViewChildren,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcSelectEntityName } from '@app/forms/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms/mixins/base/base-field'
import { EntitySelectField } from '@app/forms/mixins/entity-select-field.mixin'
import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import {
  LinkableGeneGQL,
  Maybe,
  VariantSelectTagGQL,
  VariantSelectTagQuery,
  VariantSelectTagQueryVariables,
  VariantSelectTypeaheadFieldsFragment,
  VariantSelectTypeaheadGQL,
  VariantSelectTypeaheadQuery,
  VariantSelectTypeaheadQueryVariables,
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
  combineLatest,
  lastValueFrom,
  map,
  Observable,
  ReplaySubject,
  startWith,
  Subject,
  scan,
  withLatestFrom,
  filter,
  take,
} from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import mixin from 'ts-mixin-extended'

export type CvcVariantSelectFieldOption = Partial<
  FieldTypeConfig<Partial<CvcVariantSelectFieldProps>>
>

export interface CvcVariantSelectFieldProps extends FormlyFieldProps {
  isMultiSelect: boolean // is child of a repeat-field type
  entityName: CvcSelectEntityName
  placeholder: string
  tooltip?: string
  requireGene: boolean // if true, disables field if no geneId, and adjust placeholders, prompts
  requireGenePlaceholderFn: (geneName: string) => string // returns placeholder that includes gene name
  requireGenePrompt: string // prompt displayed if gene unspecified
  extraType?: CvcFormFieldExtraType // stores display type for msg beneath select component
  showManagerBtn?: boolean // show manager button
  minSearchStrLength: number
}

export interface CvcVariantSelectFieldConfig
  extends FormlyFieldConfig<CvcVariantSelectFieldProps> {
  type: 'variant-select' | 'variant-multi-select' | Type<CvcVariantSelectField>
}

const VariantSelectMixin = mixin(
  BaseFieldType<FieldTypeConfig<CvcVariantSelectFieldProps>, Maybe<number>>(),
  EntitySelectField<
    VariantSelectTypeaheadQuery,
    VariantSelectTypeaheadQueryVariables,
    VariantSelectTypeaheadFieldsFragment,
    VariantSelectTagQuery,
    VariantSelectTagQueryVariables,
    Maybe<number>
  >()
)

@Component({
  selector: '',
  templateUrl: './variant-select.type.html',
  styleUrls: ['./variant-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcVariantSelectField
  extends VariantSelectMixin
  implements AfterViewInit
{
  // STATE SOURCE STREAMS
  onGeneId$!: BehaviorSubject<Maybe<number>>

  // LOCAL SOURCE STREAMS
  onVid$: ReplaySubject<Maybe<number[]>>
  onShowMgrClick$: Subject<void>
  onGeneName$: BehaviorSubject<Maybe<string>>

  // LOCAL PRESENTATION STREAMS
  showMgr$: Observable<boolean>
  onModel$ = new Observable<any>()

  selectedGeneId?: number

  // FieldTypeConfig defaults
  defaultOptions = {
    props: {
      label: 'Variant',
      placeholder: 'Search Variants',
      requireGene: true,
      requireGenePlaceholderFn: (geneName: string) => {
        return `Search ${geneName} Variants`
      },
      requireGenePrompt: 'Select a Gene to search its Variants',
      isMultiSelect: false,
      entityName: { singular: 'Variant', plural: 'Variants' },
      showManagerBtn: false,
      minSearchStrLength: 0,
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(
    private taq: VariantSelectTypeaheadGQL,
    private tq: VariantSelectTagGQL,
    private geneQuery: LinkableGeneGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    this.onGeneName$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.onVid$ = new ReplaySubject<Maybe<number[]>>()
    this.onShowMgrClick$ = new Subject<void>()
    this.showMgr$ = this.onShowMgrClick$.pipe(scan((acc, _) => !acc, false))
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
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
      selectOpen$: this.selectOpen$,
      selectComponent: this.selectComponent,
      minSearchStrLength: this.field.props.minSearchStrLength,
    })

    // if state formReady exists,listen for parent ready event,
    // then configure - otherwise configure the field immediately
    if (this.state && this.state.formReady$) {
      this.state.formReady$
        .pipe(
          filter((r) => r), // only pass true values
          take(1), // unsubscribe after 1st emit
          untilDestroyed(this) // or form destroyed
        )
        .subscribe((_) => {
          this.configureField()
        })
    } else {
      this.configureField()
    }
  } // ngAfterViewInit

  private configureField() {
    this.configureStateConnections() // local fn

    this.onVid$.pipe(untilDestroyed(this)).subscribe()

    // if form value exists on init, emit it so evidence manager will be updated
    this.onVid$.next(this.formControl.value)

    // update model provided to quick-add form when either sourceType or citationId changes
    this.onModel$ = combineLatest([this.onGeneId$, this.onSearch$]).pipe(
      map(([geneId, name]: [Maybe<number>, Maybe<string>]) => {
        return { geneId: geneId, name: name }
      })
    )

    // emit value, to update variant-manager selection
    this.onValueChange$
      .pipe(withLatestFrom(this.onVid$), untilDestroyed(this))
      .subscribe(([current, _]) => {
        if (Array.isArray(current)) this.onVid$.next(current)
      })
  }

  private configureStateConnections() {
    if (!this.state) return
    // attach state geneId$ to get gene field value updates
    if (this.props.requireGene) {
      if (!this.state?.fields.geneId$) {
        console.error(
          `${this.field.id} requireGene is set, but no geneId$ subject found on state.`
        )
        return
      }
      this.onGeneId$ = this.state.fields.geneId$
      this.onGeneId$.pipe(untilDestroyed(this)).subscribe((gid) => {
        this.onGeneId(gid)
      })
    }
  }

  getTypeaheadVarsFn(str: string) {
    return {
      name: str,
      geneId: this.selectedGeneId,
    }
  }

  getTypeaheadResultsFn(r: ApolloQueryResult<VariantSelectTypeaheadQuery>) {
    return r.data.variants.nodes
  }

  getTagQueryVarsFn(id: number): VariantSelectTagQueryVariables {
    return { variantId: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<VariantSelectTagQuery>
  ): Maybe<VariantSelectTypeaheadFieldsFragment> {
    return r.data.variant
  }

  getSelectedItemOptionFn(
    variant: VariantSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: variant.id, label: variant.name }
  }

  getSelectOptionsFn(
    results: VariantSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (variant: VariantSelectTypeaheadFieldsFragment, index: number) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || variant.name,
          value: variant.id,
        }
      }
    )
  }

  showAddBehavior(
    s: string,
    results: VariantSelectTypeaheadFieldsFragment[]
  ): boolean {
    const searchName = s.toLowerCase()
    return (
      s.length >= 3 && !results.some((v) => v.name.toLowerCase() === searchName)
    )
  }

  private onGeneId(gid: Maybe<number>): void {
    this.selectedGeneId = gid
    // if field config indicates that a geneId is required, and none is provided,
    // set model to undefined (this resets the variant model if gene field is reset)
    // and set placeholder to the 'requires gene' placeholder
    if (!gid && this.props.requireGene) {
      this.resetField()
      this.props.description = this.props.requireGenePrompt
      this.props.placeholder = 'Select a Variant'
      this.props.extraType = 'prompt'
      this.onGeneName$.next(undefined)
    } else if (gid) {
      this.props.description = undefined
      this.props.extraType = undefined
      // id provided, so fetch its name and update the placeholder string.
      // lastValueFrom is used b/c fetch could return 'loading' events
      lastValueFrom(
        this.geneQuery.fetch({ geneId: gid }, { fetchPolicy: 'cache-first' })
      ).then(({ data }) => {
        if (!data?.gene?.name) {
          console.error(
            `${this.field.id} could not fetch gene name for Gene:${gid}.`
          )
        } else {
          if (this.props.requireGene) {
            this.props.placeholder = this.props.requireGenePlaceholderFn(
              data.gene.name
            )
          } else {
            this.props.placeholder = this.props.placeholder
          }
          // emit gene name for quick-add form Input
          this.onGeneName$.next(data.gene.name)
        }
      })
    }
  }
}
