import { EnvironmentProviders, Provider } from '@angular/core'
import {
  HttpResponse,
  provideHttpClient,
  withInterceptors,
  withXhr,
} from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { NEVER, of } from 'rxjs'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { ApolloLink, InMemoryCache } from '@apollo/client'
import result from '@app/generated/civic.possible-types'

// registered after AppModule, so these override its providers: a
// never-resolving link keeps queries pending, and the environment banner's
// /api/status request is answered at once so it cannot dangle past
// TestBed teardown
export function smokeTestProviders(): (Provider | EnvironmentProviders)[] {
  return [
    {
      provide: APOLLO_OPTIONS,
      useValue: {
        link: new ApolloLink(() => NEVER),
        cache: new InMemoryCache({ possibleTypes: result.possibleTypes }),
      },
    },
    provideHttpClient(
      withXhr(),
      withInterceptors([
        (req, next) =>
          req.url === '/api/status'
            ? of(
                new HttpResponse({
                  body: {
                    displayEnvBanner: false,
                    env: 'test',
                    status: 'ok',
                  },
                })
              )
            : next(req),
      ])
    ),
    provideHttpClientTesting(),
  ]
}
