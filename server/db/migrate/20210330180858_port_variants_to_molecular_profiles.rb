class PortVariantsToMolecularProfiles < ActiveRecord::Migration[6.1]
  def up
    Variant.all.each do |v|
      mp = MolecularProfile.create(name: "#{v.gene.name} #{v.name}")
      mp.variants << v
      v.evidence_items.each do |eid|
        eid.molecular_profile = mp
        eid.save
      end
      mp.save
    end

    #TODO do we want an event for this?
  end

  def down
    MolecularProfile.destroy_all
  end
end
