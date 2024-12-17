import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core'
import {
  ActivatedRoute,
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
} from '@angular/router'

import { Maybe } from '@app/generated/civic.apollo'
import { Subject } from 'rxjs'
import { filter, startWith, takeUntil } from 'rxjs/operators'

import { TitleService } from '@app/core/services/title/title.service'

export interface TitleSegment {
  label: string
  url: string
}

@Component({
  selector: 'cvc-section-navigation',
  templateUrl: './section-navigation.component.html',
  styleUrls: ['./section-navigation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CvcSectionNavigationComponent implements OnInit, OnDestroy {
  @Input() displayName: Maybe<string>
  @Input() relationsTpl?: TemplateRef<any>
  @Input() actionsTpl?: TemplateRef<any>

  getRouteLabel: (label: string) => string

  private destroy$ = new Subject<void>()
  segments: TitleSegment[] = []

  constructor(
    private titleService: TitleService,
    private injector: Injector,
    private cdr: ChangeDetectorRef
  ) {
    this.getRouteLabel = (label) => label
  }

  ngOnInit(): void {
    // set up custom label function for nz-segments
    this.getRouteLabel = this._getRouteLabel
    this.registerRouterChange()
  }

  // passed to nz-segments & used by title creation below
  // to generate segments & titles from route data parameter or provided display name
  private _getRouteLabel = (label: string): string => {
    if (label !== 'DISPLAYNAME') {
      return label
    } else {
      return this.displayName === undefined
        ? '[?DISPLAY NAME?]'
        : this.displayName
    }
  }

  private registerRouterChange(): void {
    try {
      const router = this.injector.get(Router)
      const activatedRoute = this.injector.get(ActivatedRoute)
      router.events
        .pipe(
          filter((e) => e instanceof NavigationEnd),
          takeUntil(this.destroy$),
          startWith(true) // trigger initial render
        )
        .subscribe(() => {
          this.segments = this.getTitleSegments(activatedRoute.root)
          // construct titles string
          let title: string = ''
          let len = this.segments.length,
            i = 1
          this.segments.forEach((bc: TitleSegment) => {
            title += this._getRouteLabel(bc.label)
            if (i < len) {
              title += ' '
            }
            i++
          })
          this.titleService.updateTitle(title)
          this.cdr.markForCheck()
        })
    } catch (e) {
      throw new Error(
        `cvc-section-navigation should import RouterModule if you want to autogenerate title`
      )
    }
  }

  private getTitleSegments(
    route: ActivatedRoute,
    url: string = '',
    segments: TitleSegment[] = []
  ): TitleSegment[] {
    const children: ActivatedRoute[] = route.children

    // If there's no sub root, then stop the recurse and generated title segments
    if (children.length === 0) {
      return segments
    }

    for (const child of children) {
      if (child.outlet === PRIMARY_OUTLET) {
        // Only parse components in primary router-outlet
        // (router-outlet without a specific name).
        // Parse this route and generate a title segment.
        const routeUrl: string = child.snapshot.url
          .map((segment) => segment.path)
          .filter((path) => path)
          .join('/')

        // Do not change nextUrl if routeUrl is falsy.
        // This happens when it's a route lazy loading other modules.
        const nextUrl = !!routeUrl ? url + `/${routeUrl}` : url
        const segmentLabel = child.snapshot.data['breadcrumb']

        // if data, generate a segment for it.
        if (routeUrl && segmentLabel) {
          const breadcrumb: TitleSegment = {
            label: segmentLabel,
            url: nextUrl,
          }
          segments.push(breadcrumb)
        }

        return this.getTitleSegments(child, nextUrl, segments)
      }
    }

    return segments
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
