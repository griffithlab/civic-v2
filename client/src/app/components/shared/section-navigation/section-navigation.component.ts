import {
  ChangeDetectorRef,
  Component,
  Injector,
  Input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET, Router } from '@angular/router';

import { Maybe } from '@app/generated/civic.apollo';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';

import { TitleService } from '@app/shared/services/title/title.service';

export interface BreadcrumbOption {
  label: string;
  params: Params;
  url: string;
}

@Component({
  selector: 'cvc-section-navigation',
  templateUrl: './section-navigation.component.html',
  styleUrls: ['./section-navigation.component.less'],
})
export class SectionNavigationComponent implements OnInit {
  @Input() displayName: Maybe<string>;
  @Input() relationsTpl?: TemplateRef<any>;

  getRouteLabel: (label: string) => string;

  private destroy$ = new Subject<void>();
  breadcrumbs: BreadcrumbOption[] = [];

  constructor(
    private titleService: TitleService,
    private injector: Injector,
    private cdr: ChangeDetectorRef,
  ) {
    this.getRouteLabel = (label) => label;
  }

  ngOnInit(): void {
    // set up custom label function for nz-breadcrumbs
    this.getRouteLabel = this._getRouteLabel;
    this.registerRouterChange();
  }

  // used by breadcrumbs and title creation below to provide entity displayName
  private _getRouteLabel = (label: string): string => {
    if (label !== 'GENERATE') { return label; }
    return this.displayName === undefined ? 'DISPLAYNAME UNDEFINED' : this.displayName;
  }

  private registerRouterChange(): void {
    try {
      const router = this.injector.get(Router);
      const activatedRoute = this.injector.get(ActivatedRoute);
      router.events
        .pipe(
          filter(e => e instanceof NavigationEnd),
          takeUntil(this.destroy$),
          startWith(true) // trigger initial render
        )
        .subscribe(() => {
          this.breadcrumbs = this.getBreadcrumbs(activatedRoute.root);
          // construct titles string
          let title: string = '';
          let l = this.breadcrumbs.length, i = 1;
          this.breadcrumbs.forEach((bc: BreadcrumbOption) => {
            title += this._getRouteLabel(bc.label);
            if(i < l) { title += ' '; }
            i++;
          });
          this.titleService.updateTitle(title);
          this.cdr.markForCheck();
        });
    } catch (e) {
      throw new Error(`cvc-section-navigation should import RouterModule if you want to autogenerate title`);
    }
  }

  private getBreadcrumbs(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: BreadcrumbOption[] = []
  ): BreadcrumbOption[] {
    const children: ActivatedRoute[] = route.children;

    // If there's no sub root, then stop the recurse and returns the generated breadcrumbs.
    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      if (child.outlet === PRIMARY_OUTLET) {
        // Only parse components in primary router-outlet (in another word, router-outlet without a specific name).
        // Parse this layer and generate a breadcrumb item.
        const routeUrl: string = child.snapshot.url
          .map(segment => segment.path)
          .filter(path => path)
          .join('/');

        // Do not change nextUrl if routeUrl is falsy. This happens when it's a route lazy loading other modules.
        const nextUrl = !!routeUrl ? url + `/${routeUrl}` : url;
        const breadcrumbLabel = child.snapshot.data['breadcrumb'];

        // If have data, go to generate a breadcrumb for it.
        if (routeUrl && breadcrumbLabel) {
          const breadcrumb: BreadcrumbOption = {
            label: breadcrumbLabel,
            params: child.snapshot.params,
            url: nextUrl
          };
          breadcrumbs.push(breadcrumb);
        }

        return this.getBreadcrumbs(child, nextUrl, breadcrumbs);
      }
    }

    return breadcrumbs;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
