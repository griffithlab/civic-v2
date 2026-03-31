module Chats
  class ChatResponseJob < ApplicationJob
    def perform(chat_id)
      chat = Chats::Chat.find(chat_id)

      chat.with_instructions(Chats::Constants::CHAT_INSTRUCTIONS)
        .with_tool(Chats::SearchDocs)
        .with_schema(Chats::ChatResponseSchema)
        .complete { |_chunk| }
    end
  end
end
