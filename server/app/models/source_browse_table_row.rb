class SourceBrowseTableRow < ApplicationRecord
  enum source_type: ['PubMed', 'ASCO']

  self.primary_key = :id

  def self.refresh
    Scenic.database.refresh_materialized_view(table_name, concurrently: true, cascade: false)
  end

  def readonly?
    true
  end
end
