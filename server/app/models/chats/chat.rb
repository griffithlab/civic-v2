module Chats
  class Chat < ApplicationRecord
    self.table_name = "chats_chats"

    CHAT_TYPES = %w[curation mcp].freeze

    acts_as_chat messages_foreign_key: :chat_id,
                 message_class: "Chats::Message",
                 model_class: "Chats::Model"

    belongs_to :user, class_name: "::User"

    validates :chat_type, inclusion: { in: CHAT_TYPES }
    validates :public_id, uniqueness: true, allow_nil: true

    scope :publicly_shared, -> { where(is_public: true).where.not(public_id: nil) }

    def make_public!
      update!(is_public: true, public_id: public_id || SecureRandom.uuid)
    end

    def make_private!
      update!(is_public: false, public_id: nil)
    end

    def shared?
      is_public? && public_id.present?
    end

    def curation?
      chat_type == "curation"
    end

    def mcp?
      chat_type == "mcp"
    end

    def display_name
      name.presence || model&.name || "Chat"
    end

    def broadcast_name_update(current_chat: nil)
      # Update sidebar on the chat-specific stream (for the show page)
      Turbo::StreamsChannel.broadcast_replace_to(
        user, self,
        target: "sidebar_chat_#{id}",
        partial: "chats/chats/sidebar_chat",
        locals: { chat: self, current_chat: current_chat || self },
      )

      # Update header name on the chat-specific stream
      Turbo::StreamsChannel.broadcast_replace_to(
        user, self,
        target: "chat_header_name",
        partial: "chats/chats/header_name",
        locals: { chat: self },
      )

      # Update sidebar on the global chats stream (for other pages)
      Turbo::StreamsChannel.broadcast_replace_to(
        user, "chats",
        target: "sidebar_chat_#{id}",
        partial: "chats/chats/sidebar_chat",
        locals: { chat: self, current_chat: nil },
      )

      # Update index page card on the global chats stream
      Turbo::StreamsChannel.broadcast_replace_to(
        user, "chats",
        target: "index_chat_#{id}",
        partial: "chats/chats/index_chat",
        locals: { chat: self },
      )
    end
  end
end
