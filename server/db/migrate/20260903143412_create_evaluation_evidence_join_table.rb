class CreateEvaluationEvidenceJoinTable < ActiveRecord::Migration[8.1]
  def change
    create_join_table :specification_evaluations, :evidence_items do |t|
      t.index [ :specification_evaluation_id, :evidence_item_id ]
      t.index [ :evidence_item_id, :specification_evaluation_id ]
    end
  end
end
