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

      broadcast_name_update(chat)
    end

    private

    def broadcast_name_update(chat)
      # Broadcast sidebar and header updates via the chat-specific stream
      Turbo::StreamsChannel.broadcast_replace_to(
        "chats_chat_#{chat.id}",
        target: "sidebar_chat_#{chat.id}",
        partial: "chats/chats/sidebar_chat",
        locals: { chat: chat, current_chat: chat },
      )

      Turbo::StreamsChannel.broadcast_replace_to(
        "chats_chat_#{chat.id}",
        target: "chat_header_name",
        partial: "chats/chats/header_name",
        locals: { chat: chat },
      )

      # Broadcast sidebar and index updates via the chats stream
      Turbo::StreamsChannel.broadcast_replace_to(
        "chats",
        target: "sidebar_chat_#{chat.id}",
        partial: "chats/chats/sidebar_chat",
        locals: { chat: chat, current_chat: nil },
      )

      Turbo::StreamsChannel.broadcast_replace_to(
        "chats",
        target: "index_chat_#{chat.id}",
        partial: "chats/chats/index_chat",
        locals: { chat: chat },
      )
    end
  end
end
