class AddModifiersToSpecificationCriteria < ActiveRecord::Migration[8.1]
  def change
    enable_extension "hstore" unless extension_enabled?("hstore")

    add_column :specification_criteria, :modifiers, :hstore

    rename_table :assertions_specification_criteria, :specification_evaluations

    create_enum :specification_evaluation_statuses, [
      "met",
      "not_met",
      "not_evaluated",
    ]

    add_column :specification_evaluations, :evaluation, :enum, enum_type: :specification_evaluation_statuses, default: "not_evaluated"
    add_column :specification_evaluations, :justification, :string, null: true
    add_column :specification_evaluations, :modifier, :string, null: true
  end
end
