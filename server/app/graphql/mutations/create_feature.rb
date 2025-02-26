class Mutations::CreateFeature < Mutations::MutationWithOrg
  description "Create a new Feature in the database."

  argument :name, String, required: true,
    description: "The name of the feature to create.",
    validates: { allow_blank: false }

  argument :feature_type, Types::CreateableFeatureTypesType, required: true,
    description: "The Type of Feature you are creating"

  field :feature, Types::Entities::FeatureType, null: false,
    description: "The newly created Feature."

  field :new, Boolean, null: false,
    description: "True if the feature was newly created. False if the returned feature was already in the database."

  def ready?(organization_id: nil, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(name:, feature_type:, organization_id: nil)
    existing_feature = Feature.left_joins(:feature_aliases).where(feature_instance_type: feature_type.to_s)
      .where("features.name ILIKE ?", name)
      .or(
          Feature.where(feature_instance_type: feature_type.to_s)
            .left_joins(:feature_aliases)
            .where("feature_aliases.name ILIKE ?", name)
         )
      .first

    if existing_feature.present?
      return {
        feature: existing_feature,
        new: false,
      }

    else
      cmd = Activities::CreateFeature.new(
        feature_name: name,
        feature_instance_type: feature_type,
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
end
