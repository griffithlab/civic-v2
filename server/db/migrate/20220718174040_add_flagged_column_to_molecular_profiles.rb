class AddFlaggedColumnToMolecularProfiles < ActiveRecord::Migration[6.1]
  def change
    add_column :molecular_profiles, :flagged, :boolean, null: false, index: true, default: false
  end
end
