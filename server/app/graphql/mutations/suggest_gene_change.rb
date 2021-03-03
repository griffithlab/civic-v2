class Mutations::SuggestGeneChange < Mutations::MutationWithOrg
  argument :id, Int, required: true
  argument :fields, Types::SuggestedChanges::GeneFields, required: true
  argument :comment, String, required: true, validates: { length: { minimum: 10 } }

  field :gene, Types::Entities::GeneType, null: false
  field :results, [Types::SuggestedChanges::SuggestedChangeResult], null: false

  attr_reader :gene

  def ready?(organization_id: nil, id:, fields:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    gene = Gene.find_by(id: id)
    if gene.nil?
      raise GraphQL::ExecutionError, "Gene with id #{id} doesn't exist."
    end

    @gene = gene

    existing_source_ids = Source.where(id: fields.source_ids).pluck(:id)
    if existing_source_ids.size != fields.source_ids.size
      raise GraphQL::ExecutionError, "Provided source ids: #{fields.source_ids.join(', ')} but only #{existing_source_ids.join(', ')} exist."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(fields:, id:, organization_id: nil, comment:)
    cmd = Actions::SuggestGeneChange.new(
      existing_obj: gene,
      fields: fields,
      originating_user: context[:current_user],
      organization_id: organization_id,
      comment: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        gene: gene,
        results: res.changes
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end





