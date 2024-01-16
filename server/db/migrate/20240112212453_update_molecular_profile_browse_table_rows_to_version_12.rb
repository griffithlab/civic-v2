class UpdateMolecularProfileBrowseTableRowsToVersion12 < ActiveRecord::Migration[6.1]
  def change
    update_view :molecular_profile_browse_table_rows, version: 12, revert_to_version: 11, materialized: true
  end
end
