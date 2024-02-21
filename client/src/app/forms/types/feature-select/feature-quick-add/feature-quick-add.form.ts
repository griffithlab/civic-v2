import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import { CvcFormSubmissionStatusDisplayModule } from '@app/forms/components/form-submission-status-display/form-submission-status-display.module'
import { NoStateFormOptions } from '@app/forms/states/base.state'
import {
  CreateableFeatureTypes,
  FeatureInstanceTypes,
  Maybe,
  QuickAddFeatureGQL,
  QuickAddFeatureMutation,
  QuickAddFeatureMutationVariables,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { LetDirective, PushPipe } from '@ngrx/component'
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core'
import { NzFormLayoutType } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { BehaviorSubject, Subject } from 'rxjs'

type FeatureQuickAddModel = {
  name?: string
  organizationId?: number
  featureType?: CreateableFeatureTypes
}

type FeatureQuickAddDisplay = {
  message?: string
}

export type FeatureIdWithCreationStatus = {
  id: number
  new: boolean
}

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CvcFormSubmissionStatusDisplayModule,
    LetDirective,
    PushPipe,
    FormlyModule,
    NzGridModule,
  ],
  selector: 'cvc-feature-quick-add-form',
  templateUrl: './feature-quick-add.form.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcFeatureQuickAddForm implements OnChanges {
  @Input()
  set cvcFeatureType(type: Maybe<FeatureInstanceTypes>) {
    if (!type) return
    this.featureType$.next(type)
  }

  @Input()
  set cvcSearchString(str: string) {
    if (!str) return
    this.searchString$.next(str)
  }

  @Output() cvcOnCreate = new EventEmitter<FeatureIdWithCreationStatus>()

  model: Partial<QuickAddFeatureMutationVariables>
  form: UntypedFormGroup
  fields: FormlyFieldConfig[]
  options: NoStateFormOptions
  formLayout: NzFormLayoutType

  // SOURCE STREAMS
  onSubmit$: Subject<FeatureQuickAddModel>
  searchString$: BehaviorSubject<Maybe<string>>

  // PRESENTATION STREAMS
  featureType$: BehaviorSubject<Maybe<FeatureInstanceTypes>>
  formMessageDisplay$: BehaviorSubject<FeatureQuickAddDisplay>
  showForm$: BehaviorSubject<boolean> = new BehaviorSubject(false)

  addFeatureMutator: MutatorWithState<
    QuickAddFeatureGQL,
    QuickAddFeatureMutation,
    QuickAddFeatureMutationVariables
  >

  mutationState?: MutationState
  successMessage?: string
  minNameLength: number

  constructor(
    private query: QuickAddFeatureGQL,
    private errors: NetworkErrorsService
  ) {
    // configure form
    this.form = new UntypedFormGroup({})
    this.model = { name: '' }
    this.formLayout = 'horizontal'
    this.options = { formState: { formLayout: this.formLayout } }

    this.onSubmit$ = new Subject<FeatureQuickAddModel>()
    this.searchString$ = new BehaviorSubject<Maybe<string>>(undefined)

    this.featureType$ = new BehaviorSubject<Maybe<FeatureInstanceTypes>>(
      undefined
    )
    this.formMessageDisplay$ = new BehaviorSubject<FeatureQuickAddDisplay>({
      message: 'Feature does not exist, create it?',
    })

    this.addFeatureMutator = new MutatorWithState(this.errors)

    this.minNameLength = 3

    this.fields = [
      {
        key: 'featureType',
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
          submitLabel: 'Add Feature',
        },
      },
    ]

    // keep form module updated w/ Inputs
    this.featureType$
      .pipe(untilDestroyed(this))
      .subscribe((type: Maybe<FeatureInstanceTypes>) => {
        //TODO - this is hacky, maybe need to rework the types on the backend
        if (
          Object.values(CreateableFeatureTypes).includes(
            type as unknown as CreateableFeatureTypes
          )
        ) {
          this.model.featureType = type as unknown as CreateableFeatureTypes
          this.showForm$.next(true)
        } else {
          this.showForm$.next(false)
        }
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
            message: `New Feature name must be at least ${this.minNameLength} characters.`,
          })
        } else {
          this.formMessageDisplay$.next({
            message: `Feature '${str}' does not exist, create it?`,
          })
        }
      })

    // handle submit events from form
    this.onSubmit$.pipe(untilDestroyed(this)).subscribe((model) => {
      console.log('feature-quick-add form model submitted.', model)
      this.submitFeature(model)
    })
  }

  submitFeature(model: FeatureQuickAddModel) {
    if (!(model.name && model.featureType)) {
      console.error(
        `feature-quick-add form submitFeature requires model with valid name and featureType.`
      )
      return
    }
    this.mutationState = this.addFeatureMutator.mutate(
      this.query,
      {
        name: model.name,
        featureType: model.featureType,
        organizationId: model.organizationId,
      },
      {},
      (data) => {
        console.log('feature-quick-add submit data callback', data)
        if (!data.createFeature) return
        this.formMessageDisplay$.next({ message: undefined })
        setTimeout(() => {
          if (data && data.createFeature) {
            this.cvcOnCreate.next({
              id: data.createFeature.feature.id,
              new: data.createFeature.new,
            })
          }
        }, 1000)
      }
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcFeatureType) {
      const ft = changes.cvcFeatureType.currentValue
      this.featureType$.next(ft)
      this.model = { ...this.model, featureType: ft }
    }
  }
}
