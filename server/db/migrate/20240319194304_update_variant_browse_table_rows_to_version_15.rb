class UpdateVariantBrowseTableRowsToVersion15 < ActiveRecord::Migration[7.1]
  def change
    update_view :variant_browse_table_rows,
      version: 15,
      revert_to_version: 14,
      materialized: true
  end
end
