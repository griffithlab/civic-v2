import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-evidence-rating',
  templateUrl: './evidence-rating.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CvcEvidenceRatingComponent implements OnInit {
  @Input() starRating: Maybe<number>

  filledStars: void[] = []
  emptyStars: void[] = []

  ngOnInit() {
    if (this.starRating) {
      this.filledStars = Array(this.starRating)
      this.emptyStars = Array(5 - this.starRating)
    }
  }
}
