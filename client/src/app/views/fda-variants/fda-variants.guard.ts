import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface DeactivationGuarded {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;}

@Injectable()
export class FdaVariantsGuard implements CanDeactivate<DeactivationGuarded> {
  canDeactivate(
    component: DeactivationGuarded,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate ? component.canDeactivate() : true;
  }

}
