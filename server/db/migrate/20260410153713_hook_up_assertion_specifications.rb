class HookUpAssertionSpecifications < ActiveRecord::Migration[8.1]
  def change
    create_table :assertions_specification_criteria do |t|
      t.references :assertion, null: false, foreign_key: true
      t.references :specification_criterium,
        null: false,
        foreign_key: { to_table: :specification_criteria }
      t.timestamps

      t.index [ :assertion_id, :specification_criterium_id ], unique: true
    end
  end
end
