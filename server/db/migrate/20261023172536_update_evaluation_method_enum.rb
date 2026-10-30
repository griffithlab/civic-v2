class UpdateEvaluationMethodEnum < ActiveRecord::Migration[8.1]
  def change
    rename_enum_value :specification_evaluation_methods, from: "all", to: "all_strength"
    add_enum_value :specification_evaluation_methods, :all_flowchart
  end
end
