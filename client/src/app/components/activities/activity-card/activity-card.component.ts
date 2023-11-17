import { Component, Input, OnDestroy } from "@angular/core";
import { OnInit } from "@angular/core";
import { ActivityCardFragment, ActivityCardGQL, Maybe } from "@app/generated/civic.apollo";
import { Observable, pluck } from "rxjs";


@Component({
    selector: 'cvc-activity-card',
    templateUrl: './activity-card.component.html',
    styleUrls: ['./activity-card.component.less'],
  })
export class CvcActivityCardComponent implements OnInit {
  @Input() activityId!: number

  activity$?: Observable<Maybe<ActivityCardFragment>>

  constructor(private gql: ActivityCardGQL) {}

  ngOnInit() {
    if (this.activityId == undefined) {
      throw new Error('cvc-activity-card requires valid activityId input.')
    }
    this.activity$ = this.gql
      .watch({ activityId: this.activityId })
      .valueChanges.pipe(pluck('data', 'activity'))
  }
}