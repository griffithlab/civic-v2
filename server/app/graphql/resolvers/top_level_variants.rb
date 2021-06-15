require 'search_object/plugin/graphql'

class Resolvers::TopLevelVariants < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::VariantType.connection_type, null: false

  description 'List and filter variants.'

  scope { Variant.order('variants.name ASC') }

  option(:evidence_status_filter, default_value: 'WITH_ACCEPTED_OR_SUBMITTED', type: Types::VariantDisplayFilterType , description: 'Limit variants by the status of attached evidence.') do |scope, value|
    case value
    when 'WITH_ACCEPTED'
      scope.joins(:evidence_items_by_status)
        .where('evidence_items_by_statuses.accepted_count >= 1')
    when 'WITH_ACCEPTED_OR_SUBMITTED'
      scope.joins(:evidence_items_by_status)
        .where('evidence_items_by_statuses.accepted_count >= 1 OR evidence_items_by_statuses.submitted_count >= 1')
    when 'WITH_SUBMITTED'
      scope.joins(:evidence_items_by_status)
        .where('evidence_items_by_statuses.submitted_count >= 1')
    when 'ALL'
      scope
    end
  end

  option(:name, type: GraphQL::Types::String, description: 'Left anchored filtering for variant name.') do |scope, value|
    scope.where('variants.name ILIKE ?', "#{value}%")
  end

  option(:gene_id, type: GraphQL::Types::Int, description: 'Gene that variants are associated with.') do |scope, value|
    scope.where(gene_id: value)
  end

end
