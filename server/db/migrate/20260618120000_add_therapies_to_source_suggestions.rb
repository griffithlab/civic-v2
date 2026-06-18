class AddTherapiesToSourceSuggestions < ActiveRecord::Migration[7.1]
  def change
    create_join_table :source_suggestions, :therapies, column_options: { type: :integer } do |t|
      t.index [ :source_suggestion_id, :therapy_id ],
        unique: true,
        name: "idx_source_suggestions_therapies"
      t.index [ :therapy_id, :source_suggestion_id ],
        name: "idx_therapies_source_suggestions"
    end

    add_foreign_key :source_suggestions_therapies, :source_suggestions
    add_foreign_key :source_suggestions_therapies, :therapies
  end
end
