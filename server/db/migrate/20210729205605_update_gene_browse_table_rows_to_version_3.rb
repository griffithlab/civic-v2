class UpdateGeneBrowseTableRowsToVersion3 < ActiveRecord::Migration[6.1]
  def up
    update_view :gene_browse_table_rows, version: 3, materialized: true
  end

  def down
    update_view :gene_browse_table_rows, version: 2, materialized: true
  end
end
