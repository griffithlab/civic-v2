RubyLLM.configure do |config|
  config.bedrock_region = ENV.fetch("AWS_REGION", "us-west-2")
  config.default_model = "us.anthropic.claude-sonnet-4-6"

  # this will not work until https://github.com/crmne/ruby_llm/pull/677 is merged.
  # fall back to openai embeddings for now
  # config.default_embedding_model = "amazon.titan-embed-text-v2:0"

  config.openai_api_key = ENV["OPENAI_API_KEY"] || Rails.application.credentials.dig(:openai_api_key)
  config.default_embedding_model = "text-embedding-3-large"
  config.use_new_acts_as = true
end

# Eagerly load the model registry and verify the default model is available.
# This guards against the lazy-loaded registry being empty in the Puma process.
Rails.application.config.after_initialize do
  registry_file = RubyLLM.config.model_registry_file
  registry = RubyLLM::Models.instance

  Rails.logger.info "[RubyLLM] Model registry file: #{registry_file}"
  Rails.logger.info "[RubyLLM] File exists: #{File.exist?(registry_file)}"
  Rails.logger.info "[RubyLLM] Models loaded: #{registry.all.size}"

  if registry.all.empty?
    Rails.logger.warn "[RubyLLM] Model registry is empty! Attempting reload from JSON..."
    registry.load_from_json!
    Rails.logger.info "[RubyLLM] After reload: #{registry.all.size} models"
  end

  default_model = RubyLLM.config.default_model
  match = registry.all.find { |m| m.id == default_model }
  if match
    Rails.logger.info "[RubyLLM] Default model '#{default_model}' found (provider: #{match.provider})"
  else
    Rails.logger.error "[RubyLLM] Default model '#{default_model}' NOT FOUND in registry of #{registry.all.size} models!"
    # Log first 5 model IDs for debugging
    Rails.logger.error "[RubyLLM] First 5 models: #{registry.all.first(5).map(&:id).join(', ')}"
  end
end
