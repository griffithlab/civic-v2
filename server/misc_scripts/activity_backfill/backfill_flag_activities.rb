Event.where(action: 'flagged').find_each do |event|
  activity = FlagEntityActivity.create(
    subject: event.subject,
    user_id: event.originating_user_id,
    organization_id: event.organization_id,
    created_at: event.created_at,
  )

  event.activity_id = activity.id
  event.save!

  activity.link_entities!(event.originating_object)

  possible_comment = event.originating_object&.comments&.first

  if possible_comment
    differential = (event.created_at.to_i - possible_comment.created_at.to_i).abs
    if differential <= 30
      activity.link_entities!(possible_comment)
      comment_event = Event.find_by(originating_object: possible_comment)
      if comment_event
        comment_event.activity_id = activity.id
        comment_event.save!
      else
        Event.create!(
          action: 'commented',
          originating_user_id: possible_comment.user.id,
          created_at: possible_comment.created_at,
          subject: event.originating_object,
          originating_object: possible_comment,
          organization_id: event.organization_id,
          activity_id: activity.id
        )
      end
    end
  end

  activity.save!
end
