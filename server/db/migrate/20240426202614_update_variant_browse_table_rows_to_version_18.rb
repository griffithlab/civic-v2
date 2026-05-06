class UpdateVariantBrowseTableRowsToVersion18 < ActiveRecord::Migration[7.1]
  def change
    update_view :variant_browse_table_rows,
      version: 18,
      revert_to_version: 17,
      materialized: true
  end
end
