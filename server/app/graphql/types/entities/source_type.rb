module Types::Entities
  class SourceType < Types::BaseObject
    field :id, Int, null: false
    field :name, String, null: false
    field :citation, String, null: false
    field :source_type, Types::SourceSourceType, null: false
    field :asco_abstract_id, Int, null: true
    field :source_url, String, null: false
    field :publication_year, Int, null: false
    field :publication_month, Int, null: false
    field :publication_day, Int, null: true
    field :journal, String, null: false
    field :full_journal_title, String, null: false
    field :status, Types::SourceStatusType, null: false
    field :clincal_trials, [Types::Entities::ClinicalTrialType], null: true

    def clinical_trials
      Loaders::RecordLoader.for(ClinicalTrial).load_many(object.clinical_trial_ids)
    end
  end
end
