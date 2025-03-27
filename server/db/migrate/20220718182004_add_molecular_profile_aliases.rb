class AddMolecularProfileAliases < ActiveRecord::Migration[6.1]
  def change
    create_table :molecular_profile_aliases do |t|
      t.string :name
    end

    create_join_table :molecular_profile_aliases, :molecular_profiles, table_name: :molecular_profile_aliases_molecular_profiles do |t|
      t.index [ :molecular_profile_alias_id, :molecular_profile_id ], name: :idx_mp_alias_id_mp_id_on_mp_alias_join_table
    end

    add_index :molecular_profile_aliases, :name
    add_index :molecular_profile_aliases_molecular_profiles, :molecular_profile_id, name: :idx_mp_id_on_mp_alias_join_table

    add_foreign_key :molecular_profile_aliases_molecular_profiles, :molecular_profiles
    add_foreign_key :molecular_profile_aliases_molecular_profiles, :molecular_profile_aliases
  end
end
