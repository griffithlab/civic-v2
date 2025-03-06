Event.where(action: [ 'requeued source suggestion', 'curated source suggestion', 'rejected source suggestion' ], activity_id: nil).find_each do |event|
  activity = UpdateSourceSuggestionStatusActivity.create(
    subject: event.subject,
    user_id: event.originating_user_id,
    organization_id: event.organization_id,
    created_at: event.created_at
  )

  event.activity_id = activity.id
  event.save!

  activity.link_entities!([ event.originating_object ])
  activity.verbiage = activity.generate_verbiage
  activity.save!
end
