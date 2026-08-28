class AddIsPreprintColumnToSources < ActiveRecord::Migration[8.1]
  def change
    add_column :sources, :is_preprint, :boolean, null: false, default: false
  end
end
