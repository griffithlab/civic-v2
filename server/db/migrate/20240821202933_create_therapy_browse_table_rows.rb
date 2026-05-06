class CreateTherapyBrowseTableRows < ActiveRecord::Migration[7.1]
  def change
    create_view :therapy_browse_table_rows, materialized: true
  end
end
