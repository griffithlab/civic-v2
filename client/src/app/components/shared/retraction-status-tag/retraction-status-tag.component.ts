import { Component, Input, OnInit } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-retraction-status-tag',
  templateUrl: './retraction-status-tag.component.html',
  styleUrls: ['./retraction-status-tag.component.less'],
  standalone: false,
})
export class CvcRetractionStatusTagComponent implements OnInit {
  private _retractionNature?: string

  @Input() set retractionNature(value: Maybe<string>) {
    this._retractionNature = value
    if (value) {
      if (value == 'Retraction') {
        this.tagStatus = 'error'
        this.retracted = true
      } else {
        this.tagStatus = 'warning'
        this.retracted = false
      }
    }
  }
  @Input() retractionDate!: string
  @Input() retractionReasons!: string
  @Input() enablePopover: boolean = true

  get retractionNature(): Maybe<string> {
    return this._retractionNature
  }

  tagStatus?: string
  retracted?: boolean

  ngOnInit(): void {
    if (this.retractionNature === undefined) {
      throw new Error(
        'Must pass a valid retractionNature to cvc-status-tag component'
      )
    }
    if (this.retractionDate === undefined) {
      throw new Error(
        'Must pass a valid retractionDate to cvc-status-tag component'
      )
    }
    if (this.retractionReasons === undefined) {
      throw new Error(
        'Must pass a valid retractionReasons to cvc-status-tag component'
      )
    }
  }
}
