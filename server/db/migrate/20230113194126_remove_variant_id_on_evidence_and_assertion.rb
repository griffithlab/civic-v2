class RemoveVariantIdOnEvidenceAndAssertion < ActiveRecord::Migration[6.1]
  def up
    remove_column :assertions, :variant_id
    remove_column :assertions, :gene_id
    remove_foreign_key :evidence_items, :variants
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
