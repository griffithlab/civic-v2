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
  MolecularProfile,
  Variant,
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
import { Apollo, gql } from 'apollo-angular'
import { NzSelectOptionInterface } from 'ng-zorro-antd/select'
import {
  BehaviorSubject,
  combineLatest,
  lastValueFrom,
  map,
  Observable,
} from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import mixin from 'ts-mixin-extended'

export type CvcVariantSelectFieldOptions = Partial<
  FieldTypeConfig<CvcVariantSelectFieldProps>
>

export interface CvcVariantSelectFieldProps extends FormlyFieldProps {
  isMultiSelect: boolean // is child of a repeat-field type
  entityName: CvcSelectEntityName
  placeholder: string
  tooltip?: string
  requireGene: boolean // if true, disables field if no geneId, and adjust placeholders, prompts
  requireGenePlaceholderFn: (geneName: string) => string // returns placeholder that includes gene name
  requireGenePrompt: string // prompt displayed if gene unspecified
  emitMolecularProfileId: boolean
  extraType?: CvcFormFieldExtraType
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
  onGeneName$: BehaviorSubject<Maybe<string>>

  // LOCAL PRESENTATION STREAMS
  placeholder$: BehaviorSubject<string>
  onModel$ = new Observable<any>()

  // FieldTypeConfig defaults
  defaultOptions: CvcVariantSelectFieldOptions = {
    props: {
      label: 'Variant',
      placeholder: 'Search Variants',
      requireGene: true,
      requireGenePlaceholderFn: (geneName: string) => {
        return `Search ${geneName} Variants`
      },
      requireGenePrompt: 'Select a Gene to search its Variants',
      isMultiSelect: false,
      emitMolecularProfileId: false,
      entityName: { singular: 'Variant', plural: 'Variants' },
    },
  }

  @ViewChildren('optionTemplates', { read: TemplateRef })
  optionTemplates?: QueryList<TemplateRef<any>>

  constructor(
    private taq: VariantSelectTypeaheadGQL,
    private tq: VariantSelectTagGQL,
    private geneQuery: LinkableGeneGQL,
    private changeDetectorRef: ChangeDetectorRef,
    private apollo: Apollo
  ) {
    super()
    this.onGeneName$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.placeholder$ = new BehaviorSubject<string>(
      this.defaultOptions.props!.placeholder
    )
  }

  ngAfterViewInit(): void {
    this.configureBaseField() // mixin fn
    this.configureStateConnections() // local fn
    this.configureEntitySelectField({
      typeaheadQuery: this.taq,
      typeaheadParam$: this.onGeneId$ ? this.onGeneId$ : undefined,
      typeaheadParamName$: this.onGeneName$ ? this.onGeneName$ : undefined,
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

    // update model provided to quick-add form when either sourceType or citationId changes
    this.onModel$ = combineLatest([this.onGeneId$, this.onSearch$]).pipe(
      map(([geneId, name]: [Maybe<number>, Maybe<string>]) => {
        return { geneId: geneId, name: name }
      })
    )
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
      this.onGeneId$ = this.state.fields.geneId$
      this.onGeneId$
        .pipe(
          // tag('variant-select onGeneId$'),
          untilDestroyed(this)
        )
        .subscribe((gid) => {
          this.onGeneId(gid)
        })
    }
    if (this.props.emitMolecularProfileId) {
      if (!this.state?.fields.variantMolecularProfile$) {
        console.error(
          `${this.field.id} emitMolecularProfileId is set, but no emitMolecularProfileId$ subject found on state.`
        )
        return
      }
      if (this.field.props.isMultiSelect) {
        console.error(
          `${this.field.id} emitMolecularProfileId is set, however feature is only applicable to non-multi-select fields.`
        )
        return
      }
      this.onValueChange$
        .pipe(untilDestroyed(this))
        .subscribe((value: Maybe<number | number[]>) => {
          if (!value || Array.isArray(value)) return
          const fragment = {
            id: `Variant:${value}`,
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
          const variant = this.apollo.client.readFragment(fragment) as Variant
          if (!variant) {
            console.error(
              `${this.field.id} could not resolve its Variant from the cache to obtain its singleVariantMolecularProfile`
            )
          } else {
            this.state!.fields.variantMolecularProfile$.next(
              variant.singleVariantMolecularProfile
            )
          }
        })
    }
  }

  getTypeaheadVarsFn(str: string, param: Maybe<number>) {
    return {
      name: str,
      geneId: param,
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

  private onGeneId(gid: Maybe<number>): void {
    // if field config indicates that a geneId is required, and none is provided,
    // set model to undefined (this resets the variant model if gene field is reset)
    // and set placeholder to the 'requires gene' placeholder
    if (!gid && this.props.requireGene) {
      this.resetField()
      this.props.description = this.props.requireGenePrompt
      this.props.extraType = 'prompt'
      this.onGeneName$.next(undefined)
      this.placeholder$.next(this.props.placeholder)
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
          // update placeholder
          if (this.props.requireGene) {
            this.placeholder$.next(
              this.props.requireGenePlaceholderFn(data.gene.name)
            )
          } else {
            this.placeholder$.next(this.props.placeholder)
          }
          // emit gene name for quick-add form Input
          this.onGeneName$.next(data.gene.name)
        }
      })
    }
  }
}
