class AddEidCountToAssertions < ActiveRecord::Migration[6.1]
  def change
    add_column :assertions, :evidence_items_count, :integer

    Assertion.find_each do |assertion|
      assertion.evidence_items_count = assertion.evidence_items.count
      assertion.save(validate: false)
    end
  end

  def down
    remove_column :assertions, :evidence_items_count
  end
end
