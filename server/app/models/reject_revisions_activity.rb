class RejectRevisionsActivity < Activity
  has_many_linked :revisions

  def generate_verbiage
    rev_count = revisions.size
    "rejected #{rev_count} #{'revision'.pluralize(rev_count)} to"
  end
end
