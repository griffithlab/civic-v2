# frozen_string_literal: true

# Apply Bedrock prompt caching monkey-patch in environments that use Bedrock.
# This injects cachePoint blocks into the Converse API payload to enable
# prompt caching for Claude models, significantly reducing input token costs
# and latency for multi-turn conversations and tool-call round-trips.
#
# The patch is only applied when using_bedrock is true (production/staging).
# In development, OpenAI handles caching automatically so no patch is needed.
Rails.application.config.after_initialize do
  if Rails.application.config.using_bedrock
    RubyLLM::Providers::Bedrock.prepend(BedrockPromptCaching)
    Rails.logger.info "[BedrockPromptCaching] Patched RubyLLM::Providers::Bedrock with prompt caching support"
  end
end
