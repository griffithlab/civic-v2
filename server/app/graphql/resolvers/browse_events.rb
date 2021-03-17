require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::BrowseEvents < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::EventType.connection_type, null: false

  scope { Event.preload(:originating_user, :subject) }

  option(:event_type, type: Types::Entities::Event::EventActionType) { |scope, value| scope.where(action: value) }
  option(:originating_user_id, type: Int) { |scope, value| scope.where(originating_user_id: value) }
  option(:organization_id, type: Int) { |scope, value| scope.where(organization_id: value) }
  option(:subject, type: Types::SubscribableInput) { |scope, value| scope.where(subject: value) }
end
