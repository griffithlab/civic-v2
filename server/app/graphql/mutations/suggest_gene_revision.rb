class Mutations::SuggestGeneRevision < Mutations::MutationWithOrg
  description 'Suggest a Revision to a Gene entity.'

  argument :id, Int, required: true,
    description: 'The ID of the Gene to suggest a Revision to.'

  argument :fields, Types::Revisions::GeneFields, required: true,
    description: <<~DOC.strip
      The desired state of the Gene's editable fields if the change were applied.
      If no change is desired for a particular field, pass in the current value of that field.
    DOC

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: 'Text describing the reason for the change. Will be attached to the Revision as a comment.'

  field :gene, Types::Entities::GeneType, null: false,
    description: 'The Gene the user has proposed a Revision to.'

  field :results, [Types::Revisions::RevisionResult], null: false,
    description: <<~DOC.strip
      A list of Revisions generated as a result of this suggestion.
      If an existing Revision exactly matches the proposed one, it will be returned instead.
      This is indicated via the 'newlyCreated' Boolean.
      Revisions are stored on a per-field basis.
      The changesetId can be used to group Revisions proposed at the same time.
    DOC

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
    updated_gene = InputAdaptors::GeneInputAdaptor.new(gene_input_object: fields).perform
    cmd = Actions::SuggestGeneRevision.new(
      existing_obj: gene,
      updated_obj: updated_gene,
      originating_user: context[:current_user],
      organization_id: organization_id,
      comment: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        gene: gene,
        results: res.revisions
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end





