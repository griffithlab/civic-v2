class AddDepreactedToSources < ActiveRecord::Migration[8.0]
  def change
    add_column :sources, :deprecated, :boolean, null: false, default: false
    add_index :sources, :deprecated
  end
end
