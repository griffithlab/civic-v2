require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::TopLevelDrugs < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseDrugType.connection_type, null: false

  description 'List and filter Drugs from the NCI Thesaurus.'

  scope do
    Drug.select('drugs.id, drugs.name, drugs.ncit_id, count(distinct(assertions.id)) as assertion_count, count(distinct(evidence_items.id)) as evidence_count')
      .left_outer_joins(:assertions)
      .left_outer_joins(:evidence_items)
      .where("evidence_items.status != 'rejected' OR assertions.status != 'rejected'")
      .group('drugs.id, drugs.name, drugs.ncit_id')
      .having('COUNT(evidence_items.id) > 0 OR COUNT(assertions.id) > 0')
      .order('evidence_count DESC', :id)
  end

  option(:ncit_id, type: String, description: 'Limit to drugs with a specific NCIT ID') do |scope, value|
    if value.upcase.starts_with?('C')
      scope.where(ncit_id: value.upcase)
    else
      scope.where(ncit_id: "C#{value}")
    end
  end

  option(:id, type: Int, description: "Filter on a Drug's internal CIViC id") do |scope, value|
    scope.where(id: id)
  end

  option(:name, type: String, description: 'Wildcard match on drug name') do |scope, value|
    scope.where('name ILIKE ?', "%#{value}%")
  end

  option(:sort_by, type: Types::BrowseTables::DrugSortType, description: 'Sort order for the drugs. Defaults to the highest evidence item count.') do |scope, value|
    scope.reorder("#{value.column} #{value.direction}")
  end

  def self.table_headers
    [
      'id',
      'name',
      'ncit_id',
      'evidence_count',
      'assertion_count'
    ]
  end

  def self.to_row(object:)
    [
      object.id,
      object.display_name,
      object.ncit_id,
      object.evidence_count,
      object.assertion_count
    ]
  end
end
