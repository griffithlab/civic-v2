class AddGroupsToSpecifications < ActiveRecord::Migration[8.1]
  def change
    add_column :specifications, :assessment_groups, :hstore
    add_column :specification_criteria, :assessment_group, :string, null: true
  end
end
