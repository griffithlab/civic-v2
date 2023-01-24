class RenameAssertionColumns < ActiveRecord::Migration[6.1]
  def up
    rename_column :assertions, :evidence_type, :assertion_type
    rename_column :assertions, :evidence_direction, :assertion_direction

    Revision.where(subject_type: 'Assertion', field_name: 'evidence_direction').find_each do |r|
      r.field_name = 'assertion_direction'
      r.save!
    end

    Revision.where(subject_type: 'Assertion', field_name: 'evidence_type').find_each do |r|
      r.field_name = 'assertion_type'
      r.save!
    end
  end

  def down
    rename_column :assertions, :assertion_type, :evidence_type
    rename_column :assertions, :assertion_direction, :evidence_direction

    Revision.where(subject_type: 'Assertion', field_name: 'assertion_direction').find_each do |r|
      r.field_name = 'evidence_direction'
      r.save!
    end

    Revision.where(subject_type: 'Assertion', field_name: 'assertion_type').find_each do |r|
      r.field_name = 'evidence_type'
      r.save!
    end
  end
end
