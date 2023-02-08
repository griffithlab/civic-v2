import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
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
  Maybe,
  QuickAddVariantGQL,
  QuickAddVariantMutation,
  QuickAddVariantMutationVariables,
  Variant,
  VariantSelectTypeaheadFieldsFragment,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { BehaviorSubject, Observable, Subject } from 'rxjs'

type VariantQuickAddModel = {
  name?: string
  geneId?: number
}

type VariantQuickAddDisplay = {
  message?: string
}

@UntilDestroy()
@Component({
  selector: 'cvc-variant-quick-add-form',
  templateUrl: './variant-quick-add.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcVariantQuickAddForm implements OnChanges {
  @Input()
  set cvcGeneId(id: Maybe<number>) {
    if (!id) return
    this.geneId$.next(id)
  }
  @Input()
  set cvcGeneName(name: Maybe<string>) {
    if (!name) return
    this.geneName$.next(name)
  }

  @Input()
  set cvcSearchString(str: string) {
    if (!str) return
    this.searchString$.next(str)
  }

  @Output() cvcOnCreate =
    new EventEmitter<VariantSelectTypeaheadFieldsFragment>()

  model: Partial<QuickAddVariantMutationVariables>
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  options: NoStateFormOptions
  formLayout: NzFormLayoutType

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
  formMessageDisplay$: BehaviorSubject<VariantQuickAddDisplay>

  addVariantMutator: MutatorWithState<
    QuickAddVariantGQL,
    QuickAddVariantMutation,
    QuickAddVariantMutationVariables
  >

  mutationState?: MutationState
  successMessage?: string

  constructor(
    private query: QuickAddVariantGQL,
    private errors: NetworkErrorsService
  ) {
    // configure form
    this.form = new UntypedFormGroup({})
    this.model = { name: '' }
    this.formLayout = 'horizontal'
    this.options = { formState: { formLayout: this.formLayout } }

    this.onSubmit$ = new Subject<VariantQuickAddModel>()
    this.searchString$ = new BehaviorSubject<Maybe<string>>(undefined)

    this.geneName$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.geneId$ = new BehaviorSubject<Maybe<number>>(undefined)
    this.formMessageDisplay$ = new BehaviorSubject<VariantQuickAddDisplay>({
      message: 'Variant does not exist, create it?',
    })

    this.queryMutator = new MutatorWithState(this.errors)

    this.addVariantMutator = new MutatorWithState(this.errors)

    this.fields = [
      {
        key: 'geneId',
        hide: true,
        props: {
          required: true,
        },
      },
      {
        key: 'name',
        hide: true,
        props: {
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
    this.mutationState = this.addVariantMutator.mutate(
      this.query,
      {
        name: model.name,
        geneId: model.geneId,
      },
      {},
      (data) => {
        console.log('variant-quick-add submit data callback', data)
        if (!data.addVariant) return
        // const vid = data.addVariant.variant.id
        this.formMessageDisplay$.next({ message: undefined })
        setTimeout(() => {
          if (data && data.addVariant) {
            const variant = data.addVariant
              .variant as VariantSelectTypeaheadFieldsFragment
            this.cvcOnCreate.next(variant)
          }
        }, 1000)
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcGeneId) {
      const st = changes.cvcGeneId.currentValue
      this.geneId$.next(st)
      this.model = { ...this.model, geneId: st }
    }
    if (changes.cvcGeneName) {
      const id = changes.cvcGeneName.currentValue
      this.geneName$.next(id)
    }
    if (changes.cvcSearchString) {
      const name = changes.cvcSearchString.currentValue
      this.model = { ...this.model, name: name }
    }
  }
}
