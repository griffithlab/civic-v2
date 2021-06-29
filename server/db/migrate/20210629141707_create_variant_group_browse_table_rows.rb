class CreateVariantGroupBrowseTableRows < ActiveRecord::Migration[6.1]
  def up
    create_view :variant_group_browse_table_rows, materialized: true
  end

  def down
    drop_view :variant_group_browse_table_rows, materialized: true
  end
end
