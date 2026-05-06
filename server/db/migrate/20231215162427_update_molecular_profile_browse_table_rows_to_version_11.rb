class UpdateMolecularProfileBrowseTableRowsToVersion11 < ActiveRecord::Migration[6.1]
  def change
    update_view :molecular_profile_browse_table_rows,
      version: 11,
      revert_to_version: 10,
      materialized: true
  end
end
