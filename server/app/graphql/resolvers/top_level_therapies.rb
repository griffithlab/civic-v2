require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::TopLevelTherapies < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseTherapyType.connection_type, null: false

  description 'List and filter Therapies from the NCI Thesaurus.'

  scope do
    Therapy.select('therapies.id, therapies.name, therapies.deprecated, max(therapies.ncit_id) as ncit_id, count(distinct(assertions.id)) as assertion_count, count(distinct(evidence_items.id)) as evidence_count')
      .left_outer_joins(:assertions, :evidence_items)
      .where("evidence_items.status != 'rejected' OR assertions.status != 'rejected'")
      .where(deprecated: false)
      .group('therapies.id, therapies.name, therapies.deprecated')
      .having('COUNT(evidence_items.id) > 0 OR COUNT(assertions.id) > 0')
      .order('evidence_count DESC', :id)
  end

  option(:ncit_id, type: String, description: 'Limit to therapies with a specific NCIT ID') do |scope, value|
    if value.upcase.starts_with?('C')
      scope.where(ncit_id: value.upcase)
    else
      scope.where(ncit_id: "C#{value}")
    end
  end

  option(:id, type: Int, description: "Filter on a therapy's internal CIViC id") do |scope, value|
    scope.where(id: id)
  end

  option(:name, type: String, description: 'Wildcard match on therapy name') do |scope, value|
    scope.where('name ILIKE ?', "%#{value}%")
  end

  option(:sort_by, type: Types::BrowseTables::TherapySortType, description: 'Sort order for the therapies. Defaults to the highest evidence item count.') do |scope, value|
    scope.reorder("#{value.column} #{value.direction}")
  end
end
