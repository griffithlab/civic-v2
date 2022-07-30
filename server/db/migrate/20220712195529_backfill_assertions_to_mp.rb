class BackfillAssertionsToMp < ActiveRecord::Migration[6.1]
  def change
    #prior to going live, each variant will only have a single MP associated with it
    Assertion.find_each do |a|
      mp = a.variant.molecular_profiles.first
      a.molecular_profile = mp
      a.save!(validate: false)
    end
  end

  def down
    Assertion.find_each do |a|
      a.molecular_profile = nil
      a.save!(validate: false)
    end
  end
end
