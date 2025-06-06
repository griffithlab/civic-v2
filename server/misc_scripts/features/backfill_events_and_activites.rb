Event.where(subject_type: 'Gene').find_each do |event|
  gene = Features::Gene.find(event.subject_id)
  feature = gene.feature
  event.subject = feature
  event.save!
end

Activity.where(subject_type: 'Gene').find_each do |activity|
  gene = Features::Gene.find(activity.subject_id)
  feature = gene.feature
  activity.subject = feature
  activity.save!
end
