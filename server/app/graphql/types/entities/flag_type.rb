module Types::Entities
  class FlagType < Types::BaseObject
    implements Types::Interfaces::Commentable
    implements Types::Interfaces::EventOriginObject

    field :id, Int, null: false
    field :state, Types::FlagStateType, null: false
    field :flagging_user, Types::Entities::UserType, null: false
    field :resolving_user, Types::Entities::UserType, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :resolved_at, GraphQL::Types::ISO8601DateTime, null: true
    field :flaggable, Types::Interfaces::Flaggable, null: false
    field :open_comment, Types::Entities::CommentType, null: false
    field :resolution_comment, Types::Entities::CommentType, null: true

    def flagging_user
      Loaders::AssociationLoader.for(Flag, :flagging_user).load(object)
    end

    def resolving_user
      Loaders::AssociationLoader.for(Flag, :resolving_user).load(object)
    end

    def resolved_at
      resolution_event ? resolution_event.created_at : nil
    end

    def open_comment
      object.comments.first
    end

    def resolution_comment
      object.state == 'resolved' ? object.comments.last : nil
    end

    private
    def resolution_event
      Event.find_by(action: 'flag resolved', originating_object: object)
    end
  end
end
