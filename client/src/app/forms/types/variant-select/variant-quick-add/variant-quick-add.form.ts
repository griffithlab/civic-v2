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
import { NoStateFormOptions } from '@app/forms/states/base.state'
import {
  Maybe,
  QuickAddVariantGQL,
  QuickAddVariantMutation,
  QuickAddVariantMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { FormlyFieldConfig } from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { BehaviorSubject, Subject } from 'rxjs'
import { VariantIdWithCreationStatus } from '../variant-select.type'

type VariantQuickAddModel = {
  name?: string
  featureId?: number
  organizationId?: number
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
  set cvcFeatureId(id: Maybe<number>) {
    if (!id) return
    this.featureId$.next(id)
  }
  @Input()
  set cvcFeatureName(name: Maybe<string>) {
    if (!name) return
    this.featureName$.next(name)
  }

  @Input()
  set cvcSearchString(str: string) {
    if (!str) return
    this.searchString$.next(str)
  }

  @Output() cvcOnCreate = new EventEmitter<VariantIdWithCreationStatus>()

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
  featureId$: BehaviorSubject<Maybe<number>>
  searchString$: BehaviorSubject<Maybe<string>>

  // PRESENTATION STREAMS
  featureName$: BehaviorSubject<Maybe<string>>
  formMessageDisplay$: BehaviorSubject<VariantQuickAddDisplay>

  addVariantMutator: MutatorWithState<
    QuickAddVariantGQL,
    QuickAddVariantMutation,
    QuickAddVariantMutationVariables
  >

  mutationState?: MutationState
  successMessage?: string
  minNameLength: number

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

    this.featureName$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.featureId$ = new BehaviorSubject<Maybe<number>>(undefined)
    this.formMessageDisplay$ = new BehaviorSubject<VariantQuickAddDisplay>({
      message: 'Variant does not exist, create it?',
    })
    this.queryMutator = new MutatorWithState(this.errors)

    this.addVariantMutator = new MutatorWithState(this.errors)

    this.minNameLength = 3

    this.fields = [
      {
        key: 'featureId',
        hide: true,
        props: {
          required: true,
        },
      },
      {
        key: 'name',
        hide: true,
        props: {
          minLength: this.minNameLength,
          required: true,
        },
      },
      {
        key: 'organizationId',
        type: 'org-submit-button',
        props: {
          submitLabel: 'Add Variant',
        },
      }
    ]

    // keep form module updated w/ Inputs
    this.featureId$.pipe(untilDestroyed(this)).subscribe((id: Maybe<number>) => {
      this.model.featureId = id
    })

    this.searchString$
      .pipe(untilDestroyed(this))
      .subscribe((str: Maybe<string>) => {
        this.model.name = str
        if (
          str === undefined ||
          (str !== undefined && str.length < this.minNameLength)
        ) {
          this.formMessageDisplay$.next({
            message: `New Variant name must be at least ${this.minNameLength} characters.`,
          })
        } else {
          this.formMessageDisplay$.next({
            message: `Variant '${str}' does not exist, create it?`,
          })
        }
      })

    // handle submit events from form
    this.onSubmit$.pipe(untilDestroyed(this)).subscribe((model) => {
      console.log('variant-quick-add form model submitted.', model)
      this.submitVariant(model)
    })
  }

  submitVariant(model: VariantQuickAddModel) {
    if (!(model.name && model.featureId)) {
      console.error(
        `variant-quick-add form submitVariant requires model with valid name and featureId.`
      )
      return
    }
    this.mutationState = this.addVariantMutator.mutate(
      this.query,
      {
        name: model.name,
        featureId: model.featureId,
        organizationId: model.organizationId,
      },
      {},
      (data) => {
        console.log('variant-quick-add submit data callback', data)
        if (!data.createVariant) return
        // const vid = data.addVariant.variant.id
        this.formMessageDisplay$.next({ message: undefined })
        setTimeout(() => {
          if (data && data.createVariant) {
            this.cvcOnCreate.next({id: data.createVariant.variant.id, new: data.createVariant.new})
          }
        }, 1000)
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcFeatureId) {
      const st = changes.cvcFeatureId.currentValue
      this.featureId$.next(st)
      this.model = { ...this.model, featureId: st }
    }
    if (changes.cvcFeatureName) {
      const id = changes.cvcFeatureName.currentValue
      this.featureName$.next(id)
    }
/*     if (changes.cvcSearchString) {
      const name = changes.cvcSearchString.currentValue
      this.model = { ...this.model, name: name }
    } */
  }
}
