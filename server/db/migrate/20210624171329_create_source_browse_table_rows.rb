class CreateSourceBrowseTableRows < ActiveRecord::Migration[6.1]
  def up
    create_view :source_browse_table_rows, materialized: true
  end

  def down
    drop_view :source_browse_table_rows, materialized: true
  end
end
