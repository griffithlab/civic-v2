import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { NoStateFormOptions } from '@app/forms2/states/base.state'
import {
  AddRemoteCitationInput,
  Maybe,
  QuickAddSourceCheckCitationGQL,
  QuickAddSourceCheckCitationQuery,
  QuickAddSourceCheckCitationQueryVariables,
  QuickAddSourceRemoteCitationGQL,
  QuickAddSourceRemoteCitationMutation,
  QuickAddSourceRemoteCitationMutationVariables,
  SourceSource,
  SourceStub,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { QueryRef } from 'apollo-angular'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import {
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  map,
  Observable,
  ReplaySubject,
  startWith,
  Subject,
} from 'rxjs'
import { pluck } from 'rxjs-etc/operators'
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

@UntilDestroy()
@Component({
  selector: 'cvc-source-quick-add',
  templateUrl: './source-quick-add.form.html',
  styleUrls: ['./source-quick-add.form.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceQuickAddForm implements OnInit, OnChanges {
  @Input() cvcSourceType?: SourceSource
  @Input() cvcCitationId?: string

  @Output() cvcOnCreate = new EventEmitter<SourceStub>()

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
  sourceCitation$!: Observable<Maybe<string | boolean>>
  constructor(
    private checkCitation: QuickAddSourceCheckCitationGQL,
    private addRemoteCitation: QuickAddSourceRemoteCitationGQL,
    private errors: NetworkErrorsService
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
      this.checkIsLoading$ = this.queryRef.valueChanges.pipe(
        untilDestroyed(this),
        pluck('loading'),
        distinctUntilChanged()
      )

      this.sourceCitation$ = this.queryRef.valueChanges.pipe(
        pluck('data', 'remoteCitation'),
        map((citation: Maybe<string | boolean>) => {
          return citation ? citation : false
        })
      )
    } else {
      console.error('source-quick-add provided invalid initial model')
      return
    }
    // FIXME: combine sourceCitation and checkIsLoading into single observable so that messageDisplay isn't called multiple times during loading
    this.formMessageDisplay$ = combineLatest([
      this.form.valueChanges,
      this.checkIsLoading$.pipe(startWith(false)),
      this.sourceCitation$.pipe(startWith(undefined)),
    ]).pipe(
      tag('******** source-quick-add formMessageDisplay$'),
      map(
        ([model, loading, citation]: [
          SourceQuickAddModel,
          boolean,
          Maybe<string | boolean>
        ]) => {
          console.log('model: ', this.model)
          // initial
          if (model && !loading && citation === undefined) {
            return {
              message: this.messageOptions.searchCitation(
                model.citationId,
                model.sourceType
              ),
              showSpinner: true,
            }
          }
          // citation search
          if (model && loading) {
            return {
              message: this.messageOptions.searchCitation(
                model.citationId,
                model.sourceType
              ),
              showSpinner: true,
            }
          }
          // citation found
          if (model && !loading && typeof citation === 'string') {
            return {
              message: this.messageOptions.foundCitation(
                model.citationId,
                model.sourceType,
                citation
              ),
              showSpinner: false,
            }
          }
          // citation not found
          if (model && !loading && citation === false) {
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
        }
      )
    )
    // this.form.valueChanges
    //   .pipe(untilDestroyed(this))
    //   .subscribe((model: SourceQuickAddModel) => {})

    // this.formMessageDisplay$ = this.form.valueChanges.pipe(
    //   tag('source-quick-add form.valueChanges'),
    //   map((model: SourceQuickAddModel) => {
    //     console.log('model: ', this.model)
    //     return {
    //       message: `sourceType: ${model.sourceType}; citationId: ${model.citationId}`,
    //       searchStr: model.citationId || '',
    //       showSpinner: true,
    //     }
    //   })
    // )
    // update form display messages
    // this.formMessageDisplay$ = combineLatest([
    //   this.sourceType$,
    //   this.citationId$,
    // ]).pipe(
    //   tag('******** source-quick-add formMessageDisplay$'),
    //   map(([sourceType, citationId]: [SourceSource, string]) => {
    //     console.log('model: ', this.model)
    //     return {
    //       message: `sourceType: ${sourceType}; citationId: ${citationId}`,
    //       searchStr: citationId,
    //       showSpinner: true,
    //     }
    //   })
    // )
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
          console.log('disease-quick-add submit data callback', data)
          if (data.addRemoteCitation) {
            this.successMessage = `New Source ${data.addRemoteCitation.newSource} added.`
            setTimeout(() => {
              if (
                data &&
                data.addRemoteCitation &&
                data.addRemoteCitation.newSource
              )
                this.cvcOnCreate.next(data.addRemoteCitation.newSource)
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
