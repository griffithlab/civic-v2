class RenameChangesetId < ActiveRecord::Migration[6.1]
  def change
    rename_column :revisions, :changeset_id, :revisionset_id
  end
end
