import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { LinkableMolecularProfile } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.component'
import { LinkableVariantType } from '@app/components/variant-types/variant-type-tag/variant-type-tag.component'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import {
  MpParseError,
  parseMolecularProfile,
} from '@app/core/utilities/molecular-profile-parser'
import {
  MutationState,
  MutatorWithState,
} from '@app/core/utilities/mutation-state-wrapper'
import {
  CreateMolecularProfile2GQL,
  CreateMolecularProfile2Mutation,
  CreateMolecularProfile2MutationVariables,
  Maybe,
  MolecularProfile,
  MolecularProfileComponentInput,
  MolecularProfileSegment,
  PreviewMolecularProfileName2GQL,
  PreviewMolecularProfileName2Query,
  PreviewMolecularProfileName2QueryVariables,
  PreviewMpName2Fragment,
  QuicksearchGQL,
  QuicksearchQuery,
  QuicksearchQueryVariables,
  Variant,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import { until } from 'protractor'
import {
  BehaviorSubject,
  filter,
  Observable,
  Subject,
  map,
  switchMap,
  of,
  from,
  withLatestFrom,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/dist/esm/operators/pluck'
import { tag } from 'rxjs-spy/operators'

@UntilDestroy()
@Component({
  selector: 'cvc-mp-expression-editor',
  templateUrl: './mp-expression-editor.component.html',
  styleUrls: ['./mp-expression-editor.component.less'],
})
export class MpExpressionEditorComponent implements AfterViewInit {
  @Output() cvcOnSelect = new EventEmitter<MolecularProfile>()
  @Input() allowCreate: boolean = true

  previewQueryRef?: QueryRef<
    PreviewMolecularProfileName2Query,
    PreviewMolecularProfileName2QueryVariables
  >
  typeaheadQueryRef?: QueryRef<QuicksearchQuery, QuicksearchQueryVariables>

  createMolecularProfileMutator: MutatorWithState<
    CreateMolecularProfile2GQL,
    CreateMolecularProfile2Mutation,
    CreateMolecularProfile2MutationVariables
  >
  state?: MutationState
  previewMpName$?: Observable<PreviewMpName2Fragment[]>
  previewMpAlreadyExists$?: Observable<Maybe<LinkableMolecularProfile>>
  previewDeprecatedVariants$?: Observable<LinkableVariantType[]>

  // SOURCE STREAMS
  onInputChange$: BehaviorSubject<Maybe<string>>
  onVariantSelect$: Subject<Variant>
  onCreateNewMp$: Subject<void>

  // PRESENTATION STREAMS
  expressionMessage$: BehaviorSubject<Maybe<string>>
  expressionError$: BehaviorSubject<Maybe<string>>
  expressionSegment$: Subject<Maybe<PreviewMpName2Fragment[]>>
  existingMp$: Subject<Maybe<MolecularProfile>>
  inputValue$: BehaviorSubject<string>

  constructor(
    private previewMpGql: PreviewMolecularProfileName2GQL,
    private quicksearchGql: QuicksearchGQL,
    private createMolecularProfileGql: CreateMolecularProfile2GQL,
    private networkErrorService: NetworkErrorsService,
    private cdr: ChangeDetectorRef
  ) {
    this.createMolecularProfileMutator = new MutatorWithState(
      networkErrorService
    )
    this.onInputChange$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.onVariantSelect$ = new Subject<Variant>()
    this.onCreateNewMp$ = new Subject<void>()
    this.inputValue$ = new BehaviorSubject<string>('')
    this.expressionError$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.expressionMessage$ = new BehaviorSubject<Maybe<string>>(
      'Start constructing a complex molecular profile to preview it here'
    )
    this.expressionSegment$ = new Subject<Maybe<PreviewMpName2Fragment[]>>()
    this.existingMp$ = new Subject<Maybe<MolecularProfile>>()
  }

  onInputChange(event: any): void {
    console.log(event)
  }

  ngAfterViewInit(): void {
    this.onInputChange$
      .pipe(
        filter(isNonNulled),
        filter((input: string) => input.length > 0),
        map((input: string) => {
          let res: MpParseError | MolecularProfileComponentInput =
            parseMolecularProfile(input)
          if ('errorMessage' in res) {
            return res.errorMessage
          } else {
            return this.previewQueryRef!.refetch({ mpStructure: res })
          }
        }),
        untilDestroyed(this)
      )
      .subscribe((res) => {
        if (typeof res === 'string') {
          this.expressionMessage$.next(undefined)
          this.expressionError$.next(res)
          this.expressionSegment$.next(undefined)
        } else {
          res.then(({ data }) => {
            const segments = data.previewMolecularProfileName.segments
            this.expressionSegment$.next(segments)
            this.expressionMessage$.next(undefined)
            this.expressionError$.next(undefined)
            const existingMp =
              data.previewMolecularProfileName.existingMolecularProfile
            if (existingMp) {
              this.existingMp$.next(existingMp as MolecularProfile)
            } else {
              this.existingMp$.next(undefined)
            }
          })
        }
      })

    this.onVariantSelect$
      .pipe(
        withLatestFrom(this.onInputChange$),
        map(([variant, input]) => {
          if (!input || input.length == 0) {
            return `#VID${variant.id}`
          } else {
            return `${input} #VID${variant.id}`
          }
        }),
        tag('onVariantSelect$'),
        untilDestroyed(this)
      )
      .subscribe((input) => {
        this.inputValue$.next(input)
        this.onInputChange$.next(input)
        // this.cdr.detectChanges()
      })

    this.previewQueryRef = this.previewMpGql.watch({})
    /*     this.typeaheadQueryRef = this.quicksearchGql.watch({
      query: 'ZZZZ',
      types: [SearchableEntities.Variant]
    }) */

    this.previewMpName$ = this.previewQueryRef.valueChanges.pipe(
      pluck('data', 'previewMolecularProfileName'),
      filter(isNonNulled),
      map((data) => data.segments),
      untilDestroyed(this)
    )

    this.previewMpAlreadyExists$ = this.previewQueryRef.valueChanges.pipe(
      pluck('data', 'previewMolecularProfileName'),
      filter(isNonNulled),
      map((data) => data.existingMolecularProfile),
      untilDestroyed(this)
    )

    this.previewDeprecatedVariants$ = this.previewQueryRef.valueChanges.pipe(
      pluck('data', 'previewMolecularProfileName'),
      filter(isNonNulled),
      map((data) => data.deprecatedVariants),
      untilDestroyed(this)
    )

    this.onCreateNewMp$
      .pipe(withLatestFrom(this.onInputChange$), untilDestroyed(this))
      .subscribe(([_, input]) => {
        if (!input || input.length === 0) return
        let res = parseMolecularProfile(input)
        if ('errorMessage' in res) return
        this.state = this.createMolecularProfileMutator.mutate(
          this.createMolecularProfileGql,
          { mpStructure: res },
          {},
          (data) => {
            setTimeout(() => {
              if (data.createMolecularProfile) {
                this.cvcOnSelect.next(
                  data.createMolecularProfile
                    .molecularProfile as MolecularProfile
                )
              }
            }, 1000)
          }
        )
      })
  }
}
