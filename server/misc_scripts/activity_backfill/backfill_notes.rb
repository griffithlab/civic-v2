Activity.where.not(type: [ "CommentActivity", 'ModerateAssertionActivity', 'ModerateEvidenceItemActivity' ])
.find_each do |a|
  events = Event.where(action: 'commented', activity_id: a.id)
  events.each do |e|
    comment = e&.originating_object
    if comment
      a.note = comment.comment
      a.save!
      Notification.where(event: e).destroy_all
      v = Variant.where(deprecation_comment_id: comment.id)
      v.each do |variant|
        variant.deprecation_comment_id = nil
        variant.save!(validate: false)
      end
      EntityMention.where(comment: comment).destroy_all
      UserMention.where(comment: comment).destroy_all
      ActivityLinkedEntity.where(entity: comment).destroy_all
      comment.destroy!
      e.destroy!
    elsif e.present? && comment.nil?
      binding.pry
    end
  end
end

SuggestSourceActivity.find_each do |a|
  a.note = a.source_suggestion.initial_comment
  a.save!
end

SourceSuggestion.find_each do |s|
  a = s.last_status_update_activity
  if a
    a.note = s.reason
    a.save!
  end
end
