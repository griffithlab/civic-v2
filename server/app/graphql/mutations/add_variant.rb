class Mutations::AddVariant < Mutations::BaseMutation
  description 'Add a new Variant to the database.'

  argument :name, String, required: true,
    description: 'The name of the variant to add.',
    validates: { allow_blank: false }

  argument :gene_id, Int, required: true,
    description: 'The CIViC ID of the Gene to which the new variant belongs.'

  field :variant, Types::Entities::VariantType, null: false,
    description: 'The newly created Variant.'

  field :new, Boolean, null: false,
    description: 'True if the variant was newly created. False if the returned variant was already in the database.'

  def ready?(gene_id:, **kwargs)
    validate_user_logged_in

    if Gene.find_by(id: gene_id).blank?
      raise GraphQL::ExecutionError, "Gene with id #{gene_id} doesn't exist."
    end

    return true
  end

  def resolve(name:, gene_id:)
    existing_variant = Variant.where(gene_id: gene_id)
      .where('name ILIKE ?', name)
      .first

    if existing_variant.present?
      return { variant: existing_variant, new: false }
    else
      new_variant = Variant.create!(name: name, gene_id: gene_id, description: '', civic_actionability_score: 0)
      return { variant: new_variant, new: true }
    end
  end
end
