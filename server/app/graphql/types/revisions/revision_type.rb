module Types::Revisions
  class RevisionType < Types::BaseObject
    connection_type_class Types::Connections::RevisionsConnection

    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject
    implements Types::Interfaces::Commentable

    field :id, Int, null: false
    field :status, Types::Revisions::RevisionStatus, null: false
    field :current_value, GraphQL::Types::JSON, null: true
    field :suggested_value, GraphQL::Types::JSON, null: true
    field :field_name, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :revision_set_id, Int, null: false
    field :linkout_data, Types::Revisions::LinkoutData, null: false
    field :creation_activity, Types::Entities::EventType, null: true
    field :resolving_activity, Types::Entities::EventType, null: true
    field :subject, Types::Interfaces::EventSubject, null: false

    def comments
      Loaders::AssociationLoader.for(Revision, :comments).load(object)
    end

    def linkout_data
      Types::Revisions::LinkoutData.from_revision(object)
    end

    def creation_event
      Loaders::AssociationLoader.for(Revision, :creation_event).load(object)
    end

    def resolving_event
      Loaders::AssociationLoader.for(Revision, :resolving_event).load(object)
    end
  end
end
