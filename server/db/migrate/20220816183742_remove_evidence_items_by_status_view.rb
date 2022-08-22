class RemoveEvidenceItemsByStatusView < ActiveRecord::Migration[6.1]
  def change
    drop_view :evidence_items_by_statuses
  end
end
