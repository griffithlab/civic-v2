class AddDeprecationReasonColumnToMps < ActiveRecord::Migration[6.1]
  def change
    add_column :molecular_profiles, :deprecation_reason, :integer
  end
end
