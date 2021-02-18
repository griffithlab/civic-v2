import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { routes } from './app-routing.module';

describe('Router: App', () => {
  let location: Location;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: []
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);

    router.initialNavigation();
  });

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /welcome', fakeAsync(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/welcome');
    });
    tick(50);
  }));

  // it('navigate to "search" takes you to /search', fakeAsync(() => {
  //   router.navigate(["/search"]).then(() => {
  //     expect(location.path()).toBe("/search");
  //   });
  // }));
});
