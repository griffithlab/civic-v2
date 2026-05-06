import { Component, Input, OnInit } from '@angular/core'
import { ContributorFieldsFragment, Maybe } from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-contributor-stack',
    templateUrl: './contributor-stack.component.html',
    standalone: false
})
export class CvcContributorStackComponent implements OnInit {
  @Input() contributors: Maybe<ContributorFieldsFragment[]>

  sortedContributors: Maybe<ContributorFieldsFragment[]>

  ngOnInit() {
    if (this.contributors === undefined) {
      throw new Error(
        'Must pass a list of contributors into the contributor stack'
      )
    }

    this.sortedContributors = this.contributors.slice()
    this.sortedContributors.sort((n1, n2) => {
      return n2.totalActionCount - n1.totalActionCount
    })
  }
}
