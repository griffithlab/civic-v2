class MoveScoreToMps < ActiveRecord::Migration[6.1]
  def up
    remove_column :variants, :civic_actionability_score
    add_column :molecular_profiles, :evidence_score, :float, null: true, index: true

    MolecularProfile.find_each do |mp|
      UpdateMolecularProfileScore.new.perform(mp)
    end

    change_column_null :molecular_profiles, :evidence_score, false
  end

  def down
    add_column :variants, :civic_actionability_score, :float, null: true
    remove_column :molecular_profiles, :evidence_score
  end
end
