class AddMpsToSourceSuggestions < ActiveRecord::Migration[6.1]
  def up
    add_reference :source_suggestions, :molecular_profile, foreign_key: true

    SourceSuggestion.all.each do |s|
      if s.variant_id
        mp = s.variant.single_variant_molecular_profile
        s.molecular_profile_id = mp.id
        s.save
      end
    end
  end

  def down
    remove_reference :source_suggestions, :moelcular_profile, foreign_key: true
  end
end
