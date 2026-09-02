import { EnvironmentProviders, Provider } from '@angular/core'
import {
  HttpResponse,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { of } from 'rxjs'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { ApolloLink, InMemoryCache } from '@apollo/client/core'
import { Observable } from '@apollo/client/utilities'
import result from '@app/generated/civic.possible-types'

// Providers for TestBed smoke tests that import the full AppModule.
// Registered last, they take precedence over AppModule's own providers:
// - APOLLO_OPTIONS: a link that never resolves, so GraphQL queries stay
//   pending and components render their loading states with no network.
// - HttpClient: testing backend, plus an interceptor answering the
//   /api/status app-initializer immediately (otherwise its
//   firstValueFrom rejects with EmptyError at TestBed teardown).
export function smokeTestProviders(): (Provider | EnvironmentProviders)[] {
  return [
    {
      provide: APOLLO_OPTIONS,
      useValue: {
        link: new ApolloLink(() => new Observable(() => {})),
        cache: new InMemoryCache({ possibleTypes: result.possibleTypes }),
      },
    },
    provideHttpClient(
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
