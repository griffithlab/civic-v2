class PopulateAssertionMps < ActiveRecord::Migration[6.1]
  def up
    Assertion.all.each do |a|
      a.molecular_profile_id = a.variant.single_variant_molecular_profile_id
      a.save(:validate => false)
    end
  end

  def down
  end
end
