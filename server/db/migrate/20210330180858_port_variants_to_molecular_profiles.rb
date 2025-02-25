class PortVariantsToMolecularProfiles < ActiveRecord::Migration[6.1]
  def up
    # moved MP creation to script, now a no-op
  end

  def down
    MolecularProfile.destroy_all
  end
end
