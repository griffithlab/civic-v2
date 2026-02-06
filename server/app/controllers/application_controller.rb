class ApplicationController < ActionController::Base
  include Authentication
  include ActiveStorage::SetCurrent

  RATE_LIMIT_STORE = ActiveSupport::Cache::RedisCacheStore.new

  # sustained 2 req/s
  rate_limit to: 600, within: 5.minutes,
    store: RATE_LIMIT_STORE,
    scope: :api_requests,
    with: -> do
      if !signed_in?
        head 429
      end
    end
end
