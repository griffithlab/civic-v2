class UpdateVariantBrowseTableRowsToVersion16 < ActiveRecord::Migration[7.1]
  def change
    update_view :variant_browse_table_rows,
      version: 16,
      revert_to_version: 15,
      materialized: true
  end
end
