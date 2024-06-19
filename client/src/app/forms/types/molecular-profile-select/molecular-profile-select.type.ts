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
  Maybe,
  MolecularProfile,
  MolecularProfileSelectTagGQL,
  MolecularProfileSelectTagQuery,
  MolecularProfileSelectTagQueryVariables,
  MolecularProfileSelectTypeaheadFieldsFragment,
  MolecularProfileSelectTypeaheadGQL,
  MolecularProfileSelectTypeaheadQuery,
  MolecularProfileSelectTypeaheadQueryVariables,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { Apollo } from 'apollo-angular'
import { fadeMotion, slideMotion } from 'ng-zorro-antd/core/animation'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import {
  BehaviorSubject,
  filter,
  Observable,
  ReplaySubject,
  scan,
  startWith,
  Subject,
  tap,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import mixin from 'ts-mixin-extended'

export type CvcMolecularProfileSelectFieldOptions = Partial<
  FieldTypeConfig<CvcMolecularProfileSelectFieldProps>
>

export interface CvcMolecularProfileSelectFieldProps extends FormlyFieldProps {
  isMultiSelect: boolean // is child of a repeat-field type
  entityName: CvcSelectEntityName
  placeholder: string
  tooltip?: string
  description?: string
  extraType?: CvcFormFieldExtraType
  minSearchStrLength?: number
}

export interface CvcMolecularProfileSelectFieldConfig
  extends FormlyFieldConfig<Partial<CvcMolecularProfileSelectFieldProps>> {
  type:
    | 'molecular-profile-select'
    | 'molecular-profile-multi-select'
    | Type<CvcMolecularProfileSelectField>
}

const MolecularProfileSelectMixin = mixin(
  BaseFieldType<
    FieldTypeConfig<CvcMolecularProfileSelectFieldProps>,
    Maybe<number>
  >(),
  EntitySelectField<
    MolecularProfileSelectTypeaheadQuery,
    MolecularProfileSelectTypeaheadQueryVariables,
    MolecularProfileSelectTypeaheadFieldsFragment,
    MolecularProfileSelectTagQuery,
    MolecularProfileSelectTagQueryVariables,
    Maybe<number>
  >()
)

type SelectDisplayModel = {
  showFinder: boolean
  showSelect: boolean
}

@Component({
  selector: '',
  templateUrl: './molecular-profile-select.type.html',
  styleUrls: ['./molecular-profile-select.type.less'],
  animations: [slideMotion, fadeMotion],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcMolecularProfileSelectField
  extends MolecularProfileSelectMixin
  implements AfterViewInit
{
  // SOURCE STREAMS
  onMpSelect$: BehaviorSubject<Maybe<MolecularProfile>>
  onMpId$: ReplaySubject<Maybe<number>>
  onShowExpClick$: Subject<void>

  // PRESENTATION STREAMS
  showExp$: Observable<boolean>
  selectDisplay$!: BehaviorSubject<SelectDisplayModel>

  editorOpen: boolean = false

  // FieldTypeConfig defaults
  defaultOptions: CvcMolecularProfileSelectFieldOptions = {
    props: {
      label: 'Molecular Profile',
      placeholder: 'Search Molecular Profiles',
      tooltip:
        'A single variant (Simple Molecular Profile) or a combination of variants (Complex Molecular Profile) relevant to the curated assertion.',
      isMultiSelect: false,
      description:
        'Select a Feature and Variant to specify a simple Molecular Profile.',

      entityName: {
        singular: 'Molecular Profile',
        plural: 'Molecular Profiles',
      },
      minSearchStrLength: 1,
    },
  }

  initialDescription!: Maybe<string>

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(
    private taq: MolecularProfileSelectTypeaheadGQL,
    private tq: MolecularProfileSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef,
    private apollo: Apollo
  ) {
    super()
    this.onMpSelect$ = new BehaviorSubject<Maybe<MolecularProfile>>(undefined)
    this.onMpId$ = new ReplaySubject<Maybe<number>>()
    this.onShowExpClick$ = new Subject<void>()
    this.showExp$ = this.onShowExpClick$.pipe(
      scan((acc, _) => !acc, false),
      // startWith(true),
      tap((open) => (this.editorOpen = open))
    )
    this.selectDisplay$ = new BehaviorSubject<SelectDisplayModel>({
      showFinder: true,
      showSelect: false,
    })
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
      selectOpen$: this.selectOpen$,
      selectComponent: this.selectComponent,
    })

    this.initialDescription = this.props.description

    // only show select if mpId set, emit mpId from onMpId$ subject
    this.onValueChange$
      .pipe(untilDestroyed(this))
      .subscribe((mpId: Maybe<number>) => {
        const showSelect = mpId !== undefined
        this.selectDisplay$.next({
          showFinder: !showSelect,
          showSelect: showSelect,
        })
        this.onMpId$.next(mpId)
        if (mpId) {
          this.props.description = undefined
        } else {
          this.props.description = this.initialDescription
        }
      })

    // populate MP select if variantId received from child form model
    this.onMpSelect$
      .pipe(untilDestroyed(this))
      .subscribe((mp: Maybe<MolecularProfile>) => {
        if (!mp) {
          // this.field.formControl.setValue(undefined)
          this.selectDisplay$.next({
            showFinder: true,
            showSelect: false,
          })
          return
        }
        this.selectOption$.next([{ label: mp.name, value: mp.id }])
        if (this.editorOpen) this.onShowExpClick$.next()
        this.cdr.detectChanges()
        this.field.formControl.setValue(mp.id)
        this.field.formControl.markAsTouched()
      })
  } // ngAfterViewInit

  private configureStateConnections() {
    if (!this.state) return
  }

  getTypeaheadVarsFn(str: string, param: Maybe<number>) {
    return {
      name: str,
      geneId: param,
    }
  }

  getTypeaheadResultsFn(
    r: ApolloQueryResult<MolecularProfileSelectTypeaheadQuery>
  ) {
    return r.data.molecularProfiles.nodes
  }

  getTagQueryVarsFn(id: number): MolecularProfileSelectTagQueryVariables {
    return { molecularProfileId: id }
  }

  getTagQueryResultsFn(
    r: ApolloQueryResult<MolecularProfileSelectTagQuery>
  ): Maybe<MolecularProfileSelectTypeaheadFieldsFragment> {
    return r.data.molecularProfile
  }

  getSelectedItemOptionFn(
    molecularProfile: MolecularProfileSelectTypeaheadFieldsFragment
  ): NzSelectOptionInterface {
    return { value: molecularProfile.id, label: molecularProfile.name }
  }

  getSelectOptionsFn(
    results: MolecularProfileSelectTypeaheadFieldsFragment[],
    tplRefs: QueryList<TemplateRef<any>>
  ): NzSelectOptionInterface[] {
    return results.map(
      (
        molecularProfile: MolecularProfileSelectTypeaheadFieldsFragment,
        index: number
      ) => {
        return <NzSelectOptionInterface>{
          label: tplRefs.get(index) || molecularProfile.name,
          value: molecularProfile.id,
        }
      }
    )
  }
}
