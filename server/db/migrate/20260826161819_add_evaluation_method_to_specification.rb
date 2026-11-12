class AddEvaluationMethodToSpecification < ActiveRecord::Migration[8.1]
  def change
    create_enum :specification_evaluation_methods, [
      "one",
      "all",
    ]
    add_column :specifications, :evaluation_method, :enum, enum_type: :specification_evaluation_methods, default: "all"
  end
end
