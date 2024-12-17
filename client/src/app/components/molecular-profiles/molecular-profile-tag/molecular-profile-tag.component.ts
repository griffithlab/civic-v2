import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core'

import { getEntityColor } from '@app/core/utilities/get-entity-color'
import { Maybe, MolecularProfileSegment } from '@app/generated/civic.apollo'

export interface LinkableMolecularProfile {
  id: number
  name: string
  link: string
  deprecated: boolean
  flagged: boolean
}

export interface LinkableMolecularProfileSegments {
  id: number
  segments: MolecularProfileSegment[]
  link: string
  name?: string
  deprecated: boolean
  flagged: boolean
}

@Component({
  selector: 'cvc-molecular-profile-tag',
  templateUrl: './molecular-profile-tag.component.html',
  styleUrls: ['./molecular-profile-tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcMolecularProfileTagComponent implements OnInit {
  @Input() molecularProfile!:
    | LinkableMolecularProfile
    | LinkableMolecularProfileSegments
  @Input() enablePopover?: boolean = true
  @Input() truncateLongName?: boolean | number = false
  @Input() linked?: boolean = true

  truncationLength: number = 20

  iconColor: string
  constructor() {
    this.iconColor = getEntityColor('MolecularProfile')
  }

  idFunction(): number {
    return this.molecularProfile.id
  }

  ngOnInit() {
    if (this.molecularProfile === undefined) {
      throw new Error(
        'cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.'
      )
    }
    if (typeof this.truncateLongName === 'number') {
      this.truncationLength = this.truncateLongName
    }

    if ('segments' in this.molecularProfile) {
      this.molecularProfile.name = this.molecularProfile.segments
        .map((s) => {
          if ('text' in s) {
            return s.text
          } else {
            return s.name
          }
        })
        .join(' ')
    }
  }
}
