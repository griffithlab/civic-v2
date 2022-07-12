class PortVariantsToMolecularProfiles < ActiveRecord::Migration[6.1]
  def up
    Variant.find_each do |v|
      mp = MolecularProfile.create(name: "#GID#{v.gene_id} #VID#{v.id}")
      mp.variants << v
      v.evidence_items.each do |eid|
        eid.molecular_profile = mp
        eid.save!(validate: false)
      end
      mp.save!
    end

    #TODO do we want an event for this?
  end

  def down
    MolecularProfile.destroy_all
  end
end
