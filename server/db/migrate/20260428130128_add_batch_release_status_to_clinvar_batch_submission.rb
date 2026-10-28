class AddBatchReleaseStatusToClinvarBatchSubmission < ActiveRecord::Migration[8.1]
  def change
    add_column :clinvar_batch_submissions, :release_status, :string, null: true
  end
end
