module Types::Entities
  class SourceSuggestionType < Types::BaseObject
    connection_type_class(Types::Connections::BrowseTableConnection)

    field :id, Int, null: false
    field :source, Types::Entities::SourceType, null: false
    field :user, Types::Entities::UserType, null: false
    field :gene_name, String, null: true
    field :disease_name, String, null: true
    field :variant_name, String, null: true
    field :initial_comment, String, null: false

    def source
      Loaders::AssociationLoader.for(SourceSuggestion, :source).load(object)
    end

    def user
      Loaders::AssociationLoader.for(SourceSuggestion, :user).load(object)
    end

    #TODO status enum once we decide on new lifecycle
  end
end
