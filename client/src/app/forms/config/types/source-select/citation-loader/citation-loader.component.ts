import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { ApolloError } from '@apollo/client/errors'
import {
  AddRemoteCitationGQL,
  CheckRemoteCitationGQL,
  Maybe,
  SourceSource,
  SourceStub,
  SourceStubFieldsFragmentDoc,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { finalize } from 'rxjs/operators'
import { $enum } from 'ts-enum-util'

@UntilDestroy()
@Component({
  selector: 'cvc-citation-loader',
  templateUrl: './citation-loader.component.html',
  styleUrls: ['./citation-loader.component.less'],
})
export class CitationLoaderComponent {
  @Input() model!: any
  @Output() addCitation = new EventEmitter<any>()

  @Input() citationId!: string
  @Output() citationIdChange = new EventEmitter<string>()

  @Input()
  set sourceType(type: SourceSource) {
    this._sourceType = type
    this.sourceTypeKey = $enum(SourceSource).getKeyOrThrow(type)
  }
  get sourceType(): SourceSource {
    return this._sourceType
  }
  @Output() sourceTypeChange = new EventEmitter<any>()

  _sourceType!: SourceSource
  sourceTypeKey!: string

  showPrompt: boolean = true

  isChecking: boolean = false
  existenceFail: boolean = false
  existenceErrors: string[] = []
  foundCitation: Maybe<string> = undefined

  isCreating: boolean = false
  createSuccess: boolean = false
  createErrors: string[] = []
  sourceStub: Maybe<SourceStub>

  constructor(
    private existenceCheckQuery: CheckRemoteCitationGQL,
    private createSourceStubQuery: AddRemoteCitationGQL,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  onExistenceQuery(e: any): void {
    if (e) {
      e.preventDefault()
    } // prevent form submit
    this.isChecking = true
    this.foundCitation = undefined
    this.existenceCheckQuery
      .fetch({
        sourceType: this.sourceType,
        citationId: this.citationId,
      })
      .pipe(
        finalize(() => {
          this.isChecking = false
          this.changeDetectorRef.detectChanges()
        }),
        untilDestroyed(this)
      )
      .subscribe({
        next: ({ data: { remoteCitation } }) => {
          if (remoteCitation !== null) {
            this.foundCitation = remoteCitation
          } else {
            this.showPrompt = false
            this.existenceFail = true
          }
        },
        error: (error: ApolloError): void => {
          this.showPrompt = false
          this.existenceErrors = error.graphQLErrors.map((e) => e.message)
        },
        complete: (): void => {
          this.existenceErrors = []
        },
      })
  }

  onAddRemoteCitation(e: any) {
    // TODO determine if this preventDefault is actuall required
    if (e) {
      e.preventDefault()
    } // prevent form submit
    this.isCreating = true
    this.createSuccess = false

    this.createSourceStubQuery
      .mutate({
        input: {
          citationId: this.citationId,
          sourceType: this.sourceType,
        },
      })
      .pipe(
        finalize(() => {
          this.isCreating = false
          // TODO figure out why this detectChanges call is necessary
          this.changeDetectorRef.detectChanges()
        }),
        untilDestroyed(this)
      )
      .subscribe({
        next: ({ data }): void => {
          console.log(data)
          const source = data?.addRemoteCitation?.newSource as SourceStub
          this.sourceStub = source
          this.createSuccess = true
        },
        error: (error: ApolloError): void => {
          this.showPrompt = false
          this.createSuccess = false
          this.createErrors = error.graphQLErrors.map((e) => e.message)
        },
        complete: (): void => {
          this.createErrors = []
        },
      })
  }

  onAcceptSource(e: any): void {
    if (e) {
      e.preventDefault()
    } // prevent form submit
    this.addCitation.emit({
      id: this.sourceStub!.id,
      entityFragment: SourceStubFieldsFragmentDoc,
    })
  }
}
