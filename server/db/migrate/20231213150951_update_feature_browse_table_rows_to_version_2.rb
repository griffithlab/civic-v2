class UpdateFeatureBrowseTableRowsToVersion2 < ActiveRecord::Migration[6.1]
  def change
    update_view :feature_browse_table_rows,
      version: 2,
      revert_to_version: 1,
      materialized: true

    add_index :feature_browse_table_rows, :id, unique: true
  end
end
