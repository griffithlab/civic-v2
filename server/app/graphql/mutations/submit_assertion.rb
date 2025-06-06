class Mutations::SubmitAssertion< Mutations::MutationWithOrg
  description "Propose adding a new Assertion to the CIViC database."

  argument :fields, Types::Revisions::AssertionFields, required: true,
    description: <<~DOC.strip
      The desired state of the Assertion's editable fields.
    DOC

  argument :comment, String, required: false,
    validates: { length: { minimum: 10 } },
    description: "Text describing any further context or details about your proposed Assertion. Will be attached as a comment."

  field :assertion, Types::Entities::AssertionType, null: false,
    description: "The newly created Assertion"


  def ready?(organization_id: nil, fields:, **kwargs)
    validate_user_logged_in
    validate_user_org(organization_id)

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

  def resolve(fields:, organization_id: nil, comment: nil)
    assertion = InputAdaptors::AssertionInputAdaptor.new(assertion_input_object: fields).perform


    cmd = Activities::SubmitAssertion.new(
      assertion: assertion,
      originating_user: context[:current_user],
      organization_id: organization_id,
      note: comment
    )
    res = cmd.perform

    if res.succeeded?
      {
        assertion: assertion,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
