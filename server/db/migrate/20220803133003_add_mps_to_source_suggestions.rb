class AddMpsToSourceSuggestions < ActiveRecord::Migration[6.1]
  def up
    add_reference :source_suggestions, :molecular_profile, foreign_key: true
  end

  def down
    remove_reference :source_suggestions, :moelcular_profile, foreign_key: true
  end
end
