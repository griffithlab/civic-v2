import { Component, EventEmitter, Input, Output } from '@angular/core'
import { LinkableMolecularProfile } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.component'
import { LinkableVariantType } from '@app/components/variant-types/variant-type-tag/variant-type-tag.component'
import {
  Maybe,
  PreviewMolecularProfileName2Query,
  PreviewMolecularProfileName2QueryVariables,
  PreviewMpName2Fragment,
  QuicksearchQuery,
  QuicksearchQueryVariables,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { Observable } from 'rxjs'

@Component({
  selector: 'cvc-mp-expression-editor',
  templateUrl: './mp-expression-editor.component.html',
  styleUrls: ['./mp-expression-editor.component.less'],
})
export class MpExpressionEditorComponent {
  @Output() onSelect = new EventEmitter()
  @Input() allowCreate: boolean = true

  previewQueryRef?: QueryRef<
    PreviewMolecularProfileName2Query,
    PreviewMolecularProfileName2QueryVariables
  >
  typeaheadQueryRef?: QueryRef<QuicksearchQuery, QuicksearchQueryVariables>

  previewMpName$?: Observable<PreviewMpName2Fragment[]>
  previewMpAlreadyExists$?: Observable<Maybe<LinkableMolecularProfile>>
  previewDeprecatedVariants$?: Observable<LinkableVariantType[]>
}
