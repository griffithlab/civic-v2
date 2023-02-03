import {
  AfterViewInit,
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
import { tag } from 'rxjs-spy/operators'

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
export class SourceQuickAddForm implements AfterViewInit {
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
  ngAfterViewInit(): void {
    console.log('view init')
    this.form.valueChanges
      .pipe(tag('source-quick-add form.valueChanges'))
      .subscribe()
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
