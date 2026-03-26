module Chats
  class Message < ApplicationRecord
    self.table_name = "chats_messages"

    acts_as_message tool_calls_foreign_key: :message_id,
                    chat_class: "Chats::Chat",
                    tool_call_class: "Chats::ToolCall",
                    model_class: "Chats::Model"
    has_many_attached :attachments
    broadcasts_to ->(message) { "chats_chat_#{message.chat_id}" }

    def to_partial_path
      "chats/messages/message"
    end

    def broadcast_append_chunk(content)
      broadcast_append_to "chats_chat_#{chat_id}",
        target: "message_#{id}_content",
        partial: "chats/messages/content",
        locals: { content: content }
    end

    private

    def extract_content
      if has_attribute?(:content_raw) && content_raw.present? && content_raw.is_a?(Hash)
        content_raw.to_json
      else
        super
      end
    end
  end
end
