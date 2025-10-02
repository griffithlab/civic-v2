require "search_object"
require "search_object/plugin/graphql"

class Resolvers::TopLevelClinicalTrials < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::BrowseTables::BrowseClinicalTrialType.connection_type, null: false

  description "List and filter Clinical Trials from ClinicalTrials.gov."

  scope do
    ClinicalTrial.select("clinical_trials.id, clinical_trials.name, clinical_trials.nct_id, count(distinct(sources.id)) as source_count, count(distinct(evidence_items.id)) as evidence_count")
      .left_outer_joins(sources: [ :evidence_items ])
      .where("evidence_items.status != 'rejected'")
      .group("clinical_trials.id, clinical_trials.name, clinical_trials.nct_id")
      .having("COUNT(evidence_items.id) > 0 or COUNT(sources.id) > 0")
      .order("source_count DESC", :id)
  end

  option(:nct_id, type: String, description: "Limit to clinical trials with a specific NCT ID") do |scope, value|
    if value.upcase.starts_with?("NCT")
      scope.where(nct_id: value.upcase)
    else
      scope.where(nct_id: "NCT#{value}")
    end
  end

  option(:id, type: Int, description: "Filter to a Clinical Trial based on its internal CIViC id") do |scope, value|
    scope.where(id: value)
  end

  option(:ids, type: [ Int ], description: "Filter by internal CIViC ids") do |scope, value|
    scope.where(id: value)
  end

  option(:name, type: String, description: "Wildcard match on clinical trial title") do |scope, value|
    scope.where("name ILIKE ?", "%#{value}%")
  end

  option(:sort_by, type: Types::BrowseTables::ClinicalTrialSortType, description: "Sort order for the clinical trials. Defaults to the highest source count.") do |scope, value|
    scope.reorder("#{value.column} #{value.direction}")
  end
end
