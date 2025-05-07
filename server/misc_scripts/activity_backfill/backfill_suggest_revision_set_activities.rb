RevisionSet.find_each do |revision_set|
  revisions = revision_set.revisions

  event = revisions.map { |r| r.creation_event }.compact.first

  if event
    activity = SuggestRevisionSetActivity.where(
        subject: event.subject,
        user_id: event.originating_user_id,
        organization_id: event.organization_id,
        created_at: event.created_at,
    ).first_or_create

    revisions.each do |revision|
      e = revision.creation_event
      if e.nil?
        e = Event.create!(
          action: 'revision suggested',
          originating_user_id: event.originating_user.id,
          created_at: event.created_at,
          subject: event.subject,
          originating_object: revision,
          organization_id: event.organization_id,
          activity_id: activity.id
        )
      else
        e.activity_id = activity.id
        e.save!
      end

      possible_comment = revision.comments&.first

      if possible_comment
        differential = (e.created_at.to_i - possible_comment.created_at.to_i).abs
        if differential <= 30
          activity.link_entities!(possible_comment)
          if activity.note.nil?
            activity.note = possible_comment.comment
            activity.save!
          end
          comment_event = Event.find_by(originating_object: possible_comment)
          if comment_event
            comment_event.activity_id = activity.id
            comment_event.save!
          else
            Event.create!(
              action: 'commented',
              originating_user_id: possible_comment.user.id,
              created_at: possible_comment.created_at,
              subject: event.subject,
              originating_object: possible_comment,
              organization_id: event.organization_id,
              activity_id: activity.id
            )
          end
        end
      end
    end

    activity.link_entities!([ revisions, revision_set ].flatten)

    activity.verbiage = activity.generate_verbiage
    activity.save!
  end
end
