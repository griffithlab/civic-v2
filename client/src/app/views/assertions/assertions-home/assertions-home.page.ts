import { Component, OnInit } from '@angular/core'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { Observable } from 'rxjs'

@Component({
    selector: 'assertions-home',
    templateUrl: './assertions-home.page.html',
    styleUrls: ['./assertions-home.page.less'],
    standalone: false
})
export class AssertionsHomePage implements OnInit {
  viewer$: Observable<Viewer>

  constructor(private viewerService: ViewerService) {
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnInit(): void {}
}
