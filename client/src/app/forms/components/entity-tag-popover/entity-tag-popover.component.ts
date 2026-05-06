import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core'

export const ENTITY_TAG_TYPES_WITH_POPOVER = [
  'MolecularProfile',
  'Disease',
  'Therapy',
  'Phenotype',
  'Source',
  'Gene',
  'Variant',
  'EvidenceItem',
]
type EntityTagTypeWithPopoverTuple = typeof ENTITY_TAG_TYPES_WITH_POPOVER
export type EntityTagTypeWithPopover = EntityTagTypeWithPopoverTuple[number]

export type EntityTagPopoverInput = {
  entityId: number
  entityType: EntityTagTypeWithPopover
}

@Component({
  selector: 'cvc-entity-tag-popover',
  templateUrl: './entity-tag-popover.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcEntityTagPopoverComponent implements OnInit {
  @Input() entity!: EntityTagPopoverInput
  @Output() contentRendered = new EventEmitter<void>()

  ngOnInit() {
    if (this.entity == undefined) {
      throw new Error(
        'entity input is required for CvcEntityTagPopoverComponent'
      )
    }
  }
}
