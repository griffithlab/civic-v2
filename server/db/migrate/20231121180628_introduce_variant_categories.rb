class IntroduceVariantCategories < ActiveRecord::Migration[6.1]
  def change

    create_table :variant_categories do |t|
      t.text :name, null: false
      t.text :description, null: true
      t.timestamps
      t.references :category_instance, polymorphic: true, null: false
    end

    create_table :variant_category_aliases do |t|
      t.text :name, null: false, index: true
      t.timestamps
    end

    create_table :variant_categories_category_aliases do |t|
      t.integer :variant_category_id, null: false
      t.integer :variant_category_alias_id, null: false
    end

    add_foreign_key :variant_categories_category_aliases, :variant_categories
    add_foreign_key :variant_categories_category_aliases, :variant_category_aliases
    add_index :variant_categories_category_aliases, [:variant_category_id, :variant_category_alias_id], name: 'idx_compound_variant_category_alias'
    add_index :variant_categories_category_aliases, :variant_category_alias_id, name: 'idx_variant_category_alias_id'

    create_table :sources_variant_categories do |t|
      t.references :source, null: false, index: true, foreign_key: true
      t.references :variant_category, null: false, index: true, foreign_key: true
    end

    add_reference :variants, :variant_category, index: true, foreign_key: true
  end
end
