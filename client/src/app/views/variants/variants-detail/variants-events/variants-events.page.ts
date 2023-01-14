import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-variants-events',
  templateUrl: './variants-events.page.html',
  styleUrls: ['./variants-events.page.less'],
})
export class VariantsEventsPage {
  subscribable: SubscribableInput;

  constructor(private route: ActivatedRoute) {
    const variantId: number = +this.route.snapshot.params['variantId'];
    this.subscribable = {
      id: variantId,
      entityType: SubscribableEntities.Variant,
    };
  }
}
