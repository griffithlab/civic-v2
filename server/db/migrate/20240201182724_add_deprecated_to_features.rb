class AddDeprecatedToFeatures < ActiveRecord::Migration[6.1]
  def change
    add_column :features, :deprecated, :boolean, null: false, index: true, default: false
    add_column :features, :deprecation_reason, :integer
  end
end
