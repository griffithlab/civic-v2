import { EnvironmentProviders, Provider } from '@angular/core'
import {
  HttpResponse,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http'
import { provideHttpClientTesting } from '@angular/common/http/testing'
import { NEVER, of } from 'rxjs'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { ApolloLink, InMemoryCache } from '@apollo/client'
import result from '@app/generated/civic.possible-types'

// registered after AppModule, so these override its providers: a
// never-resolving link keeps queries pending, and the /api/status
// initializer is answered at once (its firstValueFrom would otherwise
// reject with EmptyError at teardown)
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
