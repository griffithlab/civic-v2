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
import { UntypedFormGroup } from '@angular/forms'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcSelectEntityName } from '@app/forms2/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms2/mixins/base/base-field'
import { EntitySelectField } from '@app/forms2/mixins/entity-select-field.mixin'
import { EntityFieldSubjectMap } from '@app/forms2/states/base.state'
import { CvcFieldGridWrapperConfig } from '@app/forms2/wrappers/field-grid/field-grid.wrapper'
import { CvcFormCardWrapperProps } from '@app/forms2/wrappers/form-card/form-card.wrapper'
import { CvcFormFieldExtraType } from '@app/forms2/wrappers/form-field/form-field.wrapper'
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
  Variant,
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
  FormlyFormOptions,
} from '@ngx-formly/core'
import { Apollo, gql } from 'apollo-angular'
import { fadeMotion, slideMotion } from 'ng-zorro-antd/core/animation'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import {
  BehaviorSubject,
  filter,
  map,
  Observable,
  ReplaySubject,
  scan,
  startWith,
  Subject,
  tap,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'
import mixin from 'ts-mixin-extended'
import { CvcGeneSelectFieldOption } from '../gene-select/gene-select.type'
import { CvcVariantSelectFieldOption } from '../variant-select/variant-select.type'

export type CvcMolecularProfileSelectFieldOptions = Partial<
  FieldTypeConfig<CvcMolecularProfileSelectFieldProps>
>

export interface CvcMolecularProfileSelectFieldProps extends FormlyFieldProps {
  isMultiSelect: boolean // is child of a repeat-field type
  entityName: CvcSelectEntityName
  placeholder: string
  tooltip?: string
  // requireGene: boolean // if true, disables field if no geneId, and adjust placeholders, prompts
  // requireGenePlaceholderFn: (geneName: string) => string // returns placeholder that includes gene name
  // requireGenePrompt: string // prompt displayed if gene unspecified
  extraType?: CvcFormFieldExtraType
  watchVariantMolecularProfileId: boolean
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
  placeholder$: BehaviorSubject<string>
  hideMpSelect$!: BehaviorSubject<boolean>

  showExpression: boolean = false

  editorOpen: boolean = false

  // FieldTypeConfig defaults
  defaultOptions: CvcMolecularProfileSelectFieldOptions = {
    props: {
      label: 'Molecular Profile',
      placeholder: 'Search Molecular Profiles',
      isMultiSelect: false,
      description:
        'Select a Variant to specify a simple Molecular Profile, or use the Editor to specify a complex Molecular Profile',
      extraType: 'prompt',
      entityName: {
        singular: 'Molecular Profile',
        plural: 'Molecular Profiles',
      },
      watchVariantMolecularProfileId: false,
      minSearchStrLength: 1,
    },
  }

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
      tap((open) => (this.editorOpen = open))
    )
    this.placeholder$ = new BehaviorSubject<string>(
      this.defaultOptions.props!.placeholder
    )
    this.hideMpSelect$ = new BehaviorSubject<boolean>(true)
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

    this.placeholder$.next(this.props.placeholder)

    // only show select if mpId set, emit mpId from onMpId$ subject
    this.onValueChange$
      .pipe(untilDestroyed(this))
      .subscribe((mpId: Maybe<number>) => {
        this.hideMpSelect$.next(mpId !== undefined ? false : true)
        this.onMpId$.next(mpId)
      })

    // populate MP select if variantId received from child form model
    this.onMpSelect$
      .pipe(filter(isNonNulled), untilDestroyed(this))
      .subscribe((mp: MolecularProfile) => {
        this.selectOption$.next([{ label: mp.name, value: mp.id }])
        if (this.editorOpen) this.onShowExpClick$.next()
        this.cdr.detectChanges()
        this.field.formControl.setValue(mp.id)
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
