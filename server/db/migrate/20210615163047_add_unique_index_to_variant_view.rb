class AddUniqueIndexToVariantView < ActiveRecord::Migration[6.1]
  def change
    add_index :variant_browse_table_rows, :id, unique: true
  end
end
