require "search_object"
require "search_object/plugin/graphql"

class Resolvers::BrowseMolecularProfiles < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)
  include Resolvers::Shared::SearchHelpers

  type Types::BrowseTables::BrowseMolecularProfileType.connection_type, null: false

  scope do
    MaterializedViews::MolecularProfileBrowseTableRow
      .all
      .order("evidence_score DESC, id ASC")
  end

  option(:molecular_profile_name, type: String) do |scope, value|
    results = Searchkick.search(
                  value,
                  models: [ MolecularProfile ],
                  fields: [ "name" ],
                  match: :word_start,
                  misspellings: { below: 1 }
                )
    ids = results.hits.map { |x| x["_id"] }

    scope.where(id: ids)
  end

  option(:variant_name, type: String)  do |scope, value|
    scope.where(json_name_query_for_column(scope.table_name, "variants"), "#{value}%")
      .or(scope.where(json_name_query_for_column(scope.table_name, "features"), "#{value}"))
  end

  option(:feature_name, type: String) do |scope, value|
    scope.where(json_name_query_for_column(scope.table_name, "features"), "#{value}%")
  end
  option(:disease_name, type: String) do |scope, value|
    scope.where(json_name_query_for_column(scope.table_name, "diseases"), "%#{value}%")
  end
  option(:therapy_name, type: String) do |scope, value|
    scope.where(json_name_query_for_column(scope.table_name, "therapies"), "%#{value}%")
  end
  option(:molecular_profile_alias, type: String) { |scope, value| scope.where(array_query_for_column("alias_names"), "%#{value}%") }
  option(:variant_id, type: Int) do |scope, value|
    scope.where(id: MolecularProfile.joins(:variants).where(variants: { id: value }).select("molecular_profiles.id"))
  end

  option :sort_by, type: Types::BrowseTables::MolecularProfilesSortType do |scope, value|
    case value.column
    when "evidenceItemCount"
      scope.reorder "evidence_item_count #{value.direction}"
    when "assertionCount"
      scope.reorder "assertion_count #{value.direction}"
    when "molecularProfileScore"
      scope.reorder "evidence_score #{value.direction}"
    when "variantCount"
      scope.reorder "variant_count #{value.direction}"
    end
  end
end
