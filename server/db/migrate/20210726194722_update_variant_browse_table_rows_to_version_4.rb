class UpdateVariantBrowseTableRowsToVersion4 < ActiveRecord::Migration[6.1]
  def change
    update_view :variant_browse_table_rows, version: 4, revert_to_version: 3, materialized: true
  end
end
