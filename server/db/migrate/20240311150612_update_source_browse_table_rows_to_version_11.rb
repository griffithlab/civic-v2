class UpdateSourceBrowseTableRowsToVersion11 < ActiveRecord::Migration[7.1]
  def change
    update_view :source_browse_table_rows,
      version: 11,
      revert_to_version: 10,
      materialized: true
  end
end
