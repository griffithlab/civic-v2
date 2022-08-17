class UpdateMolecularProfileScore < ApplicationJob
  def perform(mp)
    calculator = Actions::CalculateCivicScore.new(mp)
    new_score = calculator.perform
    mp.evidence_score = new_score
    mp.save!
  end
end
