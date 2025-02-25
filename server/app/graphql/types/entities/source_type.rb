module Types::Entities
  class SourceType < Types::BaseObject
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::Commentable

    field :id, Int, null: false
    field :name, String, null: false
    field :title, String, null: true
    field :citation, String, null: true
    field :citation_id, String, null: false
    field :source_type, Types::SourceSourceType, null: false
    field :asco_abstract_id, Int, null: true
    field :source_url, String, null: true
    field :publication_year, Int, null: true
    field :publication_month, Int, null: true
    field :publication_day, Int, null: true
    field :journal, String, null: true
    field :full_journal_title, String, null: true
    field :clinical_trials, [ Types::Entities::ClinicalTrialType ], null: true
    field :abstract, String, null: true
    field :publication_date, String, null: true
    field :pmc_id, String, null: true
    field :author_string, String, null: true
    field :display_type, String, null: false
    field :open_access, Boolean, null: false
    field :fully_curated, Boolean, null: false
    field :retracted, Boolean, null: false
    field :retraction_nature, String, null: true
    field :retraction_date, GraphQL::Types::ISO8601DateTime, null: true
    field :retraction_reasons, String, null: true
    field :deprecated, Boolean, null: false

    def deprecated
      object&.retraction_nature == "Retraction"
    end

    def clinical_trials
      Loaders::AssociationLoader.for(Source, :clinical_trials).load(object)
    end

    def name
      if object.citation
        "#{object.source_type}: #{object.citation}"
      else
        "#{object.source_type}: #{object.id}"
      end
    end

    def link
      "/sources/#{object.id}"
    end

    def open_access
      !!object.open_access
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
      if object.source_type == "ASCO"
        "Journal of Clinical Oncology"
      else
        object.full_journal_title
      end
    end

    def author_string
      if object.source_type == "PubMed" || object.source_type == "ASH"
        Loaders::AssociationLoader.for(Source, :authors_sources).load(object).then do |authors_sources|
          Promise.all(authors_sources.map { |as| Loaders::AssociationLoader.for(AuthorsSource, :author).load(as) }).then do |authors|
            authors_sources.sort_by { |as| as.author_position }
              .map { |as| "#{as.author.fore_name} #{as.author.last_name}" }
              .reject { |a| a.blank? }
              .join(", ")
          end
        end
      elsif object.source_type == "ASCO"
        object.asco_presenter
      else
        raise StandardError.new("Unexpected source type  #{object.source_type}")
      end
    end
  end
end
