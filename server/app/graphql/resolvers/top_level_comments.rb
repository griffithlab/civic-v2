class Resolvers::TopLevelComments < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::CommentType.connection_type, null: false

  scope { Comment.order('comments.created_at DESC') }

  option(:subject, type: Types::Commentable::CommentableInput, description: 'Limit to comments on a certain subject.') do |scope, value|
    scope.where(commentable: value)
  end
end
