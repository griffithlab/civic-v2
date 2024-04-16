class AddFlaggedColumnToFeatures < ActiveRecord::Migration[6.1]
  def change
    add_column :features, :flagged, :boolean, null: false, index: true, default: false
  end
end
