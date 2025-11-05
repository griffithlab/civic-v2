import { Component, inject, OnInit } from '@angular/core'
import { SearchByPermalinkGQL } from '@app/generated/civic.apollo'
import { ActivatedRoute } from '@angular/router'
import { untilDestroyed } from '@ngneat/until-destroy'

@Component({
  selector: 'cvc-structured-search-page',
  templateUrl: './structured-search.page.html',
  standalone: false,
})
export class StructuredSearchPage implements OnInit {
  private searchByPermalinkGQL: SearchByPermalinkGQL =
    inject(SearchByPermalinkGQL)
  private route: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.route.queryParams.pipe(untilDestroyed(this)).subscribe((params) => {
      const permalinkId = params['p']
      if (permalinkId) {
        this.loadFromPermalink(permalinkId)
      }
    })
  }
  loadFromPermalink(permalinkId: string) {
    this.searchByPermalinkGQL
      .watch({ permalinkId })
      .valueChanges.pipe(untilDestroyed(this))
      .subscribe((res) => {
        if (res.data.searchByPermalink) {
          // this.model.set(res.data.searchByPermalink)
        }
      })
  }
}
