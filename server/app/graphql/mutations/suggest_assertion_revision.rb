class Mutations::SuggestAssertionRevision < Mutations::MutationWithOrg
  description "Suggest a Revision to an Assertion entity."

  argument :id, Int, required: true,
    description: "The ID of the Assertion to suggest a Revision to."

  argument :fields, Types::Revisions::AssertionFields, required: true,
    description: <<~DOC.strip
      The desired state of the Assertion's editable fields if the change were applied.
      If no change is desired for a particular field, pass in the current value of that field.
    DOC

  argument :comment, String, required: true,
    validates: { length: { minimum: 10 } },
    description: "Text describing the reason for the change. Will be attached to the Revision as a comment."

  field :assertion, Types::Entities::AssertionType, null: false,
    description: "The Assertion the user has proposed a Revision to."

  field :results, [ Types::Revisions::RevisionResult ], null: false,
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

    input_errors = InputAdaptors::AssertionInputAdaptor
      .check_input_for_errors(assertion_input_object: fields)

    if input_errors.any?
      raise GraphQL::ExecutionError, input_errors.join("|")
    end

    return true
  end

  def authorized?(organization_id: nil, **kwargs)
    validate_user_acting_as_org(user: context[:current_user], organization_id: organization_id)
    return true
  end

  def resolve(fields:, id:, organization_id: nil, comment:)
    updated_assertion = InputAdaptors::AssertionInputAdaptor.new(assertion_input_object: fields).perform
    revised_objs = Activities::RevisedObjectPair.new(existing_obj: assertion, updated_obj: updated_assertion)
    cmd = Activities::SuggestRevisionSet.new(
      revised_objects: revised_objs,
      subject: assertion,
      originating_user: context[:current_user],
      organization_id: organization_id,
      note: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        assertion: assertion,
        results: res.revision_results,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
