class PortAssertionsToMp < ActiveRecord::Migration[6.1]
  def change
    create_join_table :molecular_profiles, :assertions do |t|
      t.index [ :molecular_profile_id, :assertion_id ], name: 'idx_molecular_profile_assertion_id'
    end

    add_foreign_key :assertions_molecular_profiles, :molecular_profiles
    add_foreign_key :assertions_molecular_profiles, :assertions

    add_reference :assertions, :molecular_profile, index: true
  end
end
