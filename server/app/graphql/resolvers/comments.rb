require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::Comments < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::CommentType.connection_type, null: false

  description 'List and filter comments.'

  scope { object.comments.order('comments.created_at DESC') }

  option(:originating_user_id, type: Int, description: 'Limit to comments by a certain user') do |scope, value|
    scope.where(user_id: value)
  end

  option(:sort_by, type: Types::DateSortType, description: 'Sort order for the comments. Defaults to most recent.') do |scope, value|
    scope.reorder("comments.#{value.column} #{value.direction}")
  end
end
