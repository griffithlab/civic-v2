class BackfillAssertionsToMp < ActiveRecord::Migration[6.1]
  def change
    # moved to migration script, no-op
  end

  def down
    Assertion.find_each do |a|
      a.molecular_profile = nil
      a.save!(validate: false)
    end
  end
end
