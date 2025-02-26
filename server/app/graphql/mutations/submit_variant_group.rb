class Mutations::SubmitVariantGroup < Mutations::MutationWithOrg
  description "Create a new variant group."

  argument :name, String, required: true,
    description: "The name of the disease.",
    validates: { length: { minimum: 5 } }

  argument :description, String, required: false,
    description: "A description of the variant group.",
    validates: { length: { minimum: 10 } }

  argument :variant_ids, [ Int ], required: true,
    description: "A list of CIViC variant IDs to add to the variant group."

  argument :source_ids, [ Int ], required: true,
    description: "A list of CIViC source IDs to associate with the variant group."

  field :variant_group, Types::Entities::VariantGroupType, null: false,
    description: "The newly created Variant Group"

  def ready?(organization_id: nil, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)
    return true
  end

  def resolve(name:, description:, variant_ids:, source_ids:, **kwargs)
    errors = []

    existing_variant_ids = Variant.where(id: variant_ids).pluck(:id)
    if existing_variant_ids.size != variant_ids.size
      errors << "Provided variant ids: #{variant_ids.join(', ')} but only #{existing_variant_ids.join(', ')} exist."
    end

    existing_sources = Source.where(id: source_ids)
    if existing_sources.size != source_ids.size
      errors << "Provided source ids: #{source_ids.join(', ')} but only #{existing_sources.pluck(:id).join(', ')} exist."
    end

    if v = VariantGroup.find_by("name ILIKE ?", name)
      errors << "Provided variant group name: A variant group with name #{name} already exists."
    end

    if errors.size > 0
      raise GraphQL::ExecutionError, errors.join(", ")
    else
      v = VariantGroup.new(name: name, description: description, variant_ids: variant_ids, source_ids: source_ids)
      if v.valid?
        v.save!
        return { variant_group: v }
      else
        raise GraphQl::ExecutionError, v.errors.full_messages.join(", ")
      end
    end
  end
end
