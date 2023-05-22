Event.where(action: 'publication suggested', activity_id: nil).find_each do |event|
  next if event.subject.nil?

  activity = SuggestSourceActivity.create(
    subject: event.subject,
    user_id: event.originating_user_id,
    organization_id: event.organization_id,
    created_at: event.created_at
  )


  source = event.subject
  source_suggestions = SourceSuggestion.where(source: source)

  source_suggestion = if source_suggestions.size > 1
    possible_suggestions = source_suggestions.reject { |ss|  (event.created_at.to_i - ss.created_at.to_i).abs > 30 }
    if possible_suggestions.size == 1
      possible_suggestions[0]
    else
      possible_suggestions.min_by { |s| s.created_at }
    end
  else
    source_suggestions[0]
  end

  event.activity_id = activity.id
  if source_suggestion
    event.originating_object = source_suggestion
  end
  event.save!

  possible_comment = if source_suggestion
    Comment.find_by(commentable: source, comment: source_suggestion.initial_comment)
  else
    nil
  end

  if possible_comment
    comment_event = Event.find_by(originating_object: possible_comment)
    if comment_event
      comment_event.activity_id = activity.id
      comment_event.save!
    end
  end

  activity.link_entities!([source_suggestion, possible_comment].compact)
  activity.verbiage = activity.generate_verbiage
  activity.save!
end
