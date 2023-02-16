import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import { LinkableMolecularProfile } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.component'
import { LinkableVariantType } from '@app/components/variant-types/variant-type-tag/variant-type-tag.component'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  CreateMolecularProfile2GQL,
  CreateMolecularProfile2Mutation,
  CreateMolecularProfile2MutationVariables,
  Maybe,
  MolecularProfile,
  PreviewMolecularProfileName2GQL,
  PreviewMolecularProfileName2Query,
  PreviewMolecularProfileName2QueryVariables,
  PreviewMpName2Fragment,
  QuicksearchGQL,
  QuicksearchQuery,
  QuicksearchQueryVariables,
  Variant,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { BehaviorSubject, Observable, Subject } from 'rxjs'

@Component({
  selector: 'cvc-mp-expression-editor',
  templateUrl: './mp-expression-editor.component.html',
  styleUrls: ['./mp-expression-editor.component.less'],
})
export class MpExpressionEditorComponent {
  @Output() onSelect = new EventEmitter<MolecularProfile>()
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
  previewMpName$?: Observable<PreviewMpName2Fragment[]>
  previewMpAlreadyExists$?: Observable<Maybe<LinkableMolecularProfile>>
  previewDeprecatedVariants$?: Observable<LinkableVariantType[]>

  // SOURCE STREAMS
  onInputChange$: BehaviorSubject<Maybe<Event>>
  onVariantSelect$: Subject<Variant>

  // PRESENTATION STREAMS
  editorMessage$: BehaviorSubject<string>
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
    this.onInputChange$ = new BehaviorSubject<Maybe<Event>>(undefined)
    this.onVariantSelect$ = new Subject<Variant>()
    this.inputValue$ = new BehaviorSubject<string>('')
    this.editorMessage$ = new BehaviorSubject<string>('Start constructing a complex molecular profile to preview it here')
  }
}
