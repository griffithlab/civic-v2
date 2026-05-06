class CreateChatsDocuments < ActiveRecord::Migration[8.0]
  def change
    create_table :chats_documents do |t|
      t.text :content, null: false
      t.text :title, null: false
      t.text :location, null: false
      t.text :content_hash, null: false
      t.vector :embedding, null: false
      t.integer :document_source, null: false
    end
  end
end
