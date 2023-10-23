class MaterializedViews::SourceBrowseTableRow < MaterializedViews::MaterializedView
  has_and_belongs_to_many :clinical_trials, join_table: :clinical_trials_sources, foreign_key: :source_id

  enum source_type: ['PubMed', 'ASCO', 'ASH']
end
