class IntroduceFeatures < ActiveRecord::Migration[6.1]
  def change
    create_table :features do |t|
      t.text :name, null: false
      t.text :description, null: true
      t.timestamps
      t.references :feature_instance, polymorphic: true, null: false, unique: true
    end

    create_table :feature_aliases do |t|
      t.text :name, null: false, index: true
      t.timestamps
    end

    create_table :feature_aliases_features do |t|
      t.references :feature, null: false, index: true, foreign_key: true
      t.references :feature_alias, null: false, index: true, foreign_key: true
    end

    # add_foreign_key :features_feature_aliases, :features
    # add_foreign_key :features_feature_aliases, :feature_aliases
    add_index :feature_aliases_features, [ :feature_id, :feature_alias_id ], name: 'idx_feature_alias'
    # add_index :features_feature_aliases, :feature_alias_id, name: 'idx_feature_alias_id'

    create_table :features_sources do |t|
      t.references :source, null: false, index: true, foreign_key: true
      t.references :feature, null: false, index: true, foreign_key: true
    end

    add_reference :variants, :feature, index: true, foreign_key: true
  end
end
