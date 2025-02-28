import {
  Component,
  ContentChild,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core'
import {
  Maybe,
  PopoverUserFragment,
  UserPopoverGQL,
} from '@app/generated/civic.apollo'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'

@Component({
    selector: 'cvc-user-popover',
    templateUrl: './user-popover.component.html',
    styleUrls: ['./user-popover.component.less'],
    standalone: false
})
export class CvcUserPopoverComponent implements OnInit {
  @Input() userId!: number

  @ContentChild('additionalMetadata') metadataTemplateRef?: TemplateRef<any>

  user$?: Observable<Maybe<PopoverUserFragment>>

  constructor(private gql: UserPopoverGQL) {}

  ngOnInit() {
    if (this.userId == undefined) {
      throw new Error('Must pass an id into user hovercard')
    }
    this.user$ = this.gql.watch({ userId: this.userId }).valueChanges.pipe(
      map(({ data }) => data?.user),
      filter(isNonNulled)
    )
  }
}
