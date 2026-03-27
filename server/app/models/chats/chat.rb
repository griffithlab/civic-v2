module Chats
  class Chat < ApplicationRecord
    self.table_name = "chats_chats"

    CHAT_TYPES = %w[curation mcp].freeze

    acts_as_chat messages_foreign_key: :chat_id,
                 message_class: "Chats::Message",
                 model_class: "Chats::Model"

    belongs_to :user, class_name: "::User"

    validates :chat_type, inclusion: { in: CHAT_TYPES }

    def curation?
      chat_type == "curation"
    end

    def mcp?
      chat_type == "mcp"
    end

    def display_name
      name.presence || model&.name || "Chat"
    end
  end
end
