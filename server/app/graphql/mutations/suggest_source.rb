class Mutations::SuggestSource < Mutations::MutationWithOrg
  description 'Suggest a source for curation in CIViC.'

  argument :source_id, GraphQL::Types::Int, required: true,
    description: 'Internal CIViC ID for the source to suggest. Use the AddRemoteCitation mutation to populate this if needed.'

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: 'Text explaining why this source should be curated for CIViC evidence.'

  argument :molecular_profile_id, GraphQL::Types::Int, required: false,
    description: 'Internal CIViC ID for the applicable molecular profile, if any.'

  argument :disease_id, GraphQL::Types::Int, required: false,
    description: 'Internal CIViC ID for the applicable disease, if any.'

  field :source_suggestion, Types::Entities::SourceSuggestionType, null: false,
    description: 'The newly created Source Suggestion'


  def ready?(organization_id: nil, source_id:, molecular_profile_id: nil, disease_id: nil, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    errors = []

    if !Source.where(id: source_id).exists?
      errors << "Source with ID #{source_id} does not exist in CIViC"
    end

    if molecular_profile_id
      mp = MolecularProfile.where(id: molecular_profile_id)
      if !mp.exists?
        errors << "Molecular Profile with ID #{molecular_profile_id} does not exist in CIViC"
      elsif mp.deprecated
        errors << "Molecuarl Profile with ID #{molecular_profile_id} is deprecated"
      end
    end

    if disease_id && !Disease.where(id: disease_id).exists?
      errors << "Disease with ID #{disease_id} does not exist in CIViC"
    end

    if errors.any?
      raise GraphQL::ExecutionError, errors.join('|')
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(organization_id: nil, source_id:, molecular_profile_id: nil, disease_id: nil, comment:, **kwargs)

    cmd = Actions::SuggestSource.new(
      source_id: source_id,
      originating_user: context[:current_user],
      organization_id: organization_id,
      comment_body: comment,
      disease_id: disease_id,
      molecular_profile_id: molecular_profile_id
    )
    res = cmd.perform

    if res.succeeded?
      {
        source_suggestion: cmd.source_suggestion,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end





