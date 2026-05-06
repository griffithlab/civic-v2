module Chats
  class ChatNameJob < ApplicationJob
    def perform(chat_id, content)
      chat = Chats::Chat.find(chat_id)

      response = RubyLLM.chat(model: "gpt-4o-mini").ask(
        "Generate a short, concise name (maximum 6 words) for a chat conversation " \
        "that starts with the following message. Respond with ONLY the name, no quotes " \
        "or punctuation:\n\n#{content}"
      )

      chat.update_column(:name, response.content.strip)
      chat.reload

      chat.broadcast_name_update
    end
  end
end
