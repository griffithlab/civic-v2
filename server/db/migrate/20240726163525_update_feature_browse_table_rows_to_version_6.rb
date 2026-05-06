class UpdateFeatureBrowseTableRowsToVersion6 < ActiveRecord::Migration[7.1]
  def change
    update_view :feature_browse_table_rows,
      version: 6,
      revert_to_version: 5,
      materialized: true
  end
end
