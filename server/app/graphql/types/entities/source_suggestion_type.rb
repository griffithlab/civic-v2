module Types::Entities
  class SourceSuggestionType < Types::BaseObject
    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject

    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :source, Types::Entities::SourceType, null: true #null: true to accommodate a single source suggestion (46) with a deleted source
    field :user, Types::Entities::UserType, null: true #null: true to accommodate source suggestions where the underlying user was deleted (merged?)
    field :gene, Types::Entities::GeneType, null: true
    field :disease, Types::Entities::DiseaseType, null: true
    field :variant, Types::Entities::VariantType, null: true
    field :initial_comment, String, null: false
    field :status, Types::SourceSuggestionStatusType, null: false
    field :link, String, null: false
    field :reason, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false

    def source
      Loaders::AssociationLoader.for(SourceSuggestion, :source).load(object)
    end

    def user
      Loaders::AssociationLoader.for(SourceSuggestion, :user).load(object)
    end

    def gene
      Loaders::AssociationLoader.for(SourceSuggestion, :gene).load(object)
    end

    def variant
      Loaders::AssociationLoader.for(SourceSuggestion, :variant).load(object)
    end

    def disease
      Loaders::AssociationLoader.for(SourceSuggestion, :disease).load(object)
    end

    def name
      "SSID#{object.id}"
    end

    def link
      "/sources/#{object.source_id}"
    end
  end
end
