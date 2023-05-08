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
    field :creation_comment, Types::Entities::CommentType, null: true
    field :resolution_comment, Types::Entities::CommentType, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :resolved_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :revision_set_id, Int, null: false
    field :linkout_data, Types::Revisions::LinkoutData, null: false
    field :revisor, Types::Entities::UserType, null: true
    field :resolver, Types::Entities::UserType, null: true
    field :creation_event, Types::Entities::EventType, null: true
    field :resolving_event, Types::Entities::EventType, null: true
    field :subject, Types::Interfaces::EventSubject, null: false

    def comments
      Loaders::AssociationLoader.for(Revision, :comments).load(object)
    end

    def linkout_data
      Types::Revisions::LinkoutData.from_revision(object)
    end

    def revision_set_id
      Loaders::AssociationLoader.for(Revision, :revision_set).load(object).then do |revision_set|
        revision_set.id
      end
    end

    def creation_event
      Loaders::AssociationLoader.for(Revision, :creation_event).load(object)
    end

    def resolving_event
      Loaders::AssociationLoader.for(Revision, :resolving_event).load(object)
    end

    def revisor
      Loaders::AssociationLoader.for(Revision, :creation_event).load(object).then do |event|
        if !event.nil?
          Loaders::AssociationLoader.for(Event, :originating_user).load(event)
        end
      end
    end

    def resolved_at
      Loaders::AssociationLoader.for(Revision, :resolving_event).load(object).then do |event|
        if !event.nil?
          event.created_at
        end
      end
    end

    def creation_comment
      Loaders::AssociationLoader.for(Revision, :comments).load(object).then do |comments|
        comments.first
      end
    end

    def resolution_comment
      Loaders::AssociationLoader.for(Revision, :comments).load(object).then do |comments|
        if (comments.count > 1)
            comments.last
        else
          nil
        end
      end
    end

    def resolver
      Loaders::AssociationLoader.for(Revision, :resolving_event).load(object).then do |event|
        if !event.nil?
          Loaders::AssociationLoader.for(Event, :originating_user).load(event)
        end
      end
    end
  end
end
