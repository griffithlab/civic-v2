class AddScoreColumn < ActiveRecord::Migration[8.1]
  def change
    add_column :specification_criteria, :point_value, :integer, null: true
  end
end
