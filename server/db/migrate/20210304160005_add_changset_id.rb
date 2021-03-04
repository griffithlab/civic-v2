class AddChangsetId < ActiveRecord::Migration[6.1]
  def change
    add_column :v2_suggested_changes, :changeset_id, :uuid, null: false
    add_index :v2_suggested_changes, :changeset_id
  end
end
