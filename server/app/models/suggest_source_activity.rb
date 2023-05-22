class SuggestSourceActivity < Activity
  has_one :comment_link,
    ->() { where(entity_type: 'Comment') },
    foreign_key: :activity_id,
    class_name: 'ActivityLinkedEntity'

  has_one :source_suggestion_link,
    ->() { where(entity_type: 'SourceSuggestion') },
    foreign_key: :activity_id,
    class_name: 'ActivityLinkedEntity'

  has_one :linked_comment,
    through: :comment_link,
    source: :entity,
    source_type: 'Comment'

  has_one :linked_source_suggestion,
    through: :source_suggestion_link,
    source: :entity,
    source_type: 'SourceSuggestion'


  def source
    self.subject
  end

  def comment
    if activity_linked_entities.loaded?
      activity_linked_entities.find { |e| e.entity_type == 'Comment' }.entity
    else
      self.linked_comment
    end
  end

  def source_suggestion
    if activity_linked_entities.loaded?
      activity_linked_entities.find { |e| e.entity_type == 'SourceSuggestion' }.entity
    else
      self.linked_source_suggestion
    end
  end

  def generate_verbiage
    'created a source suggestion for source'
  end
end
