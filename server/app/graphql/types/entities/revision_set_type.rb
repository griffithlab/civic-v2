module Types::Entities
  class RevisionSetType < Types::BaseObject
    implements Types::Interfaces::EventSubject

    field :id, Int, null: false
    field :name, String, null: false
    field :display_name, String, null: false
    field :revisions, [ Types::Revisions::RevisionType ], null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false

    def revisions
      Loaders::AssociationLoader.for(RevisionSet, :revisions).load(object)
    end
  end
end
