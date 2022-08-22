class UpdateMolecularProfileBrowseTableRowsToVersion7 < ActiveRecord::Migration[6.1]
  def change
    update_view :molecular_profile_browse_table_rows, version: 7, revert_to_version: 6, materialized: true
  end
end
