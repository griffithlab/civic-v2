class UpdateVariantBrowseTableRowsToVersion14 < ActiveRecord::Migration[6.1]
  def change
    update_view :variant_browse_table_rows,
      version: 14,
      revert_to_version: 13,
      materialized: true
  end
end
