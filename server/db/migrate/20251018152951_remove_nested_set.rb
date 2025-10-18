class RemoveNestedSet < ActiveRecord::Migration[8.0]
  def change
    remove_column :variant_types, :parent_id
    remove_column :variant_types, :lft
    remove_column :variant_types, :rgt
  end
end
