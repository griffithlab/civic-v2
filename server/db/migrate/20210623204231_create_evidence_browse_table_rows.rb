class CreateEvidenceBrowseTableRows < ActiveRecord::Migration[6.1]
  def up
    create_view :evidence_browse_table_rows#, materialized: true
  end

  def down
    drop_view :evidence_browse_table_rows, materialized: true
  end
end
