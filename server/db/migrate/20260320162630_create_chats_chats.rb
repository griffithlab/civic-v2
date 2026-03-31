class CreateChatsChats < ActiveRecord::Migration[8.0]
  def change
    create_table :chats_chats do |t|
      t.timestamps
    end
  end
end
