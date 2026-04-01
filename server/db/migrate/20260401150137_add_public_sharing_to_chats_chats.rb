class AddPublicSharingToChatsChats < ActiveRecord::Migration[8.1]
  def change
    add_column :chats_chats, :is_public, :boolean, default: false, null: false
    add_column :chats_chats, :public_id, :string
    add_index :chats_chats, :public_id, unique: true, where: "public_id IS NOT NULL"
  end
end
