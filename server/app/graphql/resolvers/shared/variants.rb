require "search_object/plugin/graphql"

class Resolvers::Shared::Variants < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  option(:name, type: GraphQL::Types::String, description: "Left anchored filtering for variant name and aliases.") do |scope, value|
    scope.left_joins(:variant_aliases)
      .where("variants.name ILIKE :query OR variant_aliases.name ILIKE :query", { query: "%#{value}%" })
  end

  option(:feature_id, type: GraphQL::Types::Int, description: "Feature that the variants are associated with.") do |scope, value|
    scope.where(feature_id: value)
  end

  option(:gene_id, type: GraphQL::Types::Int, description: "Feature that the variants are associated with, limited to only Gene type features.") do |scope, value|
    scope.joins(:feature).where(feature_id: value, feature: { feature_instance_type: "Features::Gene" })
  end

  option(:factor_id, type: GraphQL::Types::Int, description: "Feature that the variants are associated with, limited to only Factor type features.") do |scope, value|
    scope.joins(:feature).where(feature_id: value, feature: { feature_instance_type: "Features::Factor" })
  end

  option(:fusion_id, type: GraphQL::Types::Int, description: "Feature that the variants are associated with, limited to only Fusion type features.") do |scope, value|
    scope.joins(:feature).where(feature_id: value, feature: { feature_instance_type: "Features::Fusion" })
  end

  option(:region_id, type: GraphQL::Types::Int, description: "Feature that the variants are associated with, limited to only Region type features.") do |scope, value|
    scope.joins(:feature).where(feature_id: value, feature: { feature_instance_type: "Features::Region" })
  end

  option(:variant_type_ids, type: [ GraphQL::Types::Int ], description: "A list of CIViC identifiers for variant types") do  |scope, value|
    if value.size > 0
      scope.joins(:variant_types).where(variant_types: { id: value })
    else
      scope
    end
  end

  option(:allele_registry_id, type: GraphQL::Types::String, description: "Find a CIViC Variant based on its ClinGen Allele Registry ID") do |scope, value|
    scope.where(allele_registry_id: value)
  end

  option(:has_no_variant_type, type: GraphQL::Types::Boolean, description: "Return Variants lacking an assigned VariantType") do |scope, value|
    if value
      scope.left_joins(:variant_types).where(variant_types: { id: nil })
    else
      scope
    end
  end

  option :sort_by, type: Types::VariantMenuSortType do |scope, value|
    case value.column
    when "NAME"
      scope.reorder("variants.name #{value.direction}")
    when "COORDINATE_START"
      scope.reorder("variants.start #{value.direction} NULLS LAST")
    when "COORDINATE_END"
      scope.reorder("variants.stop #{value.direction} NULLS LAST")
    end
  end

  option(:category, type: Types::VariantCategories) do |scope, value|
    if value
      scope.where(type: value)
    else
      scope
    end
  end
end
