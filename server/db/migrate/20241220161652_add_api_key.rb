class AddApiKey < ActiveRecord::Migration[7.1]
  def change
    create_table :api_keys do |t|
      t.belongs_to :bearer, polymorphic: true, index: true
      t.text :token_prefix, null: false
      t.text :token_suffix, null: false
      t.text :token_digest, null: false
      t.boolean :revoked, null: false, default: false, index: true
      t.timestamps
    end
    add_index :api_keys, :token_digest, unique: true
  end
end
