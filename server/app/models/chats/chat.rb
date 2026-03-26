module Chats
  class Chat < ApplicationRecord
    self.table_name = "chats_chats"

    acts_as_chat messages_foreign_key: :chat_id,
                 message_class: "Chats::Message",
                 model_class: "Chats::Model"

    belongs_to :user, class_name: "::User"

    def display_name
      name.presence || model&.name || "Chat"
    end
  end
end
