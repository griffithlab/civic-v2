require "search_object"
require "search_object/plugin/graphql"

class Resolvers::TopLevelVariantTypes < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseVariantTypeType.connection_type, null: false

  description "List and filter Variant Types from the Sequence Ontology."

  scope do
    VariantType.select("variant_types.id, variant_types.display_name, variant_types.soid, count(distinct(variants.id)) as variant_count")
      .left_outer_joins(:variants)
      .group("variant_types.id, variant_types.display_name, variant_types.soid")
      .having("COUNT(variants.id) > 0")
      .order("variant_count DESC", :id)
  end

  option(:soid, type: String, description: "Limit to variant types  with a specific Sequence Ontology ID") do |scope, value|
    if value.upcase.starts_with?("SO:")
      scope.where(soid: value.upcase)
    else
      scope.where(soid: "SO:#{value}")
    end
  end

  option(:id, type: Int, description: "Filter variant types by internal CIViC id") do |scope, value|
    scope.where(id: value)
  end

  option(:name, type: String, description: "Wildcard match on variant type name") do |scope, value|
    scope.where("display_name ILIKE ?", "%#{value}%")
  end

  option(:gene_id, type: Int, description: "Filter variant types by internal CIViC id of a gene") do |scope, value|
    scope.joins(variants: [ :gene ]).where(gene: { id: value })
  end

  option(:feature_id, type: Int, description: "Filter variant types by internal CIViC id a feature") do |scope, value|
    scope.joins(variants: [ :feature ]).where(feature: { id: value })
  end

  option(:sort_by, type: Types::BrowseTables::VariantTypeSortType, description: "Sort order for the variant type. Defaults to most recent.") do |scope, value|
    scope.reorder("#{value.column} #{value.direction}")
  end
end
