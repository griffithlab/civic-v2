class AddDeprecatedColumnToVariantsAndMps < ActiveRecord::Migration[6.1]
  def change
    add_column :variants, :deprecated, :boolean, null: false, index: true, default: false
    add_column :variants, :deprecation_reason, :integer

    add_column :molecular_profiles, :deprecated, :boolean, null: false, index: true, default: false
  end
end
