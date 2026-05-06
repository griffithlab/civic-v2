Event.where(action: 'deprecated variant', activity_id: nil).find_each do |event|
  activity = DeprecateVariantActivity.create(
    subject: event.subject,
    user_id: event.originating_user_id,
    organization_id: event.organization_id,
    created_at: event.created_at,
  )

  event.activity_id = activity.id
  event.save!

  deprecate_mp_events = Event.where(action: 'deprecated molecular profile', originating_object: event.subject)
  deprecate_mp_events.each do |e|
    e.activity_id = activity.id
    e.save!
  end

  activity.link_entities!(deprecate_mp_events.map { |e| e.subject })

  comment = event.subject.deprecation_comment
  if comment
    activity.link_entities!(comment)
    comment_event = Event.find_by(originating_object: comment)
    comment_event.activity_id = activity.id
    comment_event.save!
  end

  activity.verbiage = activity.generate_verbiage
  activity.save!
end
