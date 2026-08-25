# frozen_string_literal: true

# Monkey-patch for RubyLLM's Bedrock provider to inject cachePoint blocks
# into the Converse API payload, enabling prompt caching for Claude models.
#
# Bedrock's Converse API supports prompt caching but requires explicit
# cachePoint blocks in the request. RubyLLM (as of v1.14.0) does not
# insert these. OpenAI handles caching automatically, which is why the
# OpenAI path is significantly cheaper for multi-turn conversations.
#
# This module is prepended onto RubyLLM::Providers::Bedrock and overrides
# three private methods to append cachePoint blocks to:
#   1. The system prompt (top-level `system` array)
#   2. Tool definitions (inside `toolConfig.tools` array)
#   3. The last two messages in the conversation history
#
# Claude models on Bedrock support up to 4 cachePoint blocks per request.
# We use all 4: system, tools, and up to 2 in the conversation history.
#
# Cache checkpoints require a minimum token count (1,024 for Sonnet 4).
# If the content preceding a checkpoint doesn't meet the minimum, the
# checkpoint is silently ignored by the API -- no errors are raised.
#
# This patch should be removed once RubyLLM adds native Bedrock prompt
# caching support. Track: https://github.com/crmne/ruby_llm/issues
module BedrockPromptCaching
  CACHE_POINT = { cachePoint: { type: "default" } }.freeze

  private

  # Appends a cachePoint after the system prompt blocks.
  # The system prompt is static across all turns, making it an ideal
  # candidate for caching even if it alone may not meet the minimum
  # token threshold.
  def render_system(messages)
    blocks = super
    return blocks if blocks.empty?

    blocks + [ CACHE_POINT ]
  end

  # Appends a cachePoint after all tool definitions in the toolConfig.
  # Tool definitions are static across the conversation and are resent
  # on every API call. For MCP chats with many tools, this can be a
  # significant number of tokens.
  def render_tool_config(tools, tool_prefs)
    config = super
    return config if config.nil?

    config[:tools] = config[:tools] + [ CACHE_POINT ]
    config
  end

  # Injects cachePoint blocks into the last 2 messages of the conversation
  # history. We use 2 of our 4 allowed cache points here (the other 2 go
  # to system and tools).
  #
  # Strategy: cache the second-to-last AND the last message.
  #
  # The last message is the newest content (user message or tool result
  # batch). Caching it pays a 25% write premium on this call, but on the
  # NEXT call it becomes part of the stable prefix and gets a 90% read
  # discount. This is especially valuable for tool result batches that
  # contain large documents from RAG lookups.
  #
  # The second-to-last message is the deepest cache point in the
  # conversation, anchoring the prefix that was already cached on the
  # prior call. Together, the two points ensure maximum cache reuse
  # across consecutive calls in multi-turn tool-call sequences.
  #
  # Example with a 3-round-trip tool conversation:
  #   Call 1: [user*]                          -> write user
  #   Call 2: [user, asst, tool_batch*]        -> read user, write tool_batch
  #   Call 3: [user, asst, tool_batch, asst, tool_batch_2*] -> read through tool_batch, write tool_batch_2
  #
  # (* = last message, cached on that call, read on the next)
  def render_messages(messages)
    rendered = super
    return rendered if rendered.empty?

    if rendered.length >= 2
      inject_cache_point(rendered, rendered.length - 2)
      inject_cache_point(rendered, rendered.length - 1)
    else
      # Only 1 message: cache it so the next call can read it
      inject_cache_point(rendered, 0)
    end

    rendered
  end

  # Appends a cachePoint to the content array of the message at the given
  # index. Replaces the entry in-place within the rendered array using a
  # new hash to avoid mutating the original message.
  def inject_cache_point(rendered, index)
    message = rendered[index]
    rendered[index] = message.merge(
      content: message[:content] + [ CACHE_POINT ]
    )
  end
end
