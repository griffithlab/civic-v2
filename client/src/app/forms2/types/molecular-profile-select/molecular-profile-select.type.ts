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
import { CvcSelectEntityName } from '@app/forms2/components/entity-select/entity-select.component'
import { BaseFieldType } from '@app/forms2/mixins/base/base-field'
import { EntitySelectField } from '@app/forms2/mixins/entity-select-field.mixin'
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
} from '@app/generated/civic.apollo'
import { untilDestroyed } from '@ngneat/until-destroy'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyFieldProps,
} from '@ngx-formly/core'
import { Apollo } from 'apollo-angular'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { BehaviorSubject } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import mixin from 'ts-mixin-extended'

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
  extends FormlyFieldConfig<CvcMolecularProfileSelectFieldProps> {
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcMolecularProfileSelectField
  extends MolecularProfileSelectMixin
  implements AfterViewInit
{
  // LOCAL PRESENTATION STREAMS
  placeholder$: BehaviorSubject<string>

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
    expressions: {
      hide: (field) => {
        console.log('mp expression.hide: ', field)
        if (
          field.props?.watchVariantMolecularProfileId &&
          field.model?.variantId
        ) {
          return false
        } else {
          return true
        }
      },
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
    this.placeholder$ = new BehaviorSubject<string>(
      this.defaultOptions.props!.placeholder
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

    this.placeholder$.next(this.props.placeholder)
    this.onValueChange$.pipe(tag(`${this.field.id} onValueChange$`)).subscribe()

    if (this.props.watchVariantMolecularProfileId) {
      this.onTagClose$.pipe(untilDestroyed(this)).subscribe(() => {
        this.field.hide = true
      })
    }
  } // ngAfterViewInit

  private configureStateConnections() {
    if (!this.state) return
    // subscribe to variant molecular profile id updates if requested
    if (this.props.watchVariantMolecularProfileId) {
      if (!this.state.fields.variantMolecularProfile$) {
        console.error(
          `${this.field.id} watchVariantMolecularProfile is set, but no variantMolecularProfile$ subject found on state.`
        )
        return
      }
      this.state.fields.variantMolecularProfile$
        .pipe(untilDestroyed(this))
        .subscribe((mp: MolecularProfile) => {
          if (!mp) return
          this.field.formControl.setValue(mp.id)
          // this.result$.next([mp])
          // if (this.options.build) {
          //   this.options.build(this.field)
          // }
        })
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
