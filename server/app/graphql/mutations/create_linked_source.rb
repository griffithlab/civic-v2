class Mutations::CreateLinkedSource < Mutations::BaseMutation
  description "Create a link between two sources with a reason and an optional note."
  
  argument :source_id, ID, required: true,
    description: "The ID of the source."
    
  argument :linked_source_id, ID, required: true,
    description: "The ID of the source being linked."
    
  argument :reason, String, required: true,
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
  
    true
  end
  
  def resolve(reason:, note: nil, **_args)
    existing_link = SourceLink.find_by(source: @source, linked_source: @linked_source)

    if existing_link
      raise GraphQL::ExecutionError, "A link between these sources already exists."
    end
    
    source_link = SourceLink.create!(
      source: @source,
      linked_source: @linked_source,
      reason: reason.to_sym,
      note: note
    )
  
    { source_link: source_link }
  rescue ActiveRecord::RecordInvalid => e
    raise GraphQL::ExecutionError, e.record.errors.full_messages.join(", ")
  end
end