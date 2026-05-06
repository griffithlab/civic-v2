class AddUniqueIndexToNewViews < ActiveRecord::Migration[7.1]
  def change
    add_index :user_browse_table_rows, :id, unique: true
    add_index :organization_browse_table_rows, :id, unique: true
  end
end
