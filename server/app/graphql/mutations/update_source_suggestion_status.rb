class Mutations::UpdateSourceSuggestionStatus < Mutations::MutationWithOrg
  description "Update the status of a SourceSuggestion by ID. The user updating the SourceSuggestion must be signed in."

  argument :id, Int, required: true,
    description: "The ID of the SourceSuggestion to update."

  argument :new_status, Types::SourceSuggestionStatusType, required: true,
    description: "The desired status of the SourceSuggestion."

  argument :reason, String, required: false,
    description: "The justification for marking a source as curated/rejected"

  field :source_suggestion, Types::Entities::SourceSuggestionType, null: false,
    description: "The updated SourceSuggestion."

  attr_reader :source_suggestion

  def ready?(organization_id: nil, id:, **_)
    validate_user_logged_in
    validate_user_org(organization_id)

    @source_suggestion = SourceSuggestion.find_by(id: id)
    if source_suggestion.nil?
      raise GraphQL::ExecutionError, "SourceSuggestion with id #{id} doesn't exist"
    end

    return true
  end

  def authorized?(organization_id: nil, **_)
    current_user = context[:current_user]
    validate_user_acting_as_org(user: current_user, organization_id: organization_id)

    if Role.user_is_at_least_a?(current_user, :editor) && !current_user.has_valid_coi_statement?
      raise GraphQL::ExecutionError, "User must have a valid conflict of interest statement on file."
    end

    return true
  end

  def resolve(id:, organization_id: nil, new_status:, reason: nil, **_)
    if new_status != source_suggestion.status
      cmd = Activities::UpdateSourceSuggestionStatus.new(
        source_suggestion: source_suggestion,
        originating_user: context[:current_user],
        organization_id: organization_id,
        new_status: new_status,
        reason: reason
      )

      res = cmd.perform

      if !res.succeeded?
        raise GraphQL::ExecutionError, res.errors.join(", ")
      end
    end

    {
      source_suggestion: source_suggestion,
    }
  end
end
