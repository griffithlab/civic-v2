require 'search_object/plugin/graphql'

class Resolvers::TopLevelVariantGroups < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::VariantGroupType.connection_type, null: false

  description 'List and filter variant groups.'

  scope { VariantGroup.order('variant_groups.name ASC').distinct }

  option(:gene_id, type: GraphQL::Types::Int, description: 'Gene that variant groups are associated with.') do |scope, value|
    scope.where(gene_id: value)
  end

end
