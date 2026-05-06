class UpdateDiseaseBrowseTableRowsToVersion8 < ActiveRecord::Migration[7.1]
  def change
    update_view :disease_browse_table_rows,
      version: 8,
      revert_to_version: 7,
      materialized: true
  end
end
