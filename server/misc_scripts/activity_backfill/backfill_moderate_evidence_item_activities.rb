Event.where(action: [ 'accepted', 'rejected', 'reverted' ], activity_id: nil).find_each do |event|
  if !event.subject.nil?
    activity = ModerateEvidenceItemActivity.create(
      subject: event.subject,
      user_id: event.originating_user_id,
      organization_id: event.organization_id,
      created_at: event.created_at,
    )

    event.activity_id = activity.id
    event.save!

    activity.verbiage = activity.generate_verbiage
    activity.save!
  end
end
