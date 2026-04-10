class HookUpAssertionSpecifications < ActiveRecord::Migration[8.1]
  def change
    create_table :assertions_specification_criteria do |t|
      t.references :assertion, null: false
      t.references :specification_criterium, null: false
      t.timestamps
    end
  end
end
