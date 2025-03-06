import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { ApolloQueryResult } from '@apollo/client/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { formatSourceTypeEnum } from '@app/core/utilities/enum-formatters/format-source-type-enum'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { NoStateFormOptions } from '@app/forms/states/base.state'
import {
  Maybe,
  QuickAddSourceCheckCitationGQL,
  QuickAddSourceCheckCitationQuery,
  QuickAddSourceCheckCitationQueryVariables,
  QuickAddSourceRemoteCitationGQL,
  QuickAddSourceRemoteCitationMutation,
  QuickAddSourceRemoteCitationMutationVariables,
  Source,
  SourceSelectTypeaheadFieldsFragmentDoc,
  SourceSource,
  SourceStub,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { Apollo, gql, QueryRef } from 'apollo-angular'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { BehaviorSubject, map, Observable, startWith, Subject, tap } from 'rxjs'
import { tag } from 'rxjs-spy/operators'

type SourceQuickAddModel = {
  citationId?: string
  sourceType?: SourceSource
}

// mirrors entity-select's NotFoundDisplay, with showAddForm removed
type SourceQuickAddDisplay = {
  message: string
  showSpinner: boolean
}

type CvcSourceQuickAddMessageFn = (
  searchStr: Maybe<string>,
  paramName?: string,
  citation?: string
) => string

export type CvcSourceQuickAddMessageOptions = {
  empty: CvcSourceQuickAddMessageFn
  searchCitation: CvcSourceQuickAddMessageFn
  foundCitation: CvcSourceQuickAddMessageFn
  noCitation: CvcSourceQuickAddMessageFn
}

type CitationCheckResult = {
  loading: Maybe<boolean>
  citation: Maybe<string> | null
  model: SourceQuickAddModel
}

@UntilDestroy()
@Component({
    selector: 'cvc-source-quick-add',
    templateUrl: './source-quick-add.form.html',
    styleUrls: ['./source-quick-add.form.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class SourceQuickAddForm implements OnInit, OnChanges {
  @Input() cvcSourceType?: SourceSource
  @Input() cvcCitationId?: string

  @Output() cvcOnCreate = new EventEmitter<number>()

  model: SourceQuickAddModel

  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  options: NoStateFormOptions
  formLayout: NzFormLayoutType

  // SOURCE STREAMS
  onSubmit$: Subject<SourceQuickAddModel>
  citationId$: BehaviorSubject<string>
  sourceType$: BehaviorSubject<SourceSource>

  // PRESENTATION STREAMS
  formMessageDisplay$!: Observable<SourceQuickAddDisplay>

  addSourceStubMutator: MutatorWithState<
    QuickAddSourceRemoteCitationGQL,
    QuickAddSourceRemoteCitationMutation,
    QuickAddSourceRemoteCitationMutationVariables
  >

  mutationState?: MutationState
  successMessage?: string

  messageOptions: CvcSourceQuickAddMessageOptions = {
    empty: (query, paramName) =>
      `No ${paramName} Source with a citation ID of "${query}"`,
    searchCitation: (query, paramName) =>
      `Searching ${paramName} for a citation ID of "${query}"`,
    foundCitation: (query, paramName, citation) =>
      `Found ${paramName} citation "${citation}" with ID ${query}`,
    noCitation: (query, paramName) =>
      `No ${paramName} Source with a citation ID of "${query}" was found`,
  }

  queryRef!: QueryRef<
    QuickAddSourceCheckCitationQuery,
    QuickAddSourceCheckCitationQueryVariables
  >

  checkIsLoading$!: Observable<boolean>
  sourceCitation$!: Observable<string | boolean>
  checkResult$!: Observable<CitationCheckResult>
  citationString?: string
  constructor(
    private checkCitation: QuickAddSourceCheckCitationGQL,
    private addRemoteCitation: QuickAddSourceRemoteCitationGQL,
    private errors: NetworkErrorsService,
    private apollo: Apollo,
    private cdr: ChangeDetectorRef
  ) {
    // configure form
    this.form = new UntypedFormGroup({})
    this.model = { citationId: '', sourceType: SourceSource.Pubmed }
    this.formLayout = 'horizontal'
    this.options = { formState: { formLayout: this.formLayout } }

    this.onSubmit$ = new Subject<SourceQuickAddModel>()
    this.citationId$ = new BehaviorSubject<string>('')
    this.sourceType$ = new BehaviorSubject<SourceSource>(SourceSource.Pubmed)

    this.addSourceStubMutator = new MutatorWithState(this.errors)

    this.fields = [
      {
        key: 'citationId',
        props: {
          hidden: true,
        },
      },
      {
        key: 'sourceType',
        props: {
          hidden: true,
        },
      },
    ]

    // handle submit events from form
    this.onSubmit$.pipe(untilDestroyed(this)).subscribe((model) => {
      console.log('disease-quick-add form model submitted.', model)
      this.submitSourceStub()
    })
  }

  ngOnInit(): void {
    // call GQL watch, save queryRef
    if (
      this.model.citationId !== undefined &&
      this.model.sourceType !== undefined
    ) {
      this.queryRef = this.checkCitation.watch({
        citationId: this.model.citationId,
        sourceType: this.model.sourceType,
      })

      this.checkResult$ = this.queryRef.valueChanges.pipe(
        map((result: ApolloQueryResult<QuickAddSourceCheckCitationQuery>) => {
          return {
            loading: result.loading,
            citation: result.data ? result.data.remoteCitation : null,
            model: this.model,
          }
        }),
        tap((result: CitationCheckResult) => {
          this.citationString = result.citation ? result.citation : undefined
        })
      )

      this.citationId$.pipe(untilDestroyed(this)).subscribe((id: string) => {
        if (this.model.sourceType) {
          this.queryRef.refetch({
            citationId: id,
            sourceType: this.model.sourceType,
          })
        }
      })
    } else {
      console.error('source-quick-add provided invalid initial model')
      return
    }

    this.formMessageDisplay$ = this.checkResult$.pipe(
      // tag('******** source-quick-add formMessageDisplay$'),
      map((result: CitationCheckResult) => {
        const loading = result.loading
        const citation = result.citation
        const model = result.model

        // citation search
        if (loading) {
          return {
            message: this.messageOptions.searchCitation(
              model.citationId,
              model.sourceType
            ),
            showSpinner: true,
          }
        }
        // citation found
        if (!loading && citation !== null) {
          return {
            message: this.messageOptions.foundCitation(
              model.citationId,
              formatSourceTypeEnum(model.sourceType!),
              citation
            ),
            showSpinner: false,
          }
        }
        // citation not found
        if (!loading && citation === null) {
          return {
            message: this.messageOptions.noCitation(
              model.citationId,
              model.sourceType
            ),
            showSpinner: false,
          }
        }
        return {
          message: 'UNHANDLED MESSAGE STATE',
          showSpinner: false,
        }
      }),
      startWith({
        message: this.messageOptions.searchCitation(
          this.model.citationId,
          this.model.sourceType
        ),
        showSpinner: true,
      })
    )
  }
  submitSourceStub() {
    if (
      this.model.citationId !== undefined &&
      this.model.sourceType !== undefined
    ) {
      this.mutationState = this.addSourceStubMutator.mutate(
        this.addRemoteCitation,
        {
          input: {
            citationId: this.model.citationId,
            sourceType: this.model.sourceType,
          },
        },
        {},
        (data) => {
          console.log('source-quick-add submit data callback', data)
          if (data.addRemoteCitation) {
            this.successMessage = `New Source "${this.citationString}" added.`
            const source = data.addRemoteCitation.newSource
            const sourceType = formatSourceTypeEnum(this.model.sourceType!)
            const citation = this.citationString
              ? this.citationString
              : 'NO CITATION'
            const query = {
              query: gql`
                query WriteLocalSource($id: Int!) {
                  source(id: $id) {
                    id
                    name
                    link
                    citation
                    citationId
                    sourceType
                  }
                }
              `,
              data: {
                source: {
                  __typename: 'Source',
                  id: source.id,
                  name: `${sourceType}: ${citation}`,
                  link: `sources/${source.id}`,
                  citation: citation,
                  citationId: this.model.citationId,
                  sourceType: this.model.sourceType,
                },
              },
              variables: {
                id: source.id,
              },
            }
            const writeResult = this.apollo.client.cache.writeQuery(query)
            if (!writeResult) {
              console.error(
                'source-quick-add.form Source writeQuery failed.',
                query
              )
            }
            setTimeout(() => {
              const fragment = {
                id: `Source:${source.id}`,
                fragment: gql`
                  fragment LinkableSource on Source {
                    id
                    name
                    link
                  }
                `,
              }
              const newSource = this.apollo.client.cache.readFragment(
                fragment
              ) as Source
              if (newSource !== null) {
                this.cvcOnCreate.next(newSource.id)
              }
            }, 1000)
          }
        }
      )
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcSourceType) {
      const st = changes.cvcSourceType.currentValue
      this.sourceType$.next(st)
      this.model = { ...this.model, sourceType: st }
    }
    if (changes.cvcCitationId) {
      const id = changes.cvcCitationId.currentValue
      this.citationId$.next(id)
      this.model = { ...this.model, citationId: id }
    }
  }
}
