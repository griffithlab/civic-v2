class AddRevisionSets < ActiveRecord::Migration[6.1]
  def up
    create_table :revision_sets do |t|
      t.timestamps
    end

    add_column :revisions, :revision_set_id, :integer
    add_foreign_key :revisions, :revision_sets

    Revision.all.group_by(&:revisionset_id).each do |set_id, revisions|
      set = RevisionSet.create()
      set.revisions = revisions
      set.save!()
    end

    change_column_null :revisions, :revisionset_id, true
  end

  def down
    remove_column :revisions, :revision_set_id
    drop_table :revision_sets
  end
end
