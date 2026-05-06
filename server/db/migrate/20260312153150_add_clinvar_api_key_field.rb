class AddClinvarApiKeyField < ActiveRecord::Migration[8.0]
  def change
    add_column :organizations, :clinvar_api_key, :text, null: true
  end
end
