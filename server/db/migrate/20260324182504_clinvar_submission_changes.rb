class ClinvarSubmissionChanges < ActiveRecord::Migration[8.1]
  def change
    drop_table :clinvar_accessions

    remove_column :clinvar_batch_entries, :clinvar_accession
    add_column :approvals, :clinvar_accession, :text, null: true

    add_reference :clinvar_batch_entries, :approvals
    add_column :clinvar_batch_entries, :approval_last_reviewed, :datetime, null: false

    add_column :clinvar_batch_submissions, :submission_id, :text, null: false

    add_index :approvals, :clinvar_accession
  end
end
