require 'search_object/plugin/graphql'

class Resolvers::TopLevelEvidenceItems < GraphQL::Schema::Resolver
  include SearchObject.module(:graphql)

  type Types::Entities::EvidenceItemType.connection_type, null: false

  description 'List and filter evidence items.'

  scope {
    EvidenceItem
      .all
      .order("evidence_level ASC, rating DESC, id ASC")
      .where.not(status: 'rejected')
  }

  option(:id, type: GraphQL::Types::Int, description: 'Exact match filtering on the ID of the evidence item.') do |scope, value|
    scope.where("evidence_items.id = ?", value)
  end
  option(:variant_id, type: GraphQL::Types::Int, description: 'Exact match filtering on the ID of the variant.') do |scope, value|
    scope.where("evidence_items.variant_id = ?", value)
  end
  option(:molecular_profile_id, type: GraphQL::Types::Int, description: 'Exact match filtering on the ID of the molecular profile.') do |scope, value|
    scope.where("evidence_items.molecular_profile_id = ?", value)
  end
  option(:assertion_id, type: GraphQL::Types::Int, description: 'Exact match filtering on the ID of the assertion.') do |scope, value|
    scope.joins(:assertions).where('assertions.id = ?', value)
  end
  option(:organization_id, type: GraphQL::Types::Int, description: 'Exact match filtering on the ID of the organization the evidence item was submitted under.') do  |scope, value|
    scope.joins(:submission_event).where('events.organization_id = ?', value)
  end
  option(:user_id, type: GraphQL::Types::Int, description: 'Exact match filtering on the ID of the user who submitted the evidence item.') do |scope, value|
    scope.joins(:submission_event).where('events.originating_user_id = ?', value)
  end
  option(:disease_name, type: GraphQL::Types::String, description: 'Substring filtering on disease name.') do |scope, value|
    scope.joins(:disease).where('diseases.name ILIKE ?', "%#{value}%")
  end
  option(:therapy_name, type: GraphQL::Types::String, description: 'Substring filtering on therapy name.') do |scope, value|
    scope.joins(:therapies).where('therapies.name ILIKE ?', "%#{value}%")
  end
  option(:description, type: GraphQL::Types::String, description: 'Substring filtering on evidence item description.') do |scope, value|
    scope.where("evidence_items.description ILIKE ?", "%#{value}%")
  end
  option(:evidence_level, type: Types::EvidenceLevelType, description: 'Filtering on the evidence level.') do |scope, value|
    scope.where(evidence_level: value)
  end
  option(:evidence_type, type: Types::EvidenceTypeType, description: 'Filtering on the evidence type.') do |scope, value|
    scope.where(evidence_type: value)
  end
  option(:evidence_direction, type: Types::EvidenceDirectionType, description: 'Filtering on the evidence direction.') do |scope, value|
    scope.where(evidence_direction: value)
  end
  option(:significance, type: Types::EvidenceSignificanceType, description: 'Filtering on the evidence significance.') do |scope, value|
    scope.where(significance: value)
  end
  option(:variant_origin, type: Types::VariantOriginType, description: 'Filtering on the evidence variant origin.') do |scope, value|
    scope.where(variant_origin: value)
  end
  option(:evidence_rating, type: GraphQL::Types::Int, description: 'Filtering on the evidence rating. Valid values: 1, 2, 3, 4, 5') do |scope, value|
    scope.where(rating: value)
  end
  option(:status, type: Types::EvidenceStatusFilterType, description: 'Filtering on the evidence status.') do |scope, value|
    if value != 'ALL'
      scope.unscope(where: :status).where(status: value)
    else
      scope.unscope(where: :status)
    end
  end
  option(:phenotype_id, type: GraphQL::Types::Int, description: 'Exact match filtering of the evidence items based on the internal CIViC phenotype id') do |scope, value|
    scope.joins(:phenotypes).where('phenotypes.id = ?', value)
  end
  option(:disease_id, type: GraphQL::Types::Int, description: 'Exact match filtering of the evidence items based on the internal CIViC disease id') do |scope, value|
    scope.joins(:disease).where('diseases.id = ?', value)
  end
  option(:therapy_id, type: GraphQL::Types::Int, description: 'Exact match filtering of the evidence items based on the internal CIViC therapy id') do |scope, value|
    scope.joins(:therapies).where('therapies.id = ?', value)
  end
  option(:source_id, type: GraphQL::Types::Int, description: 'Exact match filtering of the evidence items based on the interal CIViC source id') do |scope, value|
    scope.joins(:source).where('sources.id = ?', value)
  end
  option(:clinical_trial_id, type: GraphQL::Types::Int, description: 'Exact match filtering of the evidence items based on the CIViC clinical trial id linked to the evidence item\'s source') do |scope, value|
    scope.joins(source: [:clinical_trials]).where('clinical_trials.id = ?', value)
  end
  option(:molecular_profile_name, type: GraphQL::Types::String, description: 'Substring filtering on molecular profile name') do |scope, value|
    results = Searchkick.search(
                  value,
                  models: [MolecularProfile],
                  fields: ['name'],
                  match: :word_start
                )
    ids = results.hits.map { |x| x["_id"] }
    scope.joins(:molecular_profile).where(molecular_profiles: { id: ids })
  end


  option :sort_by, type: Types::BrowseTables::EvidenceSortType, description: 'Columm and direction to sort evidence on.' do |scope, value|
    case value.column
    when 'ID'
      scope.reorder("id #{value.direction}")
    when 'DISEASE_NAME'
      scope.joins(:disease).reorder("diseases.name #{value.direction}")
    when 'THERAPY_NAME'
      scope.joins(:therapies).reorder("therapies.name #{value.direction}")
    when 'DESCRIPTION'
      scope.reorder("description #{value.direction}")
    when 'EVIDENCE_LEVEL'
      scope.reorder("evidence_level #{value.direction}")
    when 'EVIDENCE_RATING'
      scope.reorder("rating #{value.direction}")
    when 'STATUS'
      scope.reorder("status #{value.direction}")
    when 'EVIDENCE_TYPE'
      scope.reorder("evidence_type #{value.direction}")
    when 'EVIDENCE_DIRECTION'
      scope.reorder("evidence_direction #{value.direction}")
    when 'SIGNIFICANCE'
      scope.reorder("significance #{value.direction}")
    when 'VARIANT_ORIGIN'
      scope.reorder("variant_origin #{value.direction}")
    end
  end
end
