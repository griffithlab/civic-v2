require 'search_object/plugin/graphql'

class Resolvers::TopLevelVariants < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Interfaces::VariantInterface.connection_type, null: false

  description 'List and filter variants.'

  scope { Variant.where(deprecated: false).order('variants.name ASC').distinct }

  option(:name, type: GraphQL::Types::String, description: 'Left anchored filtering for variant name and aliases.') do |scope, value|
    scope.left_joins(:variant_aliases)
      .where('variants.name ILIKE :query OR variant_aliases.name ILIKE :query', { query: "%#{value}%" })
  end

  option(:feature_id, type: GraphQL::Types::Int, description: 'Feature that the variants are associated with.') do |scope, value|
    scope.where(feature_id: value)
  end

  option(:variant_type_ids, type: [GraphQL::Types::Int], description: 'A list of CIViC identifiers for variant types') do  |scope, value|
    if value.size > 0
      scope.joins(:variant_types).where(variant_types: { id: value })
    else
      scope
    end
  end

  option(:allele_registry_id, type: GraphQL::Types::String, description: 'Find a CIViC Variant based on its ClinGen Allele Registry ID') do |scope, value|
    scope.where(allele_registry_id: value)
  end

  option(:has_no_variant_type, type: GraphQL::Types::Boolean, description: "Return Variants lacking an assigned VariantType") do |scope, value|
    if(value)
      scope.left_joins(:variant_types).where(variant_types: { id: nil })
    else
      scope
    end
  end

  option :sort_by, type: Types::VariantMenuSortType do |scope, value|
    case value.column
    when 'NAME'
      scope.reorder("variants.name #{value.direction}")
    when 'COORDINATE_START'
      scope.reorder("variants.start #{value.direction} NULLS LAST")
    when 'COORDINATE_END'
      scope.reorder("variants.stop #{value.direction} NULLS LAST")
    end
  end
end
