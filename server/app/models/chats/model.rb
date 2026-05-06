module Chats
  class Model < ApplicationRecord
    self.table_name = "chats_models"

    acts_as_model chats_foreign_key: :model_id, chat_class: "Chats::Chat"
  end
end
