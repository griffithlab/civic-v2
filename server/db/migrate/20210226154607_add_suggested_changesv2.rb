class AddSuggestedChangesv2 < ActiveRecord::Migration[6.1]
  def change
    create_table :v2_suggested_changes do |t|
      t.references :subject, polymorphic: true
      t.text :status, null: false, default: 'new'
      t.text :field_name, null: false
      t.jsonb :current_value, null: false
      t.jsonb :suggested_value, null: false
      t.timestamps
    end

    add_index :v2_suggested_changes, [ :subject_id, :subject_type ]
    add_index :v2_suggested_changes, :created_at
    add_index :v2_suggested_changes, :updated_at
    add_index :v2_suggested_changes, :status
    add_index :v2_suggested_changes, :field_name
  end
end
