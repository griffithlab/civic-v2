import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Type,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { ReactiveFormsModule } from '@angular/forms'
import {
  CvcEntitySelectDirective,
  CvcEntitySelectFieldBase,
  CvcEntitySelectFieldProps,
  CvcHighlightComponent,
  CvcSelectMessagesComponent,
  entitySelectConfig,
} from '@app/forms/select'
import { Maybe, MolecularProfile } from '@app/generated/civic.apollo.types'
import { CvcTagComponent } from '@app/tags'
import {
  FieldTypeConfig,
  FormlyFieldConfig,
  FormlyModule,
} from '@ngx-formly/core'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import {
  MolecularProfileSelectTagGQL,
  MolecularProfileSelectTypeaheadFieldsFragment,
  MolecularProfileSelectTypeaheadGQL,
} from './molecular-profile-select.query.gql.generated'
import { CvcMpComponentsModule } from './mp-components.module'

// ng-zorro-antd v21 removed its Angular-animations-based motion triggers
// (fadeMotion/slideMotion) in favor of CSS class animations; these are
// vendored verbatim from ng-zorro-antd@20.4.4 core/animation
const fadeMotion = trigger('fadeMotion', [
  transition('* => enter', [
    style({ opacity: 0 }),
    animate(`0.2s`, style({ opacity: 1 })),
  ]),
  transition('* => leave, :leave', [
    style({ opacity: 1 }),
    animate(`0.2s`, style({ opacity: 0 })),
  ]),
])

const slideMotion = trigger('slideMotion', [
  state('void', style({ opacity: 0, transform: 'scaleY(0.8)' })),
  state('enter', style({ opacity: 1, transform: 'scaleY(1)' })),
  transition('void => *', [animate(`0.2s cubic-bezier(0.23, 1, 0.32, 1)`)]),
  transition('* => void', [
    animate(`0.2s cubic-bezier(0.755, 0.05, 0.855, 0.06)`),
  ]),
])

export type CvcMolecularProfileSelectFieldOptions = Partial<
  FieldTypeConfig<Partial<CvcMolecularProfileSelectFieldProps>>
>

export type CvcMolecularProfileSelectFieldProps = CvcEntitySelectFieldProps

// NOTE: any multi-select field must have the string 'multi' in its type name,
// as UI logic (currently in base-field) depends on its presence to differentiate
// field types in some expressions
export interface CvcMolecularProfileSelectFieldConfig
  extends FormlyFieldConfig<Partial<CvcMolecularProfileSelectFieldProps>> {
  type:
    | 'molecular-profile-select'
    | 'molecular-profile-multi-select'
    | Type<CvcMolecularProfileSelectField>
}

/**
 * Selects a Molecular Profile, by three routes that share one value.
 *
 * Empty, it shows the MP finder — a nested form pairing a feature select with
 * a variant select, which resolves to that variant's single-variant profile.
 * Filled, it swaps the finder for a borderless select showing the chosen
 * profile as a tag. Either way the expression editor drawer can build a
 * complex profile and replace the value.
 *
 * The typeahead's geneId parameter was declared but never wired to anything,
 * so it is gone; this field takes no typeahead parameter.
 */
@Component({
  selector: 'cvc-molecular-profile-select',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideMotion, fadeMotion],
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzSelectModule,
    NzTooltipModule,
    NzTypographyModule,
    CvcTagComponent,
    CvcEntitySelectDirective,
    CvcHighlightComponent,
    CvcSelectMessagesComponent,
    CvcMpComponentsModule,
  ],
  templateUrl: './molecular-profile-select.type.html',
  styleUrl: './molecular-profile-select.type.less',
})
export class CvcMolecularProfileSelectField extends CvcEntitySelectFieldBase<
  MolecularProfileSelectTypeaheadFieldsFragment,
  void,
  CvcMolecularProfileSelectFieldProps
> {
  private readonly typeaheadGQL = inject(MolecularProfileSelectTypeaheadGQL)
  private readonly tagGQL = inject(MolecularProfileSelectTagGQL)
  private readonly cdr = inject(ChangeDetectorRef)

  protected readonly select = entitySelectConfig({
    entityName: {
      singular: 'Molecular Profile',
      plural: 'Molecular Profiles',
    },
    typename: 'MolecularProfile',
    typeahead: this.typeaheadGQL,
    typeaheadVars: (name: string) => ({ name }),
    typeaheadResults: (data) => data?.molecularProfiles.nodes ?? [],
    tag: {
      query: this.tagGQL,
      vars: (molecularProfileId: number) => ({ molecularProfileId }),
      result: (data) => data?.molecularProfile,
    },
    minSearchStrLength: 1,
  })

  /** the expression editor drawer */
  protected readonly editorOpen = signal(false)

  /** the finder is what an empty field offers; a full one shows its tag */
  protected readonly showSelect = computed(() => this.value() !== undefined)
  protected readonly showFinder = computed(
    () => !this.showSelect() && !this.editorOpen()
  )

  /** the expression editor prepopulates from a single id */
  protected readonly selectedId = computed<Maybe<number>>(() => {
    const value = this.value()
    return Array.isArray(value) ? value[0] : value
  })

  /** props.description is help text for an empty field; captured in ngOnInit */
  private initialDescription: Maybe<string>

  defaultOptions: Partial<
    FieldTypeConfig<CvcMolecularProfileSelectFieldProps>
  > = {
    props: {
      label: 'Molecular Profile',
      placeholder: 'Search Molecular Profiles',
      tooltip:
        'A single variant (Simple Molecular Profile) or a combination of variants (Complex Molecular Profile) relevant to the curated assertion.',
      isMultiSelect: false,
      description:
        'Select a Feature and Variant to specify a simple Molecular Profile.',
      entityName: {
        singular: 'Molecular Profile',
        plural: 'Molecular Profiles',
      },
    },
  }

  constructor() {
    super()
    // Effects created here first run after the initial change detection, so
    // ngOnInit has already captured the description by the time this reads it.
    effect(() => {
      const description = this.value() ? undefined : this.initialDescription
      if (this.props.description === description) return
      this.props.description = description
      // the form-field wrapper renders the description, not this component
      this.cdr.markForCheck()
    })
  }

  override ngOnInit(): void {
    super.ngOnInit()
    this.initialDescription = this.props.description
  }

  protected toggleEditor(): void {
    this.editorOpen.update((open) => !open)
  }

  /**
   * A profile arrived from the finder or the expression editor. Both hand
   * back a whole MolecularProfile rather than an id, so its record is written
   * into the options — nz-select will not render a selected item it has never
   * seen as an option — and the editor closes behind it.
   */
  protected onMolecularProfileSelected(mp: Maybe<MolecularProfile>): void {
    if (!mp) return
    this.editorOpen.set(false)
    this.fetchTagRecords(mp.id).subscribe(() => {
      this.formControl.setValue(mp.id)
      this.formControl.markAsTouched()
    })
  }
}
