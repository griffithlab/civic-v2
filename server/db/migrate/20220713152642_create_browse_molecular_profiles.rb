class CreateBrowseMolecularProfiles < ActiveRecord::Migration[6.1]
  def change
    create_view :molecular_profile_browse_table_rows, materialized: true
  end
end
