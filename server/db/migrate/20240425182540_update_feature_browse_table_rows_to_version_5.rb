class UpdateFeatureBrowseTableRowsToVersion5 < ActiveRecord::Migration[7.1]
  def change
    update_view :feature_browse_table_rows,
      version: 5,
      revert_to_version: 4,
      materialized: true
  end
end
