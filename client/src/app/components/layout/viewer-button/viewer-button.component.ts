import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { Observable } from 'rxjs';

import {
  map,
  pluck,
} from 'rxjs/operators';

import { User } from '@app/generated/civic.apollo';

import { ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'cvc-viewer-button',
  templateUrl: './viewer-button.component.html',
  styleUrls: ['./viewer-button.component.less']
})
export class ViewerButtonComponent implements OnInit {
  viewer$: Observable<User>;
  username$: Observable<string>;
  role$: Observable<string>;

  constructor(private queryService: ViewerService) {
    this.viewer$ = this.queryService.viewer$;
    this.username$ = this.viewer$.pipe(pluck('username'));
    this.role$ = this.viewer$.pipe(pluck('role'));
  }

  signOut(): void {
    this.queryService.signOut();
  }

  ngOnInit(): void {
  }

}
