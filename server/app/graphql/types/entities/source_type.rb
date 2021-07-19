module Types::Entities
  class SourceType < Types::BaseObject
    implements Types::Interfaces::EventSubject

    field :id, Int, null: false
    field :name, String, null: false
    field :title, String, null: true
    field :citation, String, null: false
    field :citation_id, Int, null: false
    field :source_type, Types::SourceSourceType, null: false
    field :asco_abstract_id, Int, null: true
    field :source_url, String, null: false
    field :publication_year, Int, null: false
    field :publication_month, Int, null: false
    field :publication_day, Int, null: true
    field :journal, String, null: false
    field :full_journal_title, String, null: true
    field :status, Types::SourceStatusType, null: false
    field :clinical_trials, [Types::Entities::ClinicalTrialType], null: true
    field :abstract, String, null: true
    field :publication_date, String, null: true
    field :pmc_id, String, null: true
    field :author_string, String, null: true
    field :display_type, String, null: false

    def clinical_trials
      Loaders::AssociationLoader.for(Source, :clinical_trials).load(object)
    end

    def publication_date
      if object.publication_year
        if object.publication_month
          if object.publication_day
            "#{object.publication_year}-#{object.publication_month}-#{object.publication_day}"
          else
            "#{object.publication_year}-#{object.publication_month}"
          end
        else
          "#{object.publication_year}"
        end
      end
    end

    def full_journal_title
      if object.source_type == 'ASCO'
        'Journal of Clinical Oncology'
      else
        object.full_journal_title
      end
    end
  end
end
