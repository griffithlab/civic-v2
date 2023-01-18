import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  Maybe,
  QuickAddVariantGQL,
  QuickAddVariantMutation,
  QuickAddVariantMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { BehaviorSubject, Subject } from 'rxjs'

type VariantQuickAddModel = {
  name?: string
  geneId?: number
}

const variantQuickAddInitialModel: VariantQuickAddModel = {
  name: undefined,
  geneId: undefined,
}

@UntilDestroy()
@Component({
  selector: 'cvc-variant-quick-add-form',
  templateUrl: './variant-quick-add.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcVariantQuickAddForm {
  @Input()
  set cvcGeneId(id: number) {
    if (!id) return
    this.geneId$.next(id)
  }
  @Input()
  set cvcGeneName(name: string) {
    if (!name) return
    this.geneName$.next(name)
  }

  @Input()
  set cvcSearchString(str: string) {
    if (!str) return
    this.searchString$.next(str)
  }

  @Output() cvcOnCreate = new EventEmitter<number>()

  model: VariantQuickAddModel = variantQuickAddInitialModel
  form: UntypedFormGroup = new UntypedFormGroup({})
  fields: FormlyFieldConfig[]
  options: FormlyFormOptions = {}

  queryMutator: MutatorWithState<
    QuickAddVariantGQL,
    QuickAddVariantMutation,
    QuickAddVariantMutationVariables
  >

  // SOURCE STREAMS
  onSubmit$: Subject<VariantQuickAddModel>
  geneId$: BehaviorSubject<Maybe<number>>
  searchString$: BehaviorSubject<Maybe<string>>

  // PRESENTATION STREAMS
  geneName$: BehaviorSubject<Maybe<string>>
  isSubmitting$: BehaviorSubject<boolean>
  submitSuccess$: BehaviorSubject<boolean>
  submitError$: BehaviorSubject<string[]>

  addVariantMutator: MutatorWithState<
    QuickAddVariantGQL,
    QuickAddVariantMutation,
    QuickAddVariantMutationVariables
  >

  constructor(
    private query: QuickAddVariantGQL,
    private errors: NetworkErrorsService
  ) {
    this.onSubmit$ = new Subject<VariantQuickAddModel>()
    this.geneName$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.geneId$ = new BehaviorSubject<Maybe<number>>(undefined)
    this.searchString$ = new BehaviorSubject<Maybe<string>>(undefined)

    this.queryMutator = new MutatorWithState(this.errors)
    this.isSubmitting$ = new BehaviorSubject<boolean>(false)
    this.submitSuccess$ = new BehaviorSubject<boolean>(false)
    this.submitError$ = new BehaviorSubject<any[]>([])

    this.addVariantMutator = new MutatorWithState(this.errors)

    this.fields = [
      {
        key: 'geneId',
        props: {
          hidden: true,
          required: true,
        },
      },
      {
        key: 'name',
        props: {
          hidden: true,
          required: true,
        },
      },
    ]

    // keep form module updated w/ Inputs
    this.geneId$.pipe(untilDestroyed(this)).subscribe((id: Maybe<number>) => {
      this.model.geneId = id
    })

    this.searchString$
      .pipe(untilDestroyed(this))
      .subscribe((str: Maybe<string>) => {
        this.model.name = str
      })

    // handle submit events from form
    this.onSubmit$.pipe(untilDestroyed(this)).subscribe((model) => {
      console.log('variant-quick-add form model submitted.', model)
      this.submitVariant(model)
    })
  }

  submitVariant(model: VariantQuickAddModel) {
    if (!(model.name && model.geneId)) {
      console.error(
        `variant-quick-add form submitVariant requires model with valid name and geneId.`
      )
      return
    }
    let state = this.addVariantMutator.mutate(
      this.query,
      {
        name: model.name,
        geneId: model.geneId,
      },
      {},
      (data) => {
        console.log('variant-quick-add submit data callback', data)
        if (!data.addVariant) return
        const vid = data.addVariant.variant.id
        this.cvcOnCreate.next(vid)
      }
    )

    state.submitSuccess$.pipe(untilDestroyed(this)).subscribe((res) => {
      console.log('variant-quick-add submitSuccess$', res)
      this.submitSuccess$.next(res)
    })

    state.submitError$.pipe(untilDestroyed(this)).subscribe((errs) => {
      console.log('variant-quick-add submitError$', errs)
      this.submitError$.next(errs)
      // if (errs) {
      //   this.errorMessages = errs
      //   this.success = false
      // }
    })

    state.isSubmitting$.pipe(untilDestroyed(this)).subscribe((loading) => {
      this.isSubmitting$.next(loading)
    })
  }
}
