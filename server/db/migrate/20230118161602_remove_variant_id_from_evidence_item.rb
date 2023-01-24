class RemoveVariantIdFromEvidenceItem < ActiveRecord::Migration[6.1]
  def up
    remove_column :evidence_items, :variant_id
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
