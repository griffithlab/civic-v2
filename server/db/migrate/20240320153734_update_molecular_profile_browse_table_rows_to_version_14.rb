class UpdateMolecularProfileBrowseTableRowsToVersion14 < ActiveRecord::Migration[7.1]
  def change
    update_view :molecular_profile_browse_table_rows,
      version: 14,
      revert_to_version: 13,
      materialized: true
  end
end
