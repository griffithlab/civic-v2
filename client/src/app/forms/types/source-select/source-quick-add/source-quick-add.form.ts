import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms'
import { ApolloQueryResult } from '@apollo/client/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { formatSourceTypeEnum } from '@app/core/utilities/enum-formatters/format-source-type-enum'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'
import { NoStateFormOptions } from '@app/forms/states/base.state'
import { Maybe, SourceSource } from '@app/generated/civic.apollo.types'
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core'
import { QueryRef } from 'apollo-angular'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule, NzFormLayoutType } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { Subject, map, tap } from 'rxjs'
import {
  QuickAddSourceCheckCitationGQL,
  QuickAddSourceCheckCitationQuery,
  QuickAddSourceCheckCitationQueryVariables,
  QuickAddSourceRemoteCitationGQL,
  QuickAddSourceRemoteCitationMutation,
  QuickAddSourceRemoteCitationMutationVariables,
} from './source-quick-add.query.gql.generated'

type SourceQuickAddModel = {
  citationId?: string
  sourceType?: SourceSource
}

// mirrors the select's NotFoundDisplay, with showAddForm removed
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

@Component({
  selector: 'cvc-source-quick-add-form',
  standalone: true,
  templateUrl: './source-quick-add.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NzButtonModule,
    NzFormModule,
    NzGridModule,
    NzIconModule,
    CvcFormSubmissionStatusDisplayModule,
  ],
})
export class CvcSourceQuickAddForm implements OnInit, OnChanges {
  @Input() cvcSourceType?: SourceSource
  @Input() cvcCitationId?: string

  @Output() cvcOnCreate = new EventEmitter<number>()

  private readonly checkCitation = inject(QuickAddSourceCheckCitationGQL)
  private readonly addRemoteCitation = inject(QuickAddSourceRemoteCitationGQL)
  private readonly errors = inject(NetworkErrorsService)
  private readonly destroyRef = inject(DestroyRef)

  model: SourceQuickAddModel = {
    citationId: '',
    sourceType: SourceSource.Pubmed,
  }

  form = new UntypedFormGroup({})
  formLayout: NzFormLayoutType = 'horizontal'
  options: NoStateFormOptions = {
    formState: { formLayout: this.formLayout },
  }

  fields: FormlyFieldConfig[] = [
    { key: 'citationId', props: { hidden: true } },
    { key: 'sourceType', props: { hidden: true } },
  ]

  onSubmit$ = new Subject<SourceQuickAddModel>()

  /** the remote citation lookup, undefined until the first result arrives */
  protected readonly checkResult = signal<Maybe<CitationCheckResult>>(undefined)
  protected readonly display = signal<SourceQuickAddDisplay>({
    message: '',
    showSpinner: true,
  })

  addSourceStubMutator = new MutatorWithState<
    QuickAddSourceRemoteCitationGQL,
    QuickAddSourceRemoteCitationMutation,
    QuickAddSourceRemoteCitationMutationVariables
  >(this.errors)

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

  citationString?: string

  constructor() {
    this.onSubmit$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.submitSourceStub())
  }

  ngOnInit(): void {
    if (
      this.model.citationId === undefined ||
      this.model.sourceType === undefined
    ) {
      console.error('source-quick-add provided invalid initial model')
      return
    }

    this.display.set({
      message: this.messageOptions.searchCitation(
        this.model.citationId,
        this.model.sourceType
      ),
      showSpinner: true,
    })

    this.queryRef = this.checkCitation.watch({
      variables: {
        citationId: this.model.citationId,
        sourceType: this.model.sourceType,
      },
    })

    this.queryRef.valueChanges
      .pipe(
        map((result: ApolloQueryResult<QuickAddSourceCheckCitationQuery>) => ({
          loading: result.loading,
          citation: result.data ? result.data.remoteCitation : null,
          model: this.model,
        })),
        tap((result: CitationCheckResult) => {
          this.citationString = result.citation ?? undefined
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((result: CitationCheckResult) => {
        this.checkResult.set(result)
        this.display.set(this.displayFor(result))
      })
  }

  private displayFor(result: CitationCheckResult): SourceQuickAddDisplay {
    const { loading, citation, model } = result
    if (loading) {
      return {
        message: this.messageOptions.searchCitation(
          model.citationId,
          model.sourceType
        ),
        showSpinner: true,
      }
    }
    if (citation !== null) {
      return {
        message: this.messageOptions.foundCitation(
          model.citationId,
          formatSourceTypeEnum(model.sourceType!),
          citation
        ),
        showSpinner: false,
      }
    }
    return {
      message: this.messageOptions.noCitation(
        model.citationId,
        model.sourceType
      ),
      showSpinner: false,
    }
  }

  submitSourceStub() {
    if (
      this.model.citationId === undefined ||
      this.model.sourceType === undefined
    ) {
      return
    }
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
        if (!data.addRemoteCitation) return
        this.successMessage = `New Source "${this.citationString}" added.`
        // No cache pre-write here: the select's base fetches the new Source
        // with its Linkable fragment cache-first and only commits the
        // selection once that resolves, which is what the old synthesized
        // writeQuery plus a 1s readFragment delay was approximating.
        this.cvcOnCreate.next(data.addRemoteCitation.newSource.id)
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcSourceType) {
      this.model = {
        ...this.model,
        sourceType: changes.cvcSourceType.currentValue,
      }
    }
    if (changes.cvcCitationId) {
      const citationId = changes.cvcCitationId.currentValue
      this.model = { ...this.model, citationId }
      if (this.queryRef && this.model.sourceType) {
        this.queryRef.refetch({
          citationId,
          sourceType: this.model.sourceType,
        })
      }
    }
  }
}
