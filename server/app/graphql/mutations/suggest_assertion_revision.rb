class Mutations::SuggestAssertionRevision < Mutations::MutationWithOrg
  description 'Suggest a Revision to an Assertion entity.'

  argument :id, Int, required: true,
    description: 'The ID of the Assertion to suggest a Revision to.'

  argument :fields, Types::Revisions::AssertionFields, required: true,
    description: <<~DOC.strip
      The desired state of the Assertion's editable fields if the change were applied.
      If no change is desired for a particular field, pass in the current value of that field.
    DOC

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: 'Text describing the reason for the change. Will be attached to the Revision as a comment.'

  field :assertion, Types::Entities::AssertionType, null: false,
    description: 'The Assertion the user has proposed a Revision to.'

  field :results, [Types::Revisions::RevisionResult], null: false,
    description: <<~DOC.strip
      A list of Revisions generated as a result of this suggestion.
      If an existing Revision exactly matches the proposed one, it will be returned instead.
      This is indicated via the 'newlyCreated' Boolean.
      Revisions are stored on a per-field basis.
      The changesetId can be used to group Revisions proposed at the same time.
    DOC

  attr_reader :assertion

  def ready?(organization_id: nil, id:, fields:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

    assertion = Assertion.find_by(id: id)
    if assertion.nil?
      raise GraphQL::ExecutionError, "Assertion with id #{id} doesn't exist."
    end

    @assertion = assertion

    existing_phenotype_ids = Phenotype.where(id: fields.phenotype_ids).pluck(:id)
    if existing_phenotype_ids.size != fields.phenotype_ids.size
      raise GraphQL::ExecutionError, "Provided phenotype ids: #{fields.phenotype_ids.join(', ')} but only #{existing_phenotype_ids.join(', ')} exist."
    end

    existing_drug_ids = Drug.where(id: fields.drug_ids).pluck(:id)
    if existing_drug_ids.size != fields.drug_ids.size
      raise GraphQL::ExecutionError, "Provided drug ids: #{fields.drug_ids.join(', ')} but only #{existing_drug_ids.join(', ')} exist."
    end

    existing_eids = EvidenceItem.where(id: fields.evidence_item_ids).pluck(:id)
    if existing_eids.size != fields.evidence_item_ids.size
      raise GraphQL::ExecutionError, "Provided evidence item ids: #{fields.evidence_item_ids.join(', ')} but only #{existing_eids.join(', ')} exist."
    end

    if fields.disease_id && !Disease.find(fields.disease_id)
      raise GraphQL::ExecutionError, "Provided disease id: #{fields.disease_id} is not found."
    end

    if fields.nccn_guideline_id && !NccnGuideline.find(fields.nccn_guideline_id)
      raise GraphQL::ExecutionError, "Provided NCCN Guideline id: #{fields.nccn_guideline_id} is not found."
    end

    existing_acmg_ids = AcmgCode.where(id: fields.acmg_code_ids).pluck(:id)
    if existing_acmg_ids.size != fields.acmg_code_ids.size
      raise GraphQL::ExecutionError, "Provided ACMG code ids: #{fields.acmg_code_ids.join(', ')} but only #{existing_acmg_ids.join(', ')} exist."
    end

    if !Variant.find(fields.variant_id)
      raise GraphQL::ExecutionError, "Provided variant id: #{fields.variant_id} is not found."
    end

    if !Gene.find(fields.gene_id)
      raise GraphQL::ExecutionError, "Provided gene id: #{fields.gene_id} is not found."
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(fields:, id:, organization_id: nil, comment:)
    updated_assertion = InputAdaptors::AssertionInputAdaptor.new(assertion_input_object: fields).perform
    cmd = Actions::SuggestAssertionRevision.new(
      existing_obj: assertion,
      updated_obj: updated_assertion,
      originating_user: context[:current_user],
      organization_id: organization_id,
      comment: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        assertion: assertion,
        results: res.revisions
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(', ')
    end
  end
end





