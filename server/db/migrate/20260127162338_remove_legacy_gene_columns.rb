class RemoveLegacyGeneColumns < ActiveRecord::Migration[8.0]
  def change
    drop_view :gene_browse_table_rows, materialized: true
    remove_column :genes, :name
    remove_column :genes, :description
    remove_column :genes, :official_name
    remove_column :genes, :clinical_description
    remove_column :genes, :flagged
    remove_column :genes, :deleted
    remove_column :genes, :deleted_at
  end
end
