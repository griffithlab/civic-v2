import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  toNullableInput,
  toNullableString,
} from '@app/forms/utilities/input-formatters'
import {
  AreaOfExpertise,
  CountriesGQL,
  EditUserInput,
  Maybe,
  UpdateUserProfileGQL,
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables,
  UserDetailFieldsFragment,
} from '@app/generated/civic.apollo'

import { Subject, Observable } from 'rxjs'
import { map, takeUntil } from 'rxjs/operators'

@Component({
    selector: 'cvc-user-profile-form',
    templateUrl: './user-profile.form.html',
    styleUrls: ['./user-profile.form.less'],
    standalone: false
})
export class CvcUserProfileForm implements OnInit, OnDestroy {
  @Input() user!: UserDetailFieldsFragment
  @Output() profileUpdatedEvent = new EventEmitter<void>()

  success: boolean = false
  errorMessages: string[] = []
  loading: boolean = false

  private destroy$ = new Subject<void>()

  updateProfileMutator: MutatorWithState<
    UpdateUserProfileGQL,
    UpdateUserProfileMutation,
    UpdateUserProfileMutationVariables
  >

  name: Maybe<string>
  username: Maybe<string>
  email: Maybe<string>
  areaOfExpertise: Maybe<AreaOfExpertise>
  orcid: Maybe<string>
  url: Maybe<string>
  bio: Maybe<string>
  twitterHandle: Maybe<string>
  facebookProfile: Maybe<string>
  linkedinProfile: Maybe<string>

  countryId: Maybe<number>

  countries$: Observable<{ id: number; name: string }[]>

  constructor(
    private updateProfileGql: UpdateUserProfileGQL,
    countryIdGql: CountriesGQL,
    networkErrorService: NetworkErrorsService
  ) {
    this.updateProfileMutator = new MutatorWithState(networkErrorService)

    this.countries$ = countryIdGql
      .fetch()
      .pipe(map(({ data }) => data.countries))
  }

  ngOnInit() {
    if (!this.user) {
      throw new Error('Must pass a user into the Profile Update Form')
    }

    this.setInitialFormFields()
  }

  updateProfile() {
    if (this.username && this.email) {
      this.errorMessages = []
      let profileInput: EditUserInput = {
        username: this.username,
        email: this.email,
        name: toNullableString(this.name),
        areaOfExpertise: toNullableInput(this.areaOfExpertise),
        orcid: toNullableString(this.orcid),
        url: toNullableString(this.url),
        bio: toNullableString(this.bio),
        countryId: toNullableInput(this.countryId),
        twitterHandle: toNullableString(this.twitterHandle),
        facebookProfile: toNullableString(this.facebookProfile),
        linkedinProfile: toNullableString(this.linkedinProfile),
      }

      let state = this.updateProfileMutator.mutate(this.updateProfileGql, {
        input: profileInput,
      })

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        if (res) {
          this.setInitialFormFields()
          this.success = true
          this.profileUpdatedEvent.emit()
        }
      })

      state.submitError$.pipe(takeUntil(this.destroy$)).subscribe((errs) => {
        if (errs) {
          this.errorMessages = errs
          this.success = false
        }
      })

      state.isSubmitting$
        .pipe(takeUntil(this.destroy$))
        .subscribe((loading) => {
          this.loading = loading
        })
    }
  }

  setInitialFormFields() {
    this.name = this.user.name
    this.username = this.user.username
    this.email = this.user.email
    this.areaOfExpertise = this.user.areaOfExpertise
    this.orcid = this.user.orcid
    this.url = this.user.url
    this.bio = this.user.bio
    this.twitterHandle = this.user.twitterHandle
    this.facebookProfile = this.user.facebookProfile
    this.linkedinProfile = this.user.linkedinProfile
    this.countryId = this.user.country?.id
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
