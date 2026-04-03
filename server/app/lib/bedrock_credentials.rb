require "aws-sdk-core"

class BedrockCredentials
  include Singleton

  REFRESH_BUFFER = 5.minutes

  def self.ensure_fresh!
    instance.refresh_if_needed!
  end

  def initialize
    @mutex = Mutex.new
    @expires_at = nil
    @credential_provider = nil
  end

  def refresh_if_needed!
    @mutex.synchronize do
      return if @expires_at && @expires_at > Time.current + REFRESH_BUFFER

      refresh!
    end
  end

  private

  def refresh!
    provider = credential_provider

    provider.refresh!

    creds = provider.credentials

    RubyLLM.config.bedrock_api_key       = creds.access_key_id
    RubyLLM.config.bedrock_secret_key    = creds.secret_access_key
    RubyLLM.config.bedrock_session_token = creds.session_token

    @expires_at = provider.expiration

    Rails.logger.info "[BedrockCredentials] Credentials refreshed. Expires at: #{@expires_at}"
  rescue Aws::Errors::MissingCredentialsError => e
    Rails.logger.error "[BedrockCredentials] No AWS credentials found: #{e.message}"
    raise
  end

  def credential_provider
    @credential_provider ||= Aws::CredentialProviderChain.new(
      Aws::SharedConfig.new(config_enabled: true)
    ).resolve
  end
end
