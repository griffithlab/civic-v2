Event.where(action: [ 'revision accepted', 'revision suggested', 'revision rejected' ]).find_each do |event|
  if event.subject != event.originating_object.subject
    revision = event.originating_object
    if event.state_params&.dig('suggested_change', 'id') == event.originating_object_id
      Notification.where(event: event).delete_all
      event.destroy!
    elsif event.subject_type == "Variant" && revision.subject_type == 'MolecularProfile' && (revision.field_name ==  'description' || revision.field_name == 'source_ids')
      event.subject = revision.subject
      event.save!(validate: false)
    else
      binding.pry
    end
  end
end

events = Event.where(originating_object_type: 'Flag')
  .find_each.reject { |x| x.subject == x.originating_object.flaggable }

events.each do |e|
  e.subject = e.originating_object.flaggable
  e.save!(validate: false)
end
