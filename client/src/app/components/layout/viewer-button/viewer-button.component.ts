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

import { User, Maybe } from '@app/generated/civic.apollo';

import { ViewerService } from '@app/core/services/viewer/viewer.service';

@Component({
  selector: 'cvc-viewer-button',
  templateUrl: './viewer-button.component.html',
  styleUrls: ['./viewer-button.component.less']
})
export class CvcViewerButtonComponent implements OnInit {
  viewer$: Observable<User>;
  username$: Observable<string>;
  role$: Observable<string>;
  avatarUrl$: Observable<any>;

  constructor(private queryService: ViewerService) {
    this.viewer$ = this.queryService.viewer$;
    this.username$ = this.viewer$.pipe(pluck('username'));
    this.role$ = this.viewer$.pipe(pluck('role'));
    this.avatarUrl$ = this.viewer$.pipe(pluck('profileImagePath'));
  }

  signOut(): void {
    this.queryService.signOut();
  }

  ngOnInit(): void {
  }

}
