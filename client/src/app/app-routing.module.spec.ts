import { Location } from '@angular/common';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AppComponent } from "./app.component";

import { routes } from './app-routing.module';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [AppComponent]
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);

    router.initialNavigation();
  });

  it('navigate to "" redirects to /welcome', async () => {
    await router.navigate(['']);
    expect(location.path()).toBe('/welcome');
  });

  // it('navigate to "search" takes you to /search', fakeAsync(() => {
  //   router.navigate(["/search"]).then(() => {
  //     expect(location.path()).toBe("/search");
  //   });
  // }));
});
