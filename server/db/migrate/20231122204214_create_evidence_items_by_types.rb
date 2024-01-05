class CreateEvidenceItemsByTypes < ActiveRecord::Migration[6.1]
  def change
    create_view :evidence_items_by_types
  end
end
