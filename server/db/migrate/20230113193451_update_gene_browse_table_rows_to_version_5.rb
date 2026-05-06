class UpdateGeneBrowseTableRowsToVersion5 < ActiveRecord::Migration[6.1]
  def change
    update_view :gene_browse_table_rows, version: 5, revert_to_version: 4, materialized: true
  end
end
