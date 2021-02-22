import { ComponentFixture, TestBed, fakeAsync, flush  } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  let primaryEntities:string[] = [
    'assertions',
    'diseases',
    'evidence',
    'genes',
    'sources',
    'variants',
    'variant-groups'
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(routes) ],
      declarations: [ AppComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  describe('Layout', () => {
    it('should create the app', () => {
      const app = fixture.componentInstance;
      expect(app).toBeTruthy();
    });

    it(`should have as title 'main'`, () => {
      const app = fixture.componentInstance;
      expect(app.title).toEqual('main');
    });

    it('should display application title', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('#app-title').textContent).toContain('CIViC');
    });
  });

  describe('Main Menu', () => {
    // ensure menu item created for each primary entity
    primaryEntities.forEach((entity) => {
      it('should provide a router link to ' + entity + ' view', fakeAsync(() => {
        const menu = fixture.debugElement.query(By.css('#main-' + entity));
        menu.triggerEventHandler('click', { button: 0 });
        flush();
        expect(location.path()).toEqual('/' + entity);
      }))
    });
  });
});
