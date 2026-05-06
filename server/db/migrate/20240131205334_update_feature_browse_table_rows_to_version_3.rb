class UpdateFeatureBrowseTableRowsToVersion3 < ActiveRecord::Migration[6.1]
  def change
    update_view :feature_browse_table_rows,
      version: 3,
      revert_to_version: 2,
      materialized: true
  end
end
