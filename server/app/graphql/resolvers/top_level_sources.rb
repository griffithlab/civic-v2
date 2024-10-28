require 'search_object/plugin/graphql'

class Resolvers::TopLevelSources < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::SourceType.connection_type, null: false

  description 'List and filter genes.'

  scope do
    Source
      .order('sources.citation_id ASC')
      .where("sources.retraction_nature != 'Retraction'")
      .or(Source.where(retracted: false))
      .distinct
  end

  option(:citation_id, type: [GraphQL::Types::String], description: 'List of citation IDs to return results for') do |scope, value|
    scope.where('sources.citation_id IN (?)', value)
  end
end
