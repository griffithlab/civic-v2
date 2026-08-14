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

// Providers for TestBed smoke tests that import the full AppModule.
// Registered last, they take precedence over AppModule's own providers:
// - APOLLO_OPTIONS: a link that never resolves, so GraphQL queries stay
//   pending and components render their loading states with no network.
// - HttpClient: testing backend, plus an interceptor answering the
//   environment banner's /api/status request immediately so it doesn't
//   dangle past TestBed teardown.
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
