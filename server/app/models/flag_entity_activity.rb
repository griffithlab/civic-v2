class FlagEntityActivity < Activity
  has_one :flag_link,
    ->() { where(entity_type: 'Flag') },
    foreign_key: :activity_id,
    class_name: 'ActivityLinkedEntity'

  has_one :comment_link,
    ->() { where(entity_type: 'Comment') },
    foreign_key: :activity_id,
    class_name: 'ActivityLinkedEntity'

  has_one :linked_flag,
    through: :flag_link,
    source: :entity,
    source_type: 'Flag'

  has_one :linked_comment,
    through: :comment_link,
    source: :entity,
    source_type: 'Comment'


  def flaggable
    self.subject
  end

  def flag
    if activity_linked_entities.loaded?
      activity_linked_entities.find { |e| e.entity_type == 'Flag' }.entity
    else
      self.linked_flag
    end
  end

  def comment
    if activity_linked_entities.loaded?
      activity_linked_entities.find { |e| e.entity_type == 'Comment' }.entity
    else
      self.linked_comment
    end
  end

  def generate_verbiage
    'flagged'
  end
end
