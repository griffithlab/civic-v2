class AcceptRevisionsActivity < Activity
  has_many :revision_links,
    ->() { where(entity_type: "Revision") },
    foreign_key: :activity_id,
    class_name: "ActivityLinkedEntity"

  has_many :linked_revisions,
    ->() { where(status: "accepted") },
    through: :revision_links,
    source: :entity,
    source_type: "Revision"

  has_many :linked_superseded_revisions,
    ->() { where(status: "superseded") },
    through: :revision_links,
    source: :entity,
    source_type: "Revision"

  has_many_linked :approvals

  def generate_verbiage
    rev_count = linked_revisions.size
    "accepted #{rev_count} #{'revision'.pluralize(rev_count)} to"
  end
end
