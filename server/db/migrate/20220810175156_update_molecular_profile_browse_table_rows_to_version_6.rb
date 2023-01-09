class UpdateMolecularProfileBrowseTableRowsToVersion6 < ActiveRecord::Migration[6.1]
  def change
    update_view :molecular_profile_browse_table_rows, version: 6, revert_to_version: 5, materialized: true
  end
end
