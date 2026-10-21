import { describe, it, expect, beforeEach } from 'vitest'
import { TestBed } from '@angular/core/testing'
import { AppModule } from './app.module'
import { AppComponent } from './app.component'
import { smokeTestProviders } from './testing/smoke-test.providers'

describe('App smoke test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      providers: smokeTestProviders(),
    }).compileComponents()
  })

  it('bootstraps AppComponent without throwing', () => {
    const fixture = TestBed.createComponent(AppComponent)
    fixture.detectChanges()
    expect(fixture.componentInstance).toBeTruthy()
    expect(fixture.nativeElement.innerHTML.length).toBeGreaterThan(0)
  })
})
