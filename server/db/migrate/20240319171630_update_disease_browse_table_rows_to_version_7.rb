class UpdateDiseaseBrowseTableRowsToVersion7 < ActiveRecord::Migration[7.1]
  def change
    update_view :disease_browse_table_rows,
      version: 7,
      revert_to_version: 6,
      materialized: true
  end
end
