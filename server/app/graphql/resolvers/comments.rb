require "search_object"
require "search_object/plugin/graphql"

module Resolvers
  class Comments < GraphQL::Schema::Resolver
    include SearchObject.module(:graphql)

    type Types::Entities::CommentType.connection_type, null: false

    description "List and filter comments."

    scope { object.comments.order("comments.created_at DESC") }

    option(:originating_user_id, type: Int, description: "Limit to comments by a certain user") do |scope, value|
      scope.where(user_id: value)
    end

    option(:sort_by, type: Types::DateSortType, description: "Sort order for the comments. Defaults to most recent.") do |scope, value|
      scope.reorder("comments.#{value.column} #{value.direction}")
    end

    option(:mentioned_user_id, type: Int, description: "Limit to comments that mention a certain user") do |scope, value|
      scope.joins(:user_mentions).where(user_mentions: { user_id: value })
    end

    option(:mentioned_role, type: Types::Entities::UserRoleType, description: "Limit to comments that mention a certain user role") do |scope, value|
      scope.joins(:role_mentions).where(role_mentions: { role: User.roles[value] })
    end

    option(:mentioned_entity, type: Types::Commentable::TaggableEntityInputType, description: "Limit to comments that mention a certain entity") do |scope, value|
      scope.joins(:entity_mentions).where(entity_mentions: { entity: value })
    end
  end
end
