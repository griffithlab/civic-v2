import {
  concat,
  MonoTypeOperatorFunction,
  Observable,
  ReplaySubject,
  switchMap,
  take,
  takeWhile,
} from 'rxjs'

// source: https://stackoverflow.com/a/70583600
export function waitUntil<T>(
  notifier$: Observable<any>
): MonoTypeOperatorFunction<T> {
  return (source$: Observable<T>) => {
    const buffer$ = new ReplaySubject<T>()
    let doBuffer = true
    source$.pipe(takeWhile(() => doBuffer, true)).subscribe(buffer$)
    return notifier$.pipe(
      take(1),
      switchMap(() => {
        doBuffer = false
        return concat(buffer$, source$)
      })
    )
  }
}
