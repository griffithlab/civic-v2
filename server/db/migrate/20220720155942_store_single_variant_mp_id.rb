class StoreSingleVariantMpId < ActiveRecord::Migration[6.1]
  def up
    add_column :variants, :single_variant_molecular_profile_id, :integer

    Variant.find_each do |v|
      candidate_mps = v.molecular_profiles.reject { |mp| mp.variants.size > 1 }
      if candidate_mps.size > 1 
        raise StandardError.new("#{v.id} has multiple single variant MPs")
      end
      if candidate_mps.size == 0
        v.single_variant_molecular_profile = MolecularProfile.first_or_create(name: "#GID#{v.gene_id} #VID#{v.id}")
      else
        v.single_variant_molecular_profile = candidate_mps.first
      end
      v.save(validate: false)
    end

    add_index :variants, :single_variant_molecular_profile_id
    remove_index :molecular_profiles, :name
    add_index :molecular_profiles, :name, unique: true
    add_foreign_key :variants, :molecular_profiles, column: :single_variant_molecular_profile_id
    change_column_null :variants, :single_variant_molecular_profile_id, false
  end

  def down
    remove_column :variants, :single_variant_molecular_profile_id
  end
end
