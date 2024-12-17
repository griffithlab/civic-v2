import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'cvc-revision-value-diff',
  templateUrl: './revision-value-diff.component.html',
  styleUrls: ['./revision-value-diff.component.less'],
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class RevisionValueDiffComponent implements OnInit {
  @Input() currentValue?: string
  @Input() suggestedValue?: string
  @Input() left!: string
  @Input() right!: string
  @Input() entityType!: string

  constructor() {}

  ngOnInit() {
    if (this.left === undefined) {
      throw new Error('Must provide a left side of the diff.')
    }
    if (this.right === undefined) {
      throw new Error('Must provide a right side of the diff.')
    }
    if (this.entityType === undefined) {
      throw new Error('Must provide a diff.')
    }
  }
}
