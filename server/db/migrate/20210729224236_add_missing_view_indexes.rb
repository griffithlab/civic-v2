class AddMissingViewIndexes < ActiveRecord::Migration[6.1]
  def change
    add_index :disease_browse_table_rows, :id, unique: true
    add_index :source_browse_table_rows, :id, unique: true
    add_index :variant_group_browse_table_rows, :id, unique: true
  end
end
