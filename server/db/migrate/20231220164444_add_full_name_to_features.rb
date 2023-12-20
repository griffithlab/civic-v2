class AddFullNameToFeatures < ActiveRecord::Migration[6.1]
  def up
    add_column :features, :full_name, :text, index: true

    Features::Gene.find_each do |g|
      g.feature.full_name = g.official_name
      g.feature.save!
    end
  end

  def down
    remove_column :features, :full_name
  end
end
