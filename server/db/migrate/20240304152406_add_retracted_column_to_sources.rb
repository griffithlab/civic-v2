class AddRetractedColumnToSources < ActiveRecord::Migration[7.1]
  def change
    add_column :sources, :retracted, :boolean, null: false, default: false
    add_column :sources, :retraction_nature, :string, null: true
    add_column :sources, :retraction_date, :datetime, null: true
    add_column :sources, :retraction_reasons, :string, null: true
    add_index :sources, :retracted
  end
end
