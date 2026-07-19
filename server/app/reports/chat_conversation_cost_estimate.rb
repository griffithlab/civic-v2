class ChatConversationCostEstimate < Report
  attr_reader :chat, :include_message_breakdown

  def self.name
    "Chat Conversation Cost Estimate"
  end

  def self.description
    "Estimate the cost of a single chat conversation using persisted token usage and model pricing metadata."
  end

  def self.inputs
    {
      chat_id: :int,
      include_message_breakdown: :boolean,
    }
  end

  def setup(chat_id:, include_message_breakdown: true)
    parsed_chat_id = chat_id.to_i
    if parsed_chat_id <= 0
      errors << "chat_id must be a positive integer"
      return
    end

    @chat = Chats::Chat.find_by(id: parsed_chat_id)
    @include_message_breakdown = include_message_breakdown
    errors << "Chat not found with id #{parsed_chat_id}" unless @chat
  end

  def headers
    return message_breakdown_headers if include_message_breakdown

    [
      "Chat ID",
      "Assistant Messages",
      "Messages Priced",
      "Input Tokens",
      "Cached Input Tokens",
      "Output Tokens",
      "Thinking Tokens",
      "Estimated Cost (USD)",
    ]
  end

  def execute
    return if errors.any?

    assistant_messages = chat.messages.where(role: "assistant").includes(:model).order(:created_at, :id)
    if assistant_messages.none?
      errors << "Chat #{chat.id} has no assistant messages to estimate cost from"
      return
    end

    totals = {
      assistant_messages: 0,
      priced_messages: 0,
      input_tokens: 0,
      cached_tokens: 0,
      output_tokens: 0,
      thinking_tokens: 0,
      estimated_cost_usd: 0.0,
    }

    assistant_messages.each do |message|
      totals[:assistant_messages] += 1

      input_tokens = message.input_tokens.to_i
      cached_tokens = message.cached_tokens.to_i
      output_tokens = message.output_tokens.to_i
      thinking_tokens = message.thinking_tokens.to_i

      totals[:input_tokens] += input_tokens
      totals[:cached_tokens] += cached_tokens
      totals[:output_tokens] += output_tokens
      totals[:thinking_tokens] += thinking_tokens

      cost = estimate_message_cost(message: message, input_tokens: input_tokens, cached_tokens: cached_tokens, output_tokens: output_tokens, thinking_tokens: thinking_tokens)

      if cost[:priced]
        totals[:priced_messages] += 1
        totals[:estimated_cost_usd] += cost[:total]
      end

      append_message_row(message: message, cost: cost, input_tokens: input_tokens, cached_tokens: cached_tokens, output_tokens: output_tokens, thinking_tokens: thinking_tokens) if include_message_breakdown
    end

    if totals[:priced_messages].zero?
      errors << "No pricing metadata found for chat #{chat.id}; unable to estimate cost"
      return
    end

    if include_message_breakdown
      append_breakdown_totals_row(totals)
      return
    end

    data << [
      chat.id,
      totals[:assistant_messages],
      totals[:priced_messages],
      totals[:input_tokens],
      totals[:cached_tokens],
      totals[:output_tokens],
      totals[:thinking_tokens],
      format("%.6f", totals[:estimated_cost_usd]),
    ]
  end

  private

  def message_breakdown_headers
    [
      "Chat ID",
      "Message ID",
      "Created At",
      "Model",
      "Input Tokens",
      "Cached Input Tokens",
      "Output Tokens",
      "Thinking Tokens",
      "Input Cost (USD)",
      "Cached Input Cost (USD)",
      "Output Cost (USD)",
      "Thinking Cost (USD)",
      "Message Total (USD)",
      "Pricing Available",
    ]
  end

  def estimate_message_cost(message:, input_tokens:, cached_tokens:, output_tokens:, thinking_tokens:)
    pricing = message.model&.pricing.presence || chat.model&.pricing.presence
    rates = extract_rates(pricing)

    return { priced: false, input: 0.0, cached_input: 0.0, output: 0.0, thinking: 0.0, total: 0.0 } unless rates[:input] || rates[:output]

    uncached_input_tokens = [ input_tokens - cached_tokens, 0 ].max
    input_cost = rates[:input] ? uncached_input_tokens * rates[:input] / 1_000_000.0 : 0.0
    cached_input_cost = rates[:cached_input] ? cached_tokens * rates[:cached_input] / 1_000_000.0 : 0.0
    output_cost = rates[:output] ? output_tokens * rates[:output] / 1_000_000.0 : 0.0
    thinking_cost = rates[:reasoning_output] ? thinking_tokens * rates[:reasoning_output] / 1_000_000.0 : 0.0

    {
      priced: true,
      input: input_cost,
      cached_input: cached_input_cost,
      output: output_cost,
      thinking: thinking_cost,
      total: input_cost + cached_input_cost + output_cost + thinking_cost,
    }
  end

  def append_message_row(message:, cost:, input_tokens:, cached_tokens:, output_tokens:, thinking_tokens:)
    data << [
      chat.id,
      message.id,
      message.created_at.iso8601,
      message.model&.name || chat.model&.name || "N/A",
      input_tokens,
      cached_tokens,
      output_tokens,
      thinking_tokens,
      format("%.6f", cost[:input]),
      format("%.6f", cost[:cached_input]),
      format("%.6f", cost[:output]),
      format("%.6f", cost[:thinking]),
      format("%.6f", cost[:total]),
      cost[:priced] ? "Yes" : "No",
    ]
  end

  def append_breakdown_totals_row(totals)
    data << [
      chat.id,
      "TOTAL",
      nil,
      nil,
      totals[:input_tokens],
      totals[:cached_tokens],
      totals[:output_tokens],
      totals[:thinking_tokens],
      nil,
      nil,
      nil,
      nil,
      format("%.6f", totals[:estimated_cost_usd]),
      "#{totals[:priced_messages]}/#{totals[:assistant_messages]} priced",
    ]
  end

  def extract_rates(pricing)
    standard_text_pricing = pricing&.dig("text_tokens", "standard") || {}
    {
      input: standard_text_pricing["input_per_million"],
      output: standard_text_pricing["output_per_million"],
      cached_input: standard_text_pricing["cached_input_per_million"],
      reasoning_output: standard_text_pricing["reasoning_output_per_million"],
    }
  end
end
