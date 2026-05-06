class AddMissingEventIndexes < ActiveRecord::Migration[6.1]
  def change
    add_index :events, :action
    add_index :events, :activity_id
  end
end
