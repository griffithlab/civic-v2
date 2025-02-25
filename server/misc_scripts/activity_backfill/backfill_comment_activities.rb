# NOTE: cannot run this until last
Event.where(action: 'commented', activity_id: nil).find_each do |event|
  if event.originating_object.blank?
    Notification.where(event: event).destroy_all
    event.destroy!
  else
    activity = CommentActivity.create(
      subject: event.subject,
      user_id: event.originating_user_id,
      organization_id: event.organization_id,
      created_at: event.created_at
    )

    event.activity_id = activity.id
    event.save!

    activity.link_entities!(event.originating_object)
    activity.verbiage = activity.generate_verbiage
    activity.save!
  end
end
