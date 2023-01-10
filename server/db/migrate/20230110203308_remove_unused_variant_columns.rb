class RemoveUnusedVariantColumns < ActiveRecord::Migration[6.1]
  def change
    remove_column :variants, :description
    remove_column :source_suggestions, :variant_id
    remove_column :source_suggestions, :gene_id
    remove_column :source_suggestions, :gene_name
    remove_column :source_suggestions, :disease_name
    remove_column :source_suggestions, :variant_name
    drop_table :sources_variants
  end
end
