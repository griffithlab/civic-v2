class CreateVariantBrowseTableRows < ActiveRecord::Migration[6.1]
  def change
    create_view :variant_browse_table_rows, materialized: true
  end
end
