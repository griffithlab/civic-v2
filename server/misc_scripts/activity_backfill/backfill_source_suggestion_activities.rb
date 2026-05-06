Event.where(action: 'publication suggested', activity_id: nil).find_each do |event|
  next if event.subject.nil?

  activity = SuggestSourceActivity.create(
    subject: event.subject,
    user_id: event.originating_user_id,
    organization_id: event.organization_id,
    created_at: event.created_at
  )

  source = event.subject
  source_suggestion = event.originating_object

  event.activity_id = activity.id
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

  activity.link_entities!([ source_suggestion, possible_comment ].compact)
  activity.verbiage = activity.generate_verbiage
  activity.save!
end
