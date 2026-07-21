require "search_object/plugin/graphql"

class Resolvers::NewsItems < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::NewsItemType.connection_type, null: false

  description "List published news items."

  scope do
    NewsItem.where(published: true)
      .with_rich_text_content_and_embeds
      .order(published_at: :desc)
  end
end
