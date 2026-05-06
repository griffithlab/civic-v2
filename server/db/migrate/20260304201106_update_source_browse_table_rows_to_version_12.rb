class UpdateSourceBrowseTableRowsToVersion12 < ActiveRecord::Migration[8.0]
  def change
    update_view :source_browse_table_rows,
      version: 12,
      revert_to_version: 11,
      materialized: true
  end
end
