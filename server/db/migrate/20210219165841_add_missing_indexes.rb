class AddMissingIndexes < ActiveRecord::Migration[6.1]
  def change
    add_index :diseases, :name
    add_index :drugs, :name
  end
end
