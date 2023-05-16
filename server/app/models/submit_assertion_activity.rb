class SubmitAssertionActivity < Activity
  has_one :comment_link,
    ->() { where(entity_type: 'Comment') },
    foreign_key: :activity_id,
    class_name: 'ActivityLinkedEntity'

  has_one :linked_comment,
    through: :comment_link,
    source: :entity,
    source_type: 'Comment'


  def comment
    if activity_linked_entities.loaded?
      activity_linked_entities.find { |e| e.entity_type == 'Comment' }.entity
    else
      self.linked_comment
    end
  end

  def name
    'submitted assertion'
  end
end
