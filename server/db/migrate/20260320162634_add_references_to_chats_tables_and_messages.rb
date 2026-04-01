class AddReferencesToChatsTablesAndMessages < ActiveRecord::Migration[8.0]
  def change
    add_reference :chats_chats, :model, foreign_key: { to_table: :chats_models }
    add_reference :chats_chats, :user, foreign_key: true
    add_column :chats_chats, :name, :string
    add_reference :chats_tool_calls, :message, null: false, foreign_key: { to_table: :chats_messages }
    add_reference :chats_messages, :chat, null: false, foreign_key: { to_table: :chats_chats }
    add_reference :chats_messages, :model, foreign_key: { to_table: :chats_models }
    add_reference :chats_messages, :tool_call, foreign_key: { to_table: :chats_tool_calls }
  end
end
