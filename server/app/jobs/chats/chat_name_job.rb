module Chats
  class ChatNameJob < ChatJob
    def perform(chat_id, content)
      chat = Chats::Chat.find(chat_id)

      model = if Rails.application.config.using_bedrock
        "us.anthropic.claude-haiku-4-5-20251001-v1:0"
      else
        "gpt-4o-mini"
      end

      response = RubyLLM.chat(model: model).ask(
        "Generate a short, concise name (maximum 6 words) for a chat conversation " \
        "that starts with the following message. Respond with ONLY the name, no quotes " \
        "or punctuation:\n\n#{content}"
      )

      chat.update_column(:name, response.content.strip)
      chat.reload

      chat.broadcast_renamed
    end
  end
end
