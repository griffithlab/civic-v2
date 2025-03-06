class StoreSingleVariantMpId < ActiveRecord::Migration[6.1]
  def up
    add_column :variants, :single_variant_molecular_profile_id, :integer

    add_index :variants, :single_variant_molecular_profile_id
    remove_index :molecular_profiles, :name
    add_index :molecular_profiles, :name, unique: true
    add_foreign_key :variants, :molecular_profiles, column: :single_variant_molecular_profile_id
    # this is populated by a migration script after this has run
  end

  def down
    remove_column :variants, :single_variant_molecular_profile_id
  end
end
