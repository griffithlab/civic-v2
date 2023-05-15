module Types::Interfaces
  module ActivityInterface
    include Types::BaseInterface

    description 'An activity done by a curator or editor'

    field :id, Int, null: false
    field :name, String, null: false
    field :events, [Types::Entities::EventType], null: false
    field :subject, Types::Interfaces::EventSubject, null: false
    field :user, Types::Entities::UserType, null: false
    field :organization, Types::Entities::OrganizationType, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false

    def user
      Loaders::AssociationLoader.for(Activity, :user).load(object)
    end

    def organization
      Loaders::AssociationLoader.for(Activity, :organization).load(object)
    end

    def events
      Loaders::AssociationLoader.for(Activity, :events).load(object)
    end

    def subject
      Loaders::AssociationLoader.for(Activity, :subject).load(object)
    end

    orphan_types Types::Activities::FlagEntityActivityType, Types::Activities::ResolveFlagActivityType

    definition_methods do
      def resolve_type(object, context)
        case object
        when FlagEntityActivity
          Types::Activities::FlagEntityActivityType
        when ResolveFlagActivity
          Types::Activities::ResolveFlagActivityType
        else
          raise "Unexpected Activity type #{object.class}"
        end
      end
    end
  end
end
