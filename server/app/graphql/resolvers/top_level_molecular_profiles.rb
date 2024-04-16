require 'search_object/plugin/graphql'

class Resolvers::TopLevelMolecularProfiles < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::MolecularProfileType.connection_type, null: false

  description 'List and filter molecular profiles.'

  scope { MolecularProfile.where(deprecated: false).order('molecular_profiles.evidence_score DESC').distinct }

  option(:evidence_status_filter, default_value: 'WITH_ACCEPTED_OR_SUBMITTED', type: Types::MolecularProfileDisplayFilterType , description: 'Limit molecular profiles by the status of attached evidence.') do |scope, value|
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

  option(:name, type: GraphQL::Types::String, description: 'Left anchored filtering for molecular profile name and aliases.') do |scope, value|
    results = Searchkick.search(
                  value,
                  models: [MolecularProfile],
                  fields: ['name'],
                  match: :word_start,
                  misspellings: {below: 1}
    )
    ids = results.hits.map { |x| x["_id"] }

    scope.where(molecular_profiles: { id: ids })
  end

  option(:gene_id, type: Int, description: "Filter molecular profiles to the CIViC id of the gene(s) involved.") do |scope, value|
    scope.joins(variants: [:gene])
      .where('genes.id = ?', value)
  end

  option(:feature_id, type: Int, description: "Filter molecular profiles to the CIViC ID of the feature(s) involved.") do |scope, value|
    scope.joins(variants: [:feature])
      .where('features.id = ?', value)
  end

  option(:variant_id, type: Int, description: 'Filter molecular profiles by the CIViC ID of an involved variant.') do |scope, value|
    scope.joins(:variants).where('variants.id = ?', value)
  end

  option(:allele_registry_id, type: GraphQL::Types::String, description: 'Find Molecular Profiles based on the ClinGen Allele Registry ID of one of its involed Variants') do |scope, value|
    scope.joins(:variants).where('variants.allele_registry_id = ?', value)
  end
end
