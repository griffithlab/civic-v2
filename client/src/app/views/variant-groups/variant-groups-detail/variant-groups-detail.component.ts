import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {
  Viewer,
  ViewerService,
} from '@app/shared/services/viewer/viewer.service';
import { SubscribableEntities, SubscribableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-variant-groups-detail',
  templateUrl: './variant-groups-detail.component.html',
  styleUrls: ['./variant-groups-detail.component.less']
})
export class VariantGroupsDetailComponent implements OnInit {
  viewer$?: Observable<Viewer>;

  subscribable: SubscribableInput = {
    id: 0,
    entityType: SubscribableEntities.Variant // TODO change to VariantGroup when it's e
  }
  constructor(private viewerService: ViewerService) {
    this.viewer$ = this.viewerService.viewer$;
  }

  ngOnInit(): void {
  }

}
