class UpdateVariantBrowseTableRowsToVersion9 < ActiveRecord::Migration[6.1]
  def change
    update_view :variant_browse_table_rows, version: 9, revert_to_version: 8, materialized: true
  end
end
