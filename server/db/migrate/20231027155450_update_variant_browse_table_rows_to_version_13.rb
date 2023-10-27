class UpdateVariantBrowseTableRowsToVersion13 < ActiveRecord::Migration[6.1]
  def change
    update_view :variant_browse_table_rows, version: 13, revert_to_version: 12, materialized: true
  end
end
