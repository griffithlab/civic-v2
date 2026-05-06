class AddDeprecateColumnToDiseases < ActiveRecord::Migration[6.1]
  def change
    add_column :diseases, :deprecated, :boolean, null: false, default: false, index: true
  end
end
