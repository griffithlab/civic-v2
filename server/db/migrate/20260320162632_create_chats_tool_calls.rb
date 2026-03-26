class CreateChatsToolCalls < ActiveRecord::Migration[8.0]
  def change
    create_table :chats_tool_calls do |t|
      t.string :tool_call_id, null: false
      t.string :name, null: false
      t.string :thought_signature

      t.jsonb :arguments, default: {}

      t.timestamps
    end

    add_index :chats_tool_calls, :tool_call_id, unique: true
    add_index :chats_tool_calls, :name
  end
end
