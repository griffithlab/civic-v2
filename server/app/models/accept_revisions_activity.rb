class AcceptRevisionsActivity < Activity
  has_many :revision_links,
    ->() { where(entity_type: 'Revisions') },
    foreign_key: :activity_id,
    class_name: 'ActivityLinkedEntity'

  has_many :linked_revisions,
    through: :revision_links,
    source: :entity,
    source_type: 'Revisions',
    ->() { where(status: 'accepted') }

  has_many :linked_superseded_revisions,
    through: :revision_links,
    source: :entity,
    source_type: 'Revisions',
    ->() { where(status: 'superseded') }

  def generate_verbiage
    rev_count = revisions.size
    "accepted #{rev_count} #{'revisions'.pluralize(rev_count)} on #{subject.class.name.titleize}"
  end
end
