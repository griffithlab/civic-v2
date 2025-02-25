class AddMolecularProfiles < ActiveRecord::Migration[6.1]
  def change
    create_table :molecular_profiles do |t|
      t.string :name
      t.timestamps
    end
    add_index :molecular_profiles, :name

    create_join_table :molecular_profiles, :variants do |t|
      t.index [ :molecular_profile_id, :variant_id ], name: 'idx_molecular_profile_variant_id'
    end

    add_foreign_key :molecular_profiles_variants, :molecular_profiles
    add_foreign_key :molecular_profiles_variants, :variants

    add_reference :evidence_items, :molecular_profile, index: true, foreign_key: true
  end
end
