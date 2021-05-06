module Types::Revisions
  class RevisionType < Types::BaseObject
    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :status, Types::Revisions::RevisionStatus, null: false
    field :current_value, GraphQL::Types::JSON, null: false
    field :suggested_value, GraphQL::Types::JSON, null: false
    field :field_name, String, null: false
    field :comments, [Types::Entities::CommentType], null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :revisionset_id, String, null: false
    field :linkout_data, Types::Revisions::LinkoutData, null: false
    field :revisor, Types::Entities::UserType, null: false
    field :creation_event, Types::Entities::EventType, null: true

    def comments
      Loaders::AssociationLoader.for(Revision, :comments).load(object)
    end

    def linkout_data
      Types::Revisions::LinkoutData.from_revision(object)
    end

    def creation_event
      Loaders::AssociationLoader.for(Revision, :creation_event).load(object)
    end

    def revisor
      Loaders::AssociationLoader.for(Revision, :creation_event).load(object).then do |event|
        Loaders::AssociationLoader.for(Event, :originating_user).load(event)
      end
    end
  end
end
