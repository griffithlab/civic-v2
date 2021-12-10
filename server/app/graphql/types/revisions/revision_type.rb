module Types::Revisions
  class RevisionType < Types::BaseObject
    include Types::Shared::OrderedList
    connection_type_class Types::Connections::RevisionsConnection

    implements Types::Interfaces::EventSubject
    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :status, Types::Revisions::RevisionStatus, null: false
    field :current_value, GraphQL::Types::JSON, null: true
    field :suggested_value, GraphQL::Types::JSON, null: true
    field :field_name, String, null: false
    field :comments, [Types::Entities::CommentType], null: false
    field :creation_comment, Types::Entities::CommentType, null: false
    field :resolution_comment, Types::Entities::CommentType, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :resolved_at, GraphQL::Types::ISO8601DateTime, null: true
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :revisionset_id, String, null: false
    field :linkout_data, Types::Revisions::LinkoutData, null: false
    field :revisor, Types::Entities::UserType, null: false
    field :resolver, Types::Entities::UserType, null: true
    field :creation_event, Types::Entities::EventType, null: true
    field :resolving_event, Types::Entities::EventType, null: true

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

    def object_list_scope
      -> (scope) { scope.where(subject_id: object.subject_id, subject_type: object.subject_type) }
    end
  end

end
