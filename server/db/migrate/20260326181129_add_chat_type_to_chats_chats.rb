class AddChatTypeToChatsChats < ActiveRecord::Migration[8.1]
  def change
    add_column :chats_chats, :chat_type, :string, null: false, default: "curation"
    add_index :chats_chats, :chat_type
  end
end
