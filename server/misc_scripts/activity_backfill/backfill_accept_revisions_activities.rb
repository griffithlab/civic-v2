Event.where(action: 'revision accepted', activity_id: nil)
.group("subject_id, subject_type, originating_user_id, organization_id, batch_timestamp")
.select("array_agg(events.id) as event_ids, min(events.id) as id, subject_id, subject_type, originating_user_id, organization_id, date_trunc('minute', created_at) as batch_timestamp")
.each do |e|
  batch = Event.where(id: e.event_ids)

  activity = AcceptRevisionsActivity.where(
    subject: e.subject,
    user_id: e.originating_user_id,
    organization_id: e.organization_id,
    created_at: e.batch_timestamp
  ).first_or_create!

  revisions = batch.map(&:originating_object)

  possible_superseded_revision_events = Event.where(
    action: 'revision superseded',
    subject: e.subject,
    originating_user_id: e.originating_user_id,
    organization_id: e.organization_id
  )

  superseded_revision_events = possible_superseded_revision_events.reject {  |c| (c.created_at.to_i - e.batch_timestamp.to_i).abs > 60 }

  superseded_revision_events.each do |event|
    event.activity_id = activity.id
    event.save!
  end

  activity.link_entities!([ revisions, superseded_revision_events.map(&:originating_object) ].flatten)

  batch.each do |event|
    event.activity_id = activity.id
    event.save!

    possible_comment = event.originating_object&.comments.reject { |c| (c.created_at.to_i - e.batch_timestamp.to_i).abs > 60 }.first

    if possible_comment
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

  activity.verbiage = activity.generate_verbiage
  activity.save!
end
