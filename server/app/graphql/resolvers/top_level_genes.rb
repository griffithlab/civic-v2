require 'search_object/plugin/graphql'

class Resolvers::TopLevelGenes < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::GeneType.connection_type, null: false

  description 'List and filter genes.'

  scope do
    Features::Gene.joins(feature: { variants: [:molecular_profiles]})
      .where("variants.deprecated = 'f'")
      .order('features.name ASC')
      .select("genes.*, features.name")
      .distinct
  end

  option(:evidence_status_filter, default_value: 'WITH_ACCEPTED_OR_SUBMITTED', type: Types::AssociatedEvidenceStatusFilterType , description: 'Limit genes by the status of attached evidence.') do |scope, value|
    case value
    when 'WITH_ACCEPTED'
      scope.joins(feature: { variants: { molecular_profiles: [:evidence_items_by_status] } })
        .where('evidence_items_by_statuses.accepted_count >= 1')
    when 'WITH_ACCEPTED_OR_SUBMITTED'
      scope.joins(feature: { variants: { molecular_profiles: [:evidence_items_by_status] } })
        .where('evidence_items_by_statuses.accepted_count >= 1 OR evidence_items_by_statuses.submitted_count >= 1')
    when 'WITH_SUBMITTED'
      scope.joins(feature: { variants: { molecular_profiles: [:evidence_items_by_status] } })
        .where('evidence_items_by_statuses.submitted_count >= 1')
    when 'ALL'
      scope
    end
  end

  option(:entrez_symbols, type: [GraphQL::Types::String], description: 'List of Entrez Gene symbols to return results for') do |scope, value|
    scope.where('features.name IN (?)', value.map(&:upcase))
  end

  option(:entrez_ids, type: [GraphQL::Types::Int], description: 'List of Entrez Gene IDs to return results for') do |scope, value|
    scope.where('genes.entrez_id IN (?)', value)
  end
end
