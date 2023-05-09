class FlagEntityActivity < Activity
  has_one :flag_link,
    ->() { where(entity_type: 'Flag') },
    foreign_key: :activity_id,
    class_name: 'ActivityLinkedEntity'

  has_one :comment_link,
    ->() { where(entity_type: 'Coment') },
    foreign_key: :activity_id,
    class_name: 'ActivityLinkedEntity'

  has_one :flag, 
    through: :flag_link,
    source: :entity,
    source_type: 'Flag'

  has_one :comment, 
    through: :comment_link,
    source: :entity,
    source_type: 'Comment'


  def foo_flag
    if activity_linked_entities.loaded?
      activity_linked_entities.find { |e| e.entity_type == 'Flag' }.entity
    else
      self.flag
    end
  end


  def name
    'flag entity'
  end
end
