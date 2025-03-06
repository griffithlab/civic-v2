import { Component, OnInit } from '@angular/core'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { Observable } from 'rxjs'

@Component({
    selector: 'sources-home',
    templateUrl: './sources-home.page.html',
    styleUrls: ['./sources-home.page.less'],
    standalone: false
})
export class SourcesHomePage implements OnInit {
  viewer$: Observable<Viewer>

  constructor(private viewerService: ViewerService) {
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnInit(): void {}
}
