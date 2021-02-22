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

  it('navigating to "genes" directs browser to /genes', async () => {
    await router.navigate(['genes']);
    expect(location.path()).toBe('/genes');
  });

  it('navigating to "assertions" directs browser to /assertions', async () => {
    await router.navigate(['assertions']);
    expect(location.path()).toBe('/assertions');
  });

  it('navigating to "diseases" directs browser to /diseases', async () => {
    await router.navigate(['diseases']);
    expect(location.path()).toBe('/diseases');
  });

  it('navigating to "sources" directs browser to /sources', async () => {
    await router.navigate(['sources']);
    expect(location.path()).toBe('/sources');
  });

  it('navigating to "variants" directs browser to /variants', async () => {
    await router.navigate(['sources']);
    expect(location.path()).toBe('/sources');
  });

  it('navigating to "variant-groups" directs browser to /variant-groups', async () => {
    await router.navigate(['variant-groups']);
    expect(location.path()).toBe('/variant-groups');
  });

  /*
   * REDIRECTS
   */

  it('navigating to "" redirects to /welcome', async () => {
    await router.navigate(['']);
    expect(location.path()).toBe('/welcome');
  });

});
