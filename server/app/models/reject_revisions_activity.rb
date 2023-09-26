class RejectRevisionsActivity < Activity
  has_many_linked :revisions

  def generate_verbiage
    rev_count = revisions.size
    "rejected #{rev_count} #{'revisions'.pluralize(rev_count)} on #{subject.class.name.titleize}"
  end
end
