class SuggestRevisionSetActivity < Activity
  has_one_linked :revision_set
  has_many_linked :revisions

  def generate_verbiage
    rev_count = revisions.size
    "suggested #{rev_count} #{'revisions'.pluralize(rev_count)} on"
  end
end
