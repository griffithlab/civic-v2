import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { ViewerService } from '@app/core/services/viewer/viewer.service'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'evidence-add',
  templateUrl: './evidence-add.view.html',
  styleUrls: ['./evidence-add.view.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class EvidenceAddView implements OnInit {
  isSignedIn$?: Observable<boolean>

  constructor(private viewerService: ViewerService) {}

  ngOnInit(): void {
    this.isSignedIn$ = this.viewerService.viewer$.pipe(map((v) => v.signedIn))
  }
}
