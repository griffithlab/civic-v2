class AddIndexesToRevisions < ActiveRecord::Migration[8.0]
  def change
    add_index :revisions, [ :revision_set_id, :status, :subject_type, :field_name ]
    add_index :revisions, :subject_type
  end
end
