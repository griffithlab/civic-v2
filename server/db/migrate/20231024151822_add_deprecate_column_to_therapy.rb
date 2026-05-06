class AddDeprecateColumnToTherapy < ActiveRecord::Migration[6.1]
  def change
    add_column :therapies, :deprecated, :boolean, null: false, default: false, index: true
  end
end
