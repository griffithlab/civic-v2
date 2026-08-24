# CIViC Server

The CIViC backend: a Ruby on Rails 8 application serving a GraphQL API (graphql-ruby) consumed by the Angular client in `../client` and by external API users. In production it also serves the compiled frontend from `public/`.

## Stack

- Ruby 4.0 (see `.ruby-version`), Rails 8
- PostgreSQL with the [pgvector](https://github.com/pgvector/pgvector) extension (vector similarity via the `neighbor` gem)
- GraphQL API via [graphql-ruby](https://graphql-ruby.org/), with GraphiQL at `/api/graphiql`
- Elasticsearch 7.x for search indexing via [Searchkick](https://github.com/ankane/searchkick)
- Sidekiq + sidekiq-cron on Redis for background jobs (web UI mounted at `/jobs` for logged-in users)
- OmniAuth (Google, GitHub, ORCiD) for authentication

## Setup

```sh
gem install bundler
bundle install
rails db:create
rails db:schema:load
```

Development expects PostgreSQL, Redis, and Elasticsearch running locally. Database names are `civic_development` / `civic_test` (see `config/database.yml`).

## Running

```sh
rails s          # API server at http://localhost:3000
bundle exec sidekiq   # background job worker (optional for most dev work)
```

The Angular dev server (`yarn start` in `../client`) proxies API requests here, so run both for full-stack development.

## GraphQL schema dump

The client's code generation depends on a dump of this app's GraphQL schema. After changing any GraphQL types, fields, mutations, etc., regenerate it:

```sh
bundle exec rails graphql:schema:dump
```

This writes `server.model.graphql` and `server.schema.json` to `../client/src/app/generated/`. Commit these alongside your schema changes, then run `yarn generate-apollo` in the client (see `../client/README.md`).

## Testing

```sh
bundle exec rails test
```

The Minitest suite requires the test database (`rails db:create db:schema:load RAILS_ENV=test`) and a running Elasticsearch instance. CI additionally sets `CIVIC_API_HMAC_KEY` (any value works for tests).

## Linting & security scanning

- `./bin/rubocop -a` — lint and autocorrect; runs in CI. A sample pre-commit hook is provided at `.pre-commit-sample` (copy to `.git/hooks/pre-commit`).
- `./bin/brakeman` — static security analysis; runs in CI. For false positives, run `./bin/brakeman -I` to interactively add annotated ignores to `config/brakeman.ignore`.

## Deployment

Deployment is via Capistrano (`Capfile`, `config/deploy`) driven by GitHub Actions workflows (`.github/workflows/deploy.yml`, `staging.yml`). Systemd unit files and the nginx config used in deployment live in the top-level `../config/` directory. A headless Docker image for API-only usage is defined in `Dockerfile-headless`.
