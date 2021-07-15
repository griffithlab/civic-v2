require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::Phenotypes < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowsePhenotypeType.connection_type, null: false

  description 'List and filter Phenotypes from the Human Phenotype Ontology.'

  scope do
    Phenotype.select('phenotypes.id, phenotypes.hpo_class, phenotypes.hpo_id, count(distinct(assertions.id)) as assertion_count, count(distinct(evidence_items.id)) as evidence_count')
      .left_outer_joins(:assertions)
      .left_outer_joins(:evidence_items)
      .where("evidence_items.status != 'rejected' OR assertions.status != 'rejected'")
      .group('phenotypes.id, phenotypes.hpo_class, phenotypes.hpo_id')
      .having('COUNT(evidence_items.id) > 0 OR COUNT(assertions.id) > 0')
      .order('evidence_count DESC')
  end
    
  option(:hpo_id, type: String, description: 'Limit to phenotypes with a specific HPO ID') do |scope, value|
    if value.upcase.starts_with?('HP:')
      scope.where(hpo_id: value.upcase)
    else
      scope.where(hpo_id: "HP:#{value}")
    end
  end

  option(:name, type: String, description: 'Wildcard match on phenotype name (class)') do |scope, value|
    scope.where('hpo_class ILIKE ?', "%#{value}%")
  end

  option(:sort_by, type: Types::BrowseTables::PhenotypeSortType, description: 'Sort order for the phenotypes. Defaults to most recent.') do |scope, value|
    scope.reorder("#{value.column} #{value.direction}")
  end
end
