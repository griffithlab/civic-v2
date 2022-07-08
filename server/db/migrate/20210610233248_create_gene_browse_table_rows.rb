class CreateGeneBrowseTableRows < ActiveRecord::Migration[6.1]
  def change
    create_view :gene_browse_table_rows, materialized: true
    add_index :gene_browse_table_rows, :id, unique: true
  end
end
