class ClinvarSubmissionChanges < ActiveRecord::Migration[8.1]
  def change
    drop_table :clinvar_accessions

    remove_column :clinvar_batch_entries, :clinvar_accession
    add_column :approvals, :clinvar_accession, :text, null: true

    add_reference :clinvar_batch_entries, :approval
    add_column :clinvar_batch_entries, :approval_last_reviewed, :datetime, null: false

    add_column :clinvar_batch_submissions, :submission_id, :text, null: false
    add_column :clinvar_batch_submissions, :batch_name, :text, null: false

    add_index :approvals, :clinvar_accession

    add_index :clinvar_batch_entries, [ :assertion_id, :clinvar_batch_submission_id ], unique: true

    rename_column :clinvar_batch_entries, :errors, :submission_errors
  end
end
