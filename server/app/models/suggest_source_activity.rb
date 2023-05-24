class SuggestSourceActivity < Activity
  has_one_linked :comment
  has_one_linked :source_suggestion

  def source
    self.subject
  end

  def generate_verbiage
    'created a source suggestion for source'
  end
end
