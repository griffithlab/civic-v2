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
  LinkableGeneGQL,
  Maybe,
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
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import { BehaviorSubject, lastValueFrom } from 'rxjs'
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
  // STATE SOURCE STREAMS
  // onGeneId$!: BehaviorSubject<Maybe<number>>

  // LOCAL SOURCE STREAMS
  // onGeneName$: BehaviorSubject<Maybe<string>>

  // LOCAL PRESENTATION STREAMS
  placeholder$: BehaviorSubject<string>

  // FieldTypeConfig defaults
  defaultOptions: CvcMolecularProfileSelectFieldOptions = {
    props: {
      label: 'Molecular Profile',
      placeholder: 'Search Molecular Profiles',
      // requireGene: true,
      // requireGenePlaceholderFn: (geneName: string) => {
      //   return `Search ${geneName} Molecular Profiles`
      // },
      // requireGenePrompt: 'Select a Gene to search its MolecularProfiles',
      isMultiSelect: false,
      entityName: {
        singular: 'Molecular Profile',
        plural: 'Molecular Profiles',
      },
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(
    private taq: MolecularProfileSelectTypeaheadGQL,
    private tq: MolecularProfileSelectTagGQL,
    private geneQuery: LinkableGeneGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    super()
    // this.onGeneName$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.placeholder$ = new BehaviorSubject<string>(
      this.defaultOptions.props!.placeholder
    )
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEntitySelectField({
      typeaheadQuery: this.taq,
      // typeaheadParam$: this.onGeneId$ ? this.onGeneId$ : undefined,
      // typeaheadParamName$: this.onGeneName$ ? this.onGeneName$ : undefined,
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
  } // ngAfterViewInit

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
      // this.onGeneId$ = this.state.fields.geneId$
      // this.onGeneId$.pipe(untilDestroyed(this)).subscribe((gid) => {
      //   this.onGeneId(gid)
      // })
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

  // private onGeneId(gid: Maybe<number>): void {
  //   // if field config indicates that a geneId is required, and none is provided,
  //   // set model to undefined (this resets the variant model if gene field is reset)
  //   // and set placeholder to the 'requires gene' placeholder
  //   if (!gid && this.props.requireGene) {
  //     this.resetField()
  //     this.props.description = this.props.requireGenePrompt
  //     this.props.extraType = 'prompt'
  //     this.onGeneName$.next(undefined)
  //     this.placeholder$.next(this.props.placeholder)
  //   } else if (gid) {
  //     this.props.description = undefined
  //     this.props.extraType = undefined
  //     // id provided, so fetch its name and update the placeholder string.
  //     // lastValueFrom is used b/c fetch could return 'loading' events
  //     lastValueFrom(
  //       this.geneQuery.fetch({ geneId: gid }, { fetchPolicy: 'cache-first' })
  //     ).then(({ data }) => {
  //       if (!data?.gene?.name) {
  //         console.error(
  //           `${this.field.id} could not fetch gene name for Gene:${gid}.`
  //         )
  //       } else {
  //         // update placeholder
  //         if (this.props.requireGene) {
  //           this.placeholder$.next(
  //             this.props.requireGenePlaceholderFn(data.gene.name)
  //           )
  //         } else {
  //           this.placeholder$.next(this.props.placeholder)
  //         }
  //         // emit gene name for quick-add form Input
  //         this.onGeneName$.next(data.gene.name)
  //       }
  //     })
  //   }
  // }
}
