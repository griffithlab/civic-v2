class CreateDiseaseBrowseTableRows < ActiveRecord::Migration[6.1]
  def up
    create_view :disease_browse_table_rows, materialized: true
  end

  def down
    drop_view :disease_browse_table_rows, materialized: true
  end
end
