class Mutations::CreateLinkedSource < Mutations::MutationWithOrg
  description "Create a link between two sources with a reason and an optional note."

  argument :source_id, GraphQL::Types::Int, required: true,
    description: "The ID of the source."

  argument :linked_source_id, GraphQL::Types::Int, required: true,
    description: "The ID of the source being linked."

  argument :reason, Types::SourceLinkReasonType, required: true,
    description: "Reason for linking the sources. Must be one of: #{SourceLink.reasons.keys.join(', ')}"

  argument :note, String, required: false,
    description: "Optional note for additional context."

  field :source_link, Types::SourceLinkType, null: false,
    description: "The newly created SourceLink."

  def authorized?(**_args)
    validate_user_logged_in
    true
  end

  def ready?(source_id:, linked_source_id:, reason:, **_args)
    @source = Source.find_by(id: source_id)
    @linked_source = Source.find_by(id: linked_source_id)

    if @source.nil? || @linked_source.nil?
      raise GraphQL::ExecutionError, "One or both source IDs do not exist."
    end

    unless SourceLink.reasons.keys.include?(reason)
      raise GraphQL::ExecutionError, "Invalid reason. Must be one of: #{SourceLink.reasons.keys.join(', ')}"
    end

    existing_link = SourceLink.find_by(source: @source, linked_source: @linked_source)
    if existing_link
      raise GraphQL::ExecutionError, "A link between these sources already exists."
    end

    true
  end

  def resolve(organization_id: nil, reason:, note: nil, **_args)
    cmd = Activities::CreateLinkedSource.new(
      source: @source,
      linked_source: @linked_source,
      originating_user: context[:current_user],
      organization_id: organization_id,
      reason: reason.to_sym,
      note: note
    )
    res = cmd.perform

    if res.succeeded?
      {
        source_link: cmd.source_link,
      }
    else
      raise GraphQL::ExecutionError, res.errors.join(", ")
    end
  end
end
