class Actions::UpdateSourceSuggestionStatus
  include Actions::Transactional
  include Actions::WithOriginatingOrganization

  attr_reader :source_suggestion, :updating_user, :organization_id, :new_status, :old_status, :reason

  def initialize(source_suggestion: , updating_user: , organization_id: nil, new_status:, reason: )
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
      return
    end
  end

  def create_event
    events << Event.create!(
      action: action,
      originating_user: updating_user,
      subject: source_suggestion.source,
      originating_object: source_suggestion,
      organization: resolve_organization(updating_user, organization_id)
    )
  end

  def transition_valid?
    valid_new_statuses = case old_status
    when 'new'
      ['curated', 'rejected']
    when 'curated'
      ['new']
    when 'rejected'
      ['new']
    end

    return valid_new_statuses.include? new_status
  end

  def action
    return case new_status
    when 'new'
      'requeued source suggestion'
    when 'curated'
      'curated source suggestion'
    when 'rejected'
      'rejected source suggestion'
    end
  end
end
