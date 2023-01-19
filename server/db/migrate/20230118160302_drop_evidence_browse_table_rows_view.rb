class DropEvidenceBrowseTableRowsView < ActiveRecord::Migration[6.1]
  def change
    drop_view :evidence_browse_table_rows, revert_to_version: 1
  end
end
