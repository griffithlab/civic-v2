unless Rails.env.headless?
  civic_github_key = ENV["CIVIC_GITHUB_KEY"] || Rails.application.credentials.github_key
  civic_github_secret = ENV["CIVIC_GITHUB_SECRET"] || Rails.application.credentials.github_secret

  civic_orcid_key = ENV["CIVIC_ORCID_KEY"] || Rails.application.credentials.orcid_key
  civic_orcid_secret = ENV["CIVIC_ORCID_SECRET"] || Rails.application.credentials.orcid_secret

  civic_google_key = ENV["CIVIC_GOOGLE_KEY"] || Rails.application.credentials.google_key
  civic_google_secret = ENV["CIVIC_GOOGLE_SECRET"] || Rails.application.credentials.google_secret

  Rails.application.config.middleware.use OmniAuth::Builder do
    configure do |config|
      config.path_prefix = "/api/auth"
      config.full_host = Rails.application.config.x.omniauth_full_host
    end
    # Preserve the token authentication used by oauth2 1.x; oauth2 2.x defaults
    # to HTTP Basic authentication. ORCID supplies its own canonical token URL.
    provider :github, civic_github_key, civic_github_secret,
      client_options: { auth_scheme: :request_body }
    provider :orcid, civic_orcid_key, civic_orcid_secret,
      authorize_params: { scope: "/authenticate" },
      client_options: { auth_scheme: :request_body }
    provider :google_oauth2, civic_google_key, civic_google_secret,
      client_options: { auth_scheme: :request_body }
    provider :developer if Rails.env.development? || Rails.env.test?
  end
end
