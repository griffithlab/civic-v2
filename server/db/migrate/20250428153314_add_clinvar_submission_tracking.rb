class AddClinvarSubmissionTracking < ActiveRecord::Migration[8.0]
  def change
    create_table :clinvar_api_keys do |t|
      t.text :api_key, null: false, index: { unique: true }
      t.integer :star_rating
      t.text :note
      t.references :organization, null: false, foreign_key: true
      t.timestamps
    end

    create_table :clinvar_batch_submissions do |t|
      t.references :clinvar_api_key, null: false, foreign_key: true
      t.references :organization, null: false, foreign_key: true
      t.datetime :submitted_at
      t.string :status, index: true
      t.timestamps
    end

    create_table :clinvar_submission_responses do |t|
      t.references :clinvar_batch_submission, null: false, foreign_key: true, index: { name: 'index_clinvar_responses_on_batch_submission_id' }
      t.jsonb :api_response
      t.datetime :queried_at
      t.string :status, index: true
      t.timestamps
    end

    create_table :clinvar_accessions do |t|
      t.string :clinvar_accession, index: { unique: true }
      t.references :assertion, null: false, foreign_key: true
      t.references :organization, null: false, foreign_key: true
      t.integer :clinvar_star_rating
      t.timestamps
    end

    create_table :clinvar_batch_entries do |t|
      t.references :clinvar_batch_submission, null: false, foreign_key: true, index: { name: 'index_clinvar_entries_on_batch_submission_id' } # Custom index name for length
      t.references :assertion, null: false, foreign_key: true
      t.string :clinvar_accession, index: true
      t.string :status, index: true
      t.jsonb :errors
      t.timestamps
    end
  end
end
