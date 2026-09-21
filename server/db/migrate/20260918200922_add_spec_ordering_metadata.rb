class AddSpecOrderingMetadata < ActiveRecord::Migration[8.1]
  def change
    add_column :specifications, :assessment_group_order, :string, array: true, default: []
    add_column :specification_criteria, :position_within_assessment_group, :int, default: 999
  end
end
