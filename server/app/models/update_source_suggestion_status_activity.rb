class UpdateSourceSuggestionStatusActivity < Activity
  def source_suggestion
    self.subject
  end

  def generate_verbiage
    self.events[0].action
  end
end
