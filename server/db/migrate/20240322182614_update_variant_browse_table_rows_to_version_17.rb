class UpdateVariantBrowseTableRowsToVersion17 < ActiveRecord::Migration[7.1]
  def change
    update_view :variant_browse_table_rows,
      version: 17,
      revert_to_version: 16,
      materialized: true
  end
end
