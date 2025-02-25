class Actions::UpdateSourceSuggestionStatus
  include Actions::Transactional

  attr_reader :source_suggestion, :updating_user, :organization_id, :new_status, :old_status, :reason

  def initialize(source_suggestion:, updating_user:, organization_id: nil, new_status:, reason:)
    @source_suggestion = source_suggestion
    @updating_user = updating_user
    @organization_id = organization_id
    @new_status = new_status
    @old_status = source_suggestion.status
    @reason = reason
  end

  def execute
    if transition_valid?
      source_suggestion.lock!
      source_suggestion.status = new_status
      source_suggestion.reason = reason
      source_suggestion.save!
      create_event
    else
      errors << "Transition from #{old_status} to #{new_status} status is invalid."
      nil
    end
  end

  def create_event
    events << Event.new(
      action: action,
      originating_user: updating_user,
      subject: source_suggestion.source,
      originating_object: source_suggestion,
      organization_id: organization_id
    )
  end

  def transition_valid?
    valid_new_statuses = case old_status
    when "new"
      [ "curated", "rejected" ]
    when "curated"
      [ "new" ]
    when "rejected"
      [ "new" ]
    end

    valid_new_statuses.include? new_status
  end

  def action
    case new_status
    when "new"
      "requeued source suggestion"
    when "curated"
      "curated source suggestion"
    when "rejected"
      "rejected source suggestion"
    end
  end
end
