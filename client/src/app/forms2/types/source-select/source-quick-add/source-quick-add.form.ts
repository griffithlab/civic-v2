import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
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
  QuickAddSourceRemoteCitationGQL,
  QuickAddSourceRemoteCitationMutation,
  QuickAddSourceRemoteCitationMutationVariables,
  SourceSource,
  SourceStub,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs'

type SourceQuickAddModel = {
  citationId?: string
  sourceType?: SourceSource
}

@UntilDestroy()
@Component({
  selector: 'cvc-source-quick-add',
  templateUrl: './source-quick-add.form.html',
  styleUrls: ['./source-quick-add.form.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SourceQuickAddForm {
  @Input()
  set cvcSourceType(sourceType: SourceSource) {
    if (!sourceType) return
    this.model = { ...this.model, sourceType: sourceType }
  }
  @Input()
  set cvcCitationId(citationId: string) {
    if (!citationId) return
    this.model = { ...this.model, citationId: citationId }
  }

  @Output() cvcOnCreate = new EventEmitter<SourceStub>()

  // export type AddRemoteCitationInput = {
  //   /** The external id for the source to add. */
  //   citationId: Scalars['String'];
  //   /** A unique identifier for the client performing the mutation. */
  //   clientMutationId?: InputMaybe<Scalars['String']>;
  //   /** The origin of the external source. */
  //   sourceType: SourceSource;
  // };
  model: SourceQuickAddModel

  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  options: NoStateFormOptions
  formLayout: NzFormLayoutType

  // SOURCE STREAMS
  onSubmit$: Subject<SourceQuickAddModel>
  citationId$: BehaviorSubject<Maybe<string>>
  sourceType$: ReplaySubject<SourceSource>

  addSourceStubMutator: MutatorWithState<
    QuickAddSourceRemoteCitationGQL,
    QuickAddSourceRemoteCitationMutation,
    QuickAddSourceRemoteCitationMutationVariables
  >

  mutationState?: MutationState
  successMessage?: string

  constructor(
    private query: QuickAddSourceRemoteCitationGQL,
    private errors: NetworkErrorsService
  ) {
    // configure form
    this.form = new UntypedFormGroup({})
    this.model = { citationId: '', sourceType: SourceSource.Pubmed }
    this.formLayout = 'horizontal'
    this.options = { formState: { formLayout: this.formLayout } }

    this.onSubmit$ = new Subject<SourceQuickAddModel>()
    this.citationId$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.sourceType$ = new ReplaySubject<SourceSource>()

    this.addSourceStubMutator = new MutatorWithState(this.errors)

    this.fields = [
      {
        key: 'citationId',
        type: 'input',
        props: {
          label: 'citationId',
          required: true,
          keydown: (k, e) => {
            if (e.code === 'Tab') {
              e.stopPropagation()
            }
          },
        },
      },
      {
        key: 'sourceType',
        type: 'input',
        props: {
          label: 'Source Type',
          required: true,
        },
      },
    ]

    this.citationId$
      .pipe(untilDestroyed(this))
      .subscribe((id: Maybe<string>) => {
        if (!id) return
        this.model = { ...this.model, citationId: id }
      })
    this.sourceType$
      .pipe(untilDestroyed(this))
      .subscribe((sourceType: SourceSource) => {
        if (!sourceType) return
        this.model = { ...this.model, sourceType: sourceType }
      })

    // handle submit events from form
    this.onSubmit$.pipe(untilDestroyed(this)).subscribe((model) => {
      console.log('disease-quick-add form model submitted.', model)
      this.submitSourceStub()
    })
  }
  submitSourceStub() {
    if (
      this.model.citationId !== undefined &&
      this.model.sourceType !== undefined
    ) {
      this.mutationState = this.addSourceStubMutator.mutate(
        this.query,
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
}
