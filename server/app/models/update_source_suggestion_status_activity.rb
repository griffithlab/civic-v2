class UpdateSourceSuggestionStatusActivity < Activity
  has_one_linked :source_suggestion

  def source
    self.subject
  end

  def generate_verbiage
    self.events[0].action
  end
end
