require "search_object/plugin/graphql"

class Resolvers::TopLevelFusions < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::FusionType.connection_type, null: false

  description "List and filter fusions."

  @@cols = Features::Fusion.column_names.map { |col| "fusions.#{col}" }.join(",")

  scope do
    Features::Fusion.joins(feature: { variants: [ :molecular_profiles ] })
      .where("variants.deprecated = 'f'")
      .order("features.name ASC")
      .select("fusions.*, features.name")
      .distinct
  end

  option(:ids, type: [ Int ], description: "Filter by internal CIViC ids") do |scope, value|
    scope.where(id: value)
  end

  option(:evidence_status_filter, default_value: "WITH_ACCEPTED_OR_SUBMITTED", type: Types::AssociatedEvidenceStatusFilterType, description: "Limit fusions by the status of attached evidence.") do |scope, value|
    case value
    when "WITH_ACCEPTED"
      scope.joins(feature: { variants: { molecular_profiles: [ :evidence_items_by_status ] } })
        .where("evidence_items_by_statuses.accepted_count >= 1")
    when "WITH_ACCEPTED_OR_SUBMITTED"
      scope.joins(feature: { variants: { molecular_profiles: [ :evidence_items_by_status ] } })
        .where("evidence_items_by_statuses.accepted_count >= 1 OR evidence_items_by_statuses.submitted_count >= 1")
    when "WITH_SUBMITTED"
      scope.joins(feature: { variants: { molecular_profiles: [ :evidence_items_by_status ] } })
        .where("evidence_items_by_statuses.submitted_count >= 1")
    when "ALL"
      scope
    end
  end

  option(:gene_partner_id, type: Int, description: "CIViC ID of one of the Gene partners") do |scope, value|
    known_fusion_ids = FusionsKnownPartnerGene.where(gene_id: value).pluck(:fusion_id)
    scope.where("fusions.five_prime_gene_id = ? OR fusions.three_prime_gene_id = ? OR fusions.id = ?", value, value, known_fusion_ids)
  end
end
