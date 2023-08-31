class SourceStatus < ActiveRecord::Migration[6.1]
  def change
    remove_column :sources, :status
    add_column :sources, :fully_curated, :boolean, null: false, default: false
  end
end
