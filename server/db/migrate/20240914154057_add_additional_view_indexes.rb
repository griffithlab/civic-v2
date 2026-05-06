class AddAdditionalViewIndexes < ActiveRecord::Migration[7.1]
  def change
    add_index :therapy_browse_table_rows, :id, unique: true
  end
end
