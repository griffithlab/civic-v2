Comment.where(commentable_type: 'Gene').find_each do |comment|
  gene = Features::Gene.find(comment.commentable_id)
  feature = gene.feature

  comment.commentable = feature
  comment.save!
end
