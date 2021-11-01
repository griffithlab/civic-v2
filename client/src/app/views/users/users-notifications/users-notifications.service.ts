import { Injectable, OnDestroy } from '@angular/core';

import { ApolloError } from '@apollo/client/core';

import { BehaviorSubject, Subject } from 'rxjs';

import { MarkNotificationsReadGQL } from '@app/generated/civic.apollo';

import { finalize, takeUntil } from 'rxjs/operators';
import { NetworkErrorsService } from '@app/core/services/network-errors.service';

@Injectable()
export class UsersNotificationsService implements OnDestroy {
  submitError$: BehaviorSubject<string[]>;
  isSubmitting$: BehaviorSubject<boolean>;
  submitSuccess$: BehaviorSubject<boolean>;

  private destroy$ = new Subject();

  constructor(
    private markNotificationsAsRead: MarkNotificationsReadGQL,
    private networkErrorService: NetworkErrorsService) {
    this.isSubmitting$ = new BehaviorSubject<boolean>(false);
    this.submitSuccess$ = new BehaviorSubject<boolean>(false);
    this.submitError$ = new BehaviorSubject<string[]>([]);
  }

  markAsRead(notificationIds: number[]): void {

    let input = {
      ids: notificationIds
    }

    this.isSubmitting$.next(true);

    this.markNotificationsAsRead.mutate( { input: input })
      .pipe(
        takeUntil(this.destroy$),
        finalize(() => { this.isSubmitting$.next(false); }))
      .subscribe({
        error: (error: ApolloError): void => {
          if(error.graphQLErrors.length > 0) {
            this.submitError$.next(error.graphQLErrors.map(e => e.message));
          } else if (error.networkError) {
            this.networkErrorService.networkError$.next(error.networkError);
          }
        },
        complete: (): void => {
          this.submitError$.next([]);
          this.submitSuccess$.next(true);
          this.networkErrorService.networkError$.next(undefined);
        }
      });
  }

  cleanup(): void {
    this.submitError$.next([]);
    this.submitSuccess$.next(false);
    this.isSubmitting$.next(false);
    this.networkErrorService.networkError$.next(undefined);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
