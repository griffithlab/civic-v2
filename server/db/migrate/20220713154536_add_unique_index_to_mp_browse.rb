class AddUniqueIndexToMpBrowse < ActiveRecord::Migration[6.1]
  def change
    add_index :molecular_profile_browse_table_rows, :id, unique: true
  end
end
