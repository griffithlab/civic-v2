class AddMutallyExclusiveCodes < ActiveRecord::Migration[8.1]
  def change
    add_column :specification_criteria, :mutually_exclusive_codes, :string, array: true, default: []

    add_enum_value :specification_evaluation_statuses, "excluded", before: "not_evaluated"
  end
end
