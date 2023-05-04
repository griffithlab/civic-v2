import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
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
  MpExpressionEditorPrepopulateGQL,
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
import {
  BehaviorSubject,
  filter,
  lastValueFrom,
  map,
  Observable,
  Subject,
  withLatestFrom,
  tap,
  debounceTime,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/dist/esm/operators/pluck'
import { tag } from 'rxjs-spy/operators'

type AppendableValue = 'AND' | 'OR' | 'NOT' | '(' | ')'

@UntilDestroy()
@Component({
  selector: 'cvc-mp-expression-editor',
  templateUrl: './mp-expression-editor.component.html',
  styleUrls: ['./mp-expression-editor.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MpExpressionEditorComponent implements AfterViewInit, OnChanges {
  @Input() cvcPrepopulateWithId: Maybe<number>
  @Output() cvcOnSelect = new EventEmitter<MolecularProfile>()

  @ViewChild('expressionEditor') expressionEditor?: ElementRef

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
  onAppendInput$: Subject<AppendableValue>
  onVariantSelect$: Subject<Variant>
  onCreateNewMp$: Subject<void>

  // PRESENTATION STREAMS
  expressionMessage$: BehaviorSubject<Maybe<string>>
  expressionHelp$: BehaviorSubject<Maybe<string>>
  expressionError$: BehaviorSubject<Maybe<MpParseError>>
  expressionSegment$: Subject<Maybe<PreviewMpName2Fragment[]>>
  existingMp$: Subject<Maybe<MolecularProfile>>
  inputValue$: BehaviorSubject<string>

  expressionMessages = {
    initial: 'Use the editor below to construct a molecular profile.',
  }

  constructor(
    private previewMpGql: PreviewMolecularProfileName2GQL,
    private createMolecularProfileGql: CreateMolecularProfile2GQL,
    private mpEditorPrepopulate: MpExpressionEditorPrepopulateGQL,
    private networkErrorService: NetworkErrorsService
  ) {
    this.createMolecularProfileMutator = new MutatorWithState(
      this.networkErrorService
    )
    this.onInputChange$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.onAppendInput$ = new Subject<AppendableValue>()
    this.onVariantSelect$ = new Subject<Variant>()
    this.onCreateNewMp$ = new Subject<void>()
    this.inputValue$ = new BehaviorSubject<string>('')
    this.expressionError$ = new BehaviorSubject<Maybe<MpParseError>>(undefined)
    this.expressionHelp$ = new BehaviorSubject<Maybe<string>>(undefined)
    this.expressionMessage$ = new BehaviorSubject<Maybe<string>>(
      this.expressionMessages.initial
    )
    this.expressionSegment$ = new Subject<Maybe<PreviewMpName2Fragment[]>>()
    this.existingMp$ = new Subject<Maybe<MolecularProfile>>()
    // this.existingMp$.pipe(tag('existingMp$')).subscribe()
  }

  ngAfterViewInit(): void {
    this.onInputChange$
      .pipe(
        // tag('onInputChange$'),
        debounceTime(250),
        // clear preview if input is empty
        tap((input) => {
          if (!input) this.expressionSegment$.next(undefined)
        }),
        // filter undefined inputs
        filter(isNonNulled),
        // reset error, message if input string is empty
        tap((input) => {
          if (input.length === 0) {
            this.expressionMessage$.next(this.expressionMessages.initial)
            this.expressionError$.next(undefined)
          }
        }),
        // filter empty input strings
        filter((input: string) => input.length > 0),
        // filter input strings w/ space at end
        filter((input: string) => input[input.length - 1] !== ' '),
        map((input: string) => {
          let res: MpParseError | MolecularProfileComponentInput =
            parseMolecularProfile(input)
          if ('errorMessage' in res) {
            return res
          } else {
            return this.previewQueryRef!.refetch({ mpStructure: res })
          }
        }),
        untilDestroyed(this)
      )
      .subscribe((res) => {
        // FIXME: this casting of 'res' is a total hack, need proper gate functions for this error/response
        // logic, or refactor the parser to use rxjs error handling (which will also simplfy template logic)
        if (this.isMpParseError(res)) {
          const err = res as MpParseError
          this.expressionMessage$.next(undefined)
          this.expressionError$.next(err)
          this.expressionSegment$.next(undefined)
        } else {
          const response = res as Promise<
            ApolloQueryResult<PreviewMolecularProfileName2Query>
          >
          response.then(({ data, errors }) => {
            if (errors) {
              this.expressionMessage$.next(undefined)
              this.expressionError$.next({
                errorMessage: errors.map((e) => e.message).join('\n'),
              })
              this.expressionSegment$.next(undefined)
            } else {
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
            }
          })
        }
      })

    this.onAppendInput$.pipe(untilDestroyed(this)).subscribe((append: AppendableValue) => {
      // if expressionEditor exists, append to its current value and set field value to results
      if (this.expressionEditor) {
        const editor = this.expressionEditor.nativeElement as HTMLInputElement
        const current = editor.value
        // append to current value, but only if it doesn't already end with a space
        const newValue = `${current}${/\s+$/.test(append) ? append : ' ' + append}`
        editor.value = newValue
        this.inputValue$.next(newValue)
        this.onInputChange$.next(newValue)
      }
    })

    this.onVariantSelect$
      .pipe(
        withLatestFrom(this.onInputChange$),
        map(([variant, input]) => {
          if (!input || input.trim().length == 0) {
            return `#VID${variant.id}`
          } else {
            return `${input.trim()} #VID${variant.id}`
          }
        }),
        // tag('onVariantSelect$'),
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

  isMpParseError(subject: any): boolean {
    return subject.errorMessage !== undefined
  }

  prepopulateMp(mpId: Maybe<number>) {
    if (!mpId) {
      this.expressionSegment$.next(undefined)
      this.expressionMessage$.next(this.expressionMessages.initial)
      this.inputValue$.next('')
      return
    }

    lastValueFrom(
      this.mpEditorPrepopulate.fetch(
        { mpId: mpId },
        { fetchPolicy: 'cache-first' }
      )
    ).then(({ data }) => {
      if (!data?.molecularProfile?.id) {
        console.error(
          `MpExpressionEditor could not fetch MolecularProfile:${mpId} to prepulate editor fields.`
        )
        return
      }

      const input = data.molecularProfile.rawName
        .replace(/#GID(\d+)/g, '')
        .trim()
      this.inputValue$.next(input)
      this.onInputChange$.next(input)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.cvcPrepopulateWithId) {
      const id = changes.cvcPrepopulateWithId.currentValue
      this.prepopulateMp(id)
    }
  }
}
