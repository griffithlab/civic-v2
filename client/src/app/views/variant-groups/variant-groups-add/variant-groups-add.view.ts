import { Component, OnInit } from '@angular/core'
import { ViewerService } from '@app/core/services/viewer/viewer.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
    selector: 'cvc-variant-groups-add-view',
    templateUrl: './variant-groups-add.view.html',
    styleUrls: ['./variant-groups-add.view.less'],
    standalone: false
})
export class VariantGroupsAddView implements OnInit {
  isSignedIn$?: Observable<boolean>

  constructor(private viewerService: ViewerService) {}

  ngOnInit(): void {
    this.isSignedIn$ = this.viewerService.viewer$.pipe(map((v) => v.signedIn))
  }
}
