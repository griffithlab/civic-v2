class AddMolecularProfileCommonName < ActiveRecord::Migration[6.1]
  def change
    add_column :molecular_profiles, :common_name, :string
    rename_column :molecular_profiles, :name, :raw_name
  end
end
