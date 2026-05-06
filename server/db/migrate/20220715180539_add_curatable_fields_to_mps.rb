class AddCuratableFieldsToMps < ActiveRecord::Migration[6.1]
  def change
    add_column :molecular_profiles, :description, :text

    create_join_table :molecular_profiles, :sources do |t|
      t.index [ :molecular_profile_id, :source_id ], name: 'idx_mp_source_id'
      t.timestamps
    end

    add_foreign_key :molecular_profiles_sources, :molecular_profiles
    add_foreign_key :molecular_profiles_sources, :sources

    add_index :molecular_profiles, :description
  end
end
