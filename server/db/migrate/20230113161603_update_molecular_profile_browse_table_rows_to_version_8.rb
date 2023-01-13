class UpdateMolecularProfileBrowseTableRowsToVersion8 < ActiveRecord::Migration[6.1]
  def change
    update_view :molecular_profile_browse_table_rows, version: 8, revert_to_version: 7, materialized: true
  end
end
