class Mutations::CreateRegionFeature < Mutations::MutationWithOrg
  description "Create a new Region Feature in the database."

  argument :cytogenetic_region_ids, [ Int ], required: true

  field :feature, Types::Entities::FeatureType, null: false,
    description: "The newly created Feature."

  field :new, Boolean, null: false,
    description: "True if the feature was newly created. False if the returned feature was already in the database."

  def ready?(organization_id: nil, cytogenetic_region_ids:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    # check that all region ids exist
    existing_regions = CytogeneticRegion.where(id: cytogenetic_region_ids)
    unless existing_regions.size == cytogenetic_region_ids.size
      not_found = cytogenetic_region_ids - existing_regions.map(&:id)
      raise GraphQL::ExecutionError, "Invalid cytogenetic region ids. IDs: #{not_found.join(', ')} were not found."
    end

    # check that region ids are not duplicated
    unless cytogenetic_region_ids.size == cytogenetic_region_ids.uniq.size
      raise GraphQL::ExecutionError, "Duplicate cytogenetic region ids. Please make sure the list is unique."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(organization_id: nil, cytogenetic_region_ids:, **kwargs)
    potential_existing_feature_instances = Features::Region.includes(:region_members)
      .where(region_members: { cytogenetic_region_id: cytogenetic_region_ids })

    existing_feature_instances = potential_existing_feature_instances.select do |f|
      f.region_members
        .sort_by { |x| x.position }
        .map(&:cytogenetic_region_id) == cytogenetic_region_ids
    end

    if existing_feature_instances.size > 1
      raise GraphQL::ExecutionError, "Multiple possible ambiguous Region Features found"
    end

    if existing_feature_instances.size == 1
      return {
        feature: existing_feature_instances.first.feature,
        new: false,
      }
    end

    cmd = Activities::CreateRegionFeature.new(
      cytogenetic_region_ids: cytogenetic_region_ids,
      originating_user: context[:current_user],
      organization_id: organization_id,
    )

    res = cmd.perform

    if res.succeeded?
      return {
        feature: res.feature,
        new: true,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
