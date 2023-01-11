require 'search_object'
require 'search_object/plugin/graphql'

class Resolvers::BrowseSources < GraphQL::Schema::Resolver
  # include SearchObject for GraphQL
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseSourceType.connection_type, null: false

  scope { SourceBrowseTableRow.all }

  option(:source_type, type: Types::SourceSourceType) do |scope, value|
    scope.where(source_type: value)
  end

  option(:citation_id, type: Int) do |scope, value|
    scope.where('citation_id::text LIKE ?', "#{value}%")
  end

  option(:author, type: String) do |scope, value|
    query = "%#{value}%"
    scope.where("array_to_string(authors, '|') ILIKE ?", query).or(scope.where('asco_presenter ILIKE ?', query))
  end

  option(:year, type: Int) do |scope, value|
    scope.where('publication_year::text LIKE ?', "#{value}%")
  end

  option(:journal, type: String) do |scope, value|
    scope.where('journal ILIKE ?', "%#{value}%")
  end

  option(:name, type: String) do |scope, value|
    scope.where('title ILIKE ?', "%#{value}%")
  end

  option(:clinical_trial_id, type: Int) do |scope, value|
    scope.joins(:clinical_trials).where('clinical_trials.id = ?', value)
  end

  option(:id, type: Int) do |scope, value|
    scope.where(id: value)
  end

  option(:sort_by, type: Types::BrowseTables::SourcesSortType) do |scope, value|
    case value.column
    when "SOURCE_TYPE"
      scope.order("source_type #{value.direction}")
    when "CITATION_ID"
      scope.order("citation_id #{value.direction}")
    when "AUTHORS"
      scope.order("authors #{value.direction}")
    when "YEAR"
      scope.order("publication_year #{value.direction}")
    when "JOURNAL"
      scope.order("journal #{value.direction}")
    when "NAME"
      scope.order("title #{value.direction}")
    when "EVIDENCE_COUNT"
      scope.order("evidence_item_count #{value.direction}")
    when "SUGGESTION_COUNT"
      scope.order("source_suggestion_count #{value.direction}")
    end
  end
end

