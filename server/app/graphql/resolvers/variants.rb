require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::Variants < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Interfaces::VariantInterface.connection_type, null: false

  description 'List and filter variants.'

  scope { object.variants.where(deprecated: false).order('variants.name ASC').distinct }

  option(:name, type: GraphQL::Types::String, description: 'Left anchored filtering for variant name and aliases.') do |scope, value|
    scope.left_joins(:variant_aliases)
      .where('variants.name ILIKE :query OR variant_aliases.name ILIKE :query', { query: "%#{value}%" })
  end
end
