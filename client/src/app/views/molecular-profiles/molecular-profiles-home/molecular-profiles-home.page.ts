import { Component, OnInit } from '@angular/core'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { Observable } from 'rxjs'

@Component({
    selector: 'molecular-profiles-home',
    templateUrl: './molecular-profiles-home.page.html',
    styleUrls: ['./molecular-profiles-home.page.less'],
    standalone: false
})
export class MolecularProfilesHomePage implements OnInit {
  viewer$?: Observable<Viewer>

  constructor(private viewerService: ViewerService) {
    this.viewer$ = this.viewerService.viewer$
  }

  ngOnInit(): void {}
}
