module Types::BrowseTables
  class BrowseSourceType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :source_type, Types::SourceSourceType, null: false
    field :citation_id, Int, null: false
    field :authors, [String], null: false
    field :publication_year, Int, null: true
    field :journal, String, null: true
    field :name, String, null: true
    field :evidence_item_count, Int, null: false
    field :source_suggestion_count, Int, null: false
    field :citation, String, null: false
    field :display_type, String, null: false
    field :clinical_trials, [Types::Entities::ClinicalTrialType], null: false
    field :source_url, String, null: false
    field :link, String, null: false
    field :open_access, Boolean, null: false
    field :retraction_nature, String, null: true
    field :deprecated, Boolean, null: false

    def deprecated
      object&.retraction_nature == 'Retraction'
    end

    def source_url
      Source.url_for(source: object)
    end

    def display_type
      if object.source_type == 'PUBMED'
        'PubMed'
      else
        object.source_type
      end
    end

    def open_access
      !!object.open_access
    end

    def authors
      if object.authors.present?
        object.authors
      elsif object.asco_presenter.present?
        Array(object.asco_presenter)
      else
        []
      end
    end

    def name
      object.title
    end

    def clinical_trials
      Loaders::AssociationLoader.for(SourceBrowseTableRow, :clinical_trials).load(object)
    end

    def link
      Rails.application.routes.url_helpers.url_for("/sources/#{object.id}")
    end
  end
end
