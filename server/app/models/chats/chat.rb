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

    def broadcast_renamed
      Turbo::StreamsChannel.broadcast_render_to(
        user,
        self,
        template: "chats/chats/name_updated_chat_stream",
        locals: { chat: self },
      )

      Turbo::StreamsChannel.broadcast_render_to(
        user,
        "chats",
        template: "chats/chats/name_updated_global_stream",
        locals: { chat: self },
      )
    end
  end
end
