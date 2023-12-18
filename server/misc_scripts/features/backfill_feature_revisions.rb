Revision.where(subject_type: 'Gene').find_each do |revision|
  gene = Features::Gene.find(revision.subject_id)
  feature = gene.feature

  revision.subject = feature
  revision.save!
end
