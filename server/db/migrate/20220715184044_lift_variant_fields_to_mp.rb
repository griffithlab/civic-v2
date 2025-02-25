class LiftVariantFieldsToMp < ActiveRecord::Migration[6.1]
  def up
    # moved to migration script, no-op
  end

  def down
    MolecularProfile.find_each do |mp|
      variant = mp.variants.first
      next if mp.variants.size > 1 # make this an error after running the first time
      variant.description = mp.description
      variant.source_ids = mp.source_ids
      # TODO do we remove variant sources, description columns entirely?
      variant.save!

      mp.revisions.where(status: 'new', field_name: [ 'description', 'source_ids' ]).each do |rev|
        rev.subject = variant
        rev.save!
      end
    end
  end
end
