class RenameCriteriumCriterion < ActiveRecord::Migration[8.1]
  def change
     rename_column :specification_evaluations, :specification_criterium_id, :specification_criterion_id
     rename_column :specification_criteria, :criterium, :criterion
  end
end
