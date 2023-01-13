class UpdateMolecularProfileBrowseTableRowsToVersion10 < ActiveRecord::Migration[6.1]
  def change
    update_view :molecular_profile_browse_table_rows, version: 10, revert_to_version: 9, materialized: true
  end
end
