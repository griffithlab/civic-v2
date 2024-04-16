class UpdateFeatureBrowseTableRowsToVersion4 < ActiveRecord::Migration[7.1]
  def change
    update_view :feature_browse_table_rows,
      version: 4,
      revert_to_version: 3,
      materialized: true
  end
end
