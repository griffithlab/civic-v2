class CreateEvidenceItemsByStatuses < ActiveRecord::Migration[6.1]
  def change
    create_view :evidence_items_by_statuses
  end
end
