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
  map,
  Observable,
  scan,
  startWith,
  Subject,
} from 'rxjs'
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

type SimpleMpFormModel = {
  geneId?: number
  variantId?: number
}

type SimpleMpFormState = {
  formLayout: NzFormLayoutType
  fields: EntityFieldSubjectMap
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
  simpleMpFormChange$: BehaviorSubject<Maybe<SimpleMpFormModel>>
  onShowExpClick$: Subject<void>

  // PRESENTATION STREAMS
  showExp$: Observable<boolean>
  placeholder$: BehaviorSubject<string>
  hideMpSelect$!: BehaviorSubject<boolean>

  showExpression: boolean = false

  // FieldTypeConfig defaults
  defaultOptions: CvcMolecularProfileSelectFieldOptions = {
    props: {
      label: 'Molecular Profile',
      placeholder: 'Search Molecular Profiles',
      isMultiSelect: false,
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

  simpleMpModel: SimpleMpFormModel
  simpleMpForm: UntypedFormGroup
  simpleMpConfig: FormlyFieldConfig[]
  simpleMpLayout: NzFormLayoutType = 'horizontal'

  simpleMpFormState: SimpleMpFormState = {
    formLayout: this.simpleMpLayout,
    fields: {
      geneId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantId$: new BehaviorSubject<Maybe<number>>(undefined),
      variantMolecularProfile$: new BehaviorSubject<Maybe<MolecularProfile>>(
        undefined
      ),
    },
  }

  simpleMpOptions: FormlyFormOptions

  constructor(
    private taq: MolecularProfileSelectTypeaheadGQL,
    private tq: MolecularProfileSelectTagGQL,
    private changeDetectorRef: ChangeDetectorRef,
    private apollo: Apollo
  ) {
    super()
    // configure form
    this.simpleMpForm = new UntypedFormGroup({})
    this.simpleMpModel = { geneId: undefined, variantId: undefined }
    this.simpleMpOptions = { formState: this.simpleMpFormState }
    this.simpleMpFormChange$ = new BehaviorSubject<Maybe<SimpleMpFormModel>>(
      undefined
    )

    this.onShowExpClick$ = new Subject<void>()
    this.showExp$ = this.onShowExpClick$.pipe(scan((acc, _) => !acc, false))

    this.placeholder$ = new BehaviorSubject<string>(
      this.defaultOptions.props!.placeholder
    )

    this.hideMpSelect$ = new BehaviorSubject<boolean>(true)

    this.simpleMpConfig = [
      {
        wrappers: ['field-grid'],
        props: <CvcFieldGridWrapperConfig>{
          grid: {
            cols: 2,
          },
        },
        fieldGroup: [
          {
            key: 'geneId',
            type: 'gene-select',
            resetOnHide: false,
            props: {
              hideLabel: true,
              layout: {
                showExtra: false,
              },
            },
          },
          <CvcVariantSelectFieldOption>{
            key: 'variantId',
            type: 'variant-select',
            resetOnHide: false,
            props: {
              hideLabel: true,
              requireGene: true,
              layout: {
                showExtra: false,
              },
            },
          },
        ],
      },
    ]
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

    // only show select if mpId set
    this.onValueChange$
      .pipe(untilDestroyed(this))
      .subscribe((mpId: Maybe<number>) => {
        this.hideMpSelect$.next(mpId !== undefined ? false : true)
      })

    // populate MP select if variantId received from child form model
    this.simpleMpFormChange$
      .pipe(untilDestroyed(this))
      .subscribe((model: Maybe<SimpleMpFormModel>) => {
        if (!model?.variantId) return
        this.onVariantId(model.variantId)
      })
  } // ngAfterViewInit

  private configureStateConnections() {
    if (!this.state) return
  }

  onVariantId(variantId: Maybe<number>): void {
    if (!variantId) return
    const fragment = {
      id: `Variant:${variantId}`,
      fragment: gql`
        fragment VariantSelectQuery on Variant {
          id
          name
          link
          variantAliases
          singleVariantMolecularProfileId
          singleVariantMolecularProfile {
            id
            name
            link
            molecularProfileAliases
          }
        }
      `,
    }
    let variant
    try {
      variant = this.apollo.client.readFragment(fragment) as Variant
    } catch (err) {
      console.error(err)
    }
    if (!variant) {
      console.error(
        `${this.field.id} could not resolve its Variant from the cache to obtain its singleVariantMolecularProfile`
      )
    } else {
      const mp = variant.singleVariantMolecularProfile
      this.selectOption$.next([{ label: mp.name, value: mp.id }])
      this.cdr.detectChanges()
      this.field.formControl.setValue(mp.id)
    }
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
