class AddTherapyInteractionTypeToSourceSuggestions < ActiveRecord::Migration[8.1]
  def change
    add_column :source_suggestions, :therapy_interaction_type, :integer
  end
end
