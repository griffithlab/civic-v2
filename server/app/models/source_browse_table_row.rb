class SourceBrowseTableRow < ApplicationRecord
  has_and_belongs_to_many :clinical_trials, join_table: :clinical_trials_sources, foreign_key: :source_id

  enum source_type: ['PubMed', 'ASCO']

  self.primary_key = :id

  def self.refresh
    Scenic.database.refresh_materialized_view(table_name, concurrently: true, cascade: false)
  end

  def readonly?
    true
  end
end
