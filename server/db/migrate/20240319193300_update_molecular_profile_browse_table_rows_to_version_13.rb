class UpdateMolecularProfileBrowseTableRowsToVersion13 < ActiveRecord::Migration[7.1]
  def change
    update_view :molecular_profile_browse_table_rows,
      version: 13,
      revert_to_version: 12,
      materialized: true
  end
end
